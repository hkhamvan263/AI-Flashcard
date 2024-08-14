// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGXQngPlmlaPwpp6djlXO8Kz4P4GIBRfo",
  authDomain: "ai-flashcards-e7a4a.firebaseapp.com",
  projectId: "ai-flashcards-e7a4a",
  storageBucket: "ai-flashcards-e7a4a.appspot.com",
  messagingSenderId: "601000515484",
  appId: "1:601000515484:web:add601b697cb3ace809a59",
  measurementId: "G-HNB36TPKDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);