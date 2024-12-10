import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
/* import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; */
/* require('dotenv').config(); */

const firebaseConfig = {
    apiKey:"AIzaSyCvqFw4S8XWWTMd3gqxXq_zdbo8k6w_JTU" /* process.env.FIREBASE_API_KEY */,
    authDomain: "mupoficial-4f352.firebaseapp.com"/* process.env.FIREBASE_AUTH_DOMAIN */,
    projectId: "mupoficial-4f352"/* process.env.FIREBASE_PROJECT_ID */,
    storageBucket: "mupoficial-4f352.firebasestorage.app"/* process.env.FIREBASE_STORAGE_BUCKET */,
    messagingSenderId: "1093209572166"/* process.env.FIREBASE_MESSAGING_SENDER_ID */,
    appId: "1:1093209572166:web:a62444e7e44037dc9f1b47"/* process.env.FIREBASE_APP_ID */
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
