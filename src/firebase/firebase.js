// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBndenqmZU-X9W30IvFK2cOEzRhKkZw9zE",
    authDomain: "reactjs-ecommerce-cc628.firebaseapp.com",
    projectId: "reactjs-ecommerce-cc628",
    storageBucket: "reactjs-ecommerce-cc628.firebasestorage.app",
    messagingSenderId: "1012240554432",
    appId: "1:1012240554432:web:8c398775f15784ebe15025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);