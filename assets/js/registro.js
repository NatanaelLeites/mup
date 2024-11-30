

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