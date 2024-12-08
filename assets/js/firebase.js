import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"


const firebaseConfig = {
    apiKey: "AIzaSyCvqFw4S8XWWTMd3gqxXq_zdbo8k6w_JTU",
    authDomain: "mupoficial-4f352.firebaseapp.com",
    projectId: "mupoficial-4f352",
    storageBucket: "mupoficial-4f352.firebasestorage.app",
    messagingSenderId: "1093209572166",
    appId: "1:1093209572166:web:a62444e7e44037dc9f1b47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
