// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMwCK7D_i1DZywxy-QUssmUQXvoOF_hOU",
  authDomain: "netflix-clone-d1e69.firebaseapp.com",
  projectId: "netflix-clone-d1e69",
  storageBucket: "netflix-clone-d1e69.appspot.com",
  messagingSenderId: "39591773494",
  appId: "1:39591773494:web:7c6c8914fffdc90a7d9f97",
  measurementId: "G-JNG3WYLF7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// npm install -g firebase-tools