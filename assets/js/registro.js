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

/* Logica para formularios */
const registroForm = document.getElementById('registroForm')
registroForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nombreReg = document.getElementById('nombre-reg')
  const apellidoReg = document.getElementById('apellido-reg')
  const emailReg = document.getElementById('email-reg')
  const passwordReg = document.getElementById('password-reg')

  console.log(nombreReg.value)
  console.log(apellidoReg.value)
  console.log(emailReg.value)
  console.log(passwordReg.value)



})