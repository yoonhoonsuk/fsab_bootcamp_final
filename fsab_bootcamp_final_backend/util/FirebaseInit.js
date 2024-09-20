//util/FirebaseInit.js
// add getFireStore

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqwe59sxN9Ni9vZPB8kv8N1VBjttfykTo",
    authDomain: "fsab-bootcamp-233bc.firebaseapp.com",
    projectId: "fsab-bootcamp-233bc",
    storageBucket: "fsab-bootcamp-233bc.appspot.com",
    messagingSenderId: "978458313816",
    appId: "1:978458313816:web:d2b663b17342925e6c362d"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);