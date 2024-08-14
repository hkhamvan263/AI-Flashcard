import { NextResponse} from "next/server";
import OpenAI from "openai";
import { Models } from "openai/resources";


const systemPrompt = `You are a flashard generating machine
that generates flashcars for users based on their prompts.

Return in the following JSON format
{
    "flashcards: [
    {
        "front": str,
        "back": str
    }
    ]
}
`

export async function POST(req) {
    const openai = OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role:'user', content: data},
        ],
        model: 'gpt-4o',
        response_format:{type: 'json_object'}
    })

    /* written message instead of messages (the suggested term) */
    const flashcards = JSON.parse(completion.choices[0].message.content)  

    /* written flashcard instead of flashcard (suggested term) */
    return NextResponse.json(flashcards.flashcard)
}