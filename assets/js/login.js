/* Firebase */
/* import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';

import {
    sendEmailVerification, getAuth, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyBdxFOSuXhzpaRXYLDC5Zi6yR_wwS42tSU",
    authDomain: "mupoficial-19599.firebaseapp.com",
    projectId: "mupoficial-19599",
    storageBucket: "mupoficial-19599.firebasestorage.app",
    messagingSenderId: "219106381952",
    appId: "1:219106381952:web:dab8f20f21bd2aba5e9665",
    measurementId: "G-1QMM0TTZGF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); */
/* Fin codigo Firebase */

const inicioForm = document.getElementById('inicioForm')
inicioForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const emailLog = document.getElementById('email-log')
    const passwordLog = document.getElementById('password-log')
    
})

/* cerrar.addEventListener('click', (e) => {
    auth.signOut()
        .then(() => {
            alert('Sesion cerrada')
        })
        .catch((error) => {
            alert('Error al cerrar sesion')
        })
}) */

/* auth.onAuthStateChanged(user =>{
    if(user){
        console.log('Usuario activo')
        const email = user.emailVerified;
        if(emailVerified){
            window.open('https://www.google.com.br')
        }else{
            auth.signOut();
        }
    }else{
        console.log('Usuario inactivo')
    }
}) */