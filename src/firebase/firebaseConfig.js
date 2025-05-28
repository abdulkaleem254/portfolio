// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTiMEQR7srb7-HDl5hE56ScTx4ItGaGGw",
    authDomain: "portfolio-ffd68.firebaseapp.com",
    projectId: "portfolio-ffd68",
    storageBucket: "portfolio-ffd68.firebasestorage.app",
    messagingSenderId: "94560965408",
    appId: "1:94560965408:web:e4f03947e658abc83a7d45",
    measurementId: "G-1WZ5741H6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db};