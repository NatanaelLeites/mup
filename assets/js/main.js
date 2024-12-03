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
    
    document.getElementById("myForm").submit();
    alert('Enviado!')
    window.location.href = "index.html";
}

export const linkDePago = "https://www.google.com/webhp?hl=es&ictx=2&sa=X&sqi=2&ved=0ahUKEwjGh5TSpIqKAxUsJrkGHaS9CKAQPQgI"