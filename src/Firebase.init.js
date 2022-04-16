// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFkRXHIb1Ta2G-kUcC-QoiO1ZfYUGDZoU",
    authDomain: "fir-authentiction-78c5b.firebaseapp.com",
    projectId: "fir-authentiction-78c5b",
    storageBucket: "fir-authentiction-78c5b.appspot.com",
    messagingSenderId: "703189636518",
    appId: "1:703189636518:web:01bb143a963c14811dab67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;