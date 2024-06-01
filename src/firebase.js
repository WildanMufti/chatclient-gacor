// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDevxS6PwEx2N4u271BTH7mUxGWDWz21r0",
  authDomain: "ggwp-10fcc.firebaseapp.com",
  projectId: "ggwp-10fcc",
  storageBucket: "ggwp-10fcc.appspot.com",
  messagingSenderId: "285477849297",
  appId: "1:285477849297:web:db9a5f3a5b5d8282815df0",
  measurementId: "G-EXMF9C74T1"
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getFirestore} from 'firebase/firestore';

export const db = getFirestore(app);

import {getAuth} from 'firebase/auth';
export const auth = getAuth(app);