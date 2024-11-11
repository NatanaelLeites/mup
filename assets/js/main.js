"use strict";
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

/* envios de email */
function submitForm() {
    // Aquí puedes realizar acciones antes de enviar el formulario, como validar datos
    document.getElementById("myForm").submit();
    window.location.href = "index.html"; // Redirige a la página que deseas
}