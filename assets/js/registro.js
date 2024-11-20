import { createUser } from './firebase';

const registroForm = document.getElementById('registroForm')
registroForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const nombreReg = document.getElementById('nombre-reg')
  const apellidoReg = document.getElementById('apellido-reg')
  const emailReg = document.getElementById('email-reg')
  const passwordReg = document.getElementById('password-reg')

  createUser(emailReg, passwordReg)
    .then((userCredential)=>{
      console.log(userCredential)
    })
    .catch((error) => {
      alert('Nao registrado')
    });

})