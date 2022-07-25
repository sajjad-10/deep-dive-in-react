import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEAhs0U_TECzEnEjjIijyiyYi5MU6GGsg",
    authDomain: "housing-market-app-96733.firebaseapp.com",
    projectId: "housing-market-app-96733",
    storageBucket: "housing-market-app-96733.appspot.com",
    messagingSenderId: "349911718693",
    appId: "1:349911718693:web:bb4f4f1c3f5399bf7658cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
