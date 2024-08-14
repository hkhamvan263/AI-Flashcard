'use client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import next from "next";
import Head from "next/head"

export default function Home() {
  return (
    <Container maxWidth='100vw'>
      <Head>
        <title>Flashcard AI</title>
        <meta name="description" content="Create flashcards from your text"/>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography 
            variant="h6"
            style={{flexGrow: 1}}
          >   
            Flashcards AI</Typography>
          <SignedOut>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>

          <SignedIn>
            <UserButton />

          </SignedIn>

        </Toolbar>
      </AppBar> 
    </Container>
  )
}
