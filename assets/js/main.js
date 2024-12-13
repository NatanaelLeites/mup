import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./firebase.js";
import { loginCheck } from "./loginCheck.js";
import { setupPosts } from "./postList.js"
import { hideLoader, showLoader } from "./loader.js";

import './signupForm.js'
import './signinForm.js'
import './logout.js'
import { showMessage } from "./showMessage.js";
onAuthStateChanged(auth, async (user) => {
    showLoader()
    if (user) {
        const querySnapshot = await getDocs(collection(db, 'posts'))
        setupPosts(querySnapshot.docs)
    } else {

    }
    hideLoader()
    loginCheck(user)
})
/* Comprar */
const btnComprar = document.getElementById('btn-comprar')
btnComprar.addEventListener('click', () => {
    if (user) {
        window.location.href = './pages/plataforma.hmtl';
    } else {
        Toastify({
            text: 'Deve iniciar',
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: type === "success" ? "green" : "red",
            },

        }).showToast();
    }
})



/* Menu mobile */
const btnMenu = document.getElementById('nav-btn');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('activo')
})
nav.addEventListener('click', (event) => {
    if (event.target.closest('.nav-item')) {
        nav.classList.remove('activo');
    }
});

/* Envios de email */
function submitForm() {

    document.getElementById("myForm").submit();
    alert('Enviado!')
    window.location.href = "index.html";
};