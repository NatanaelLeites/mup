/* import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
import { hideLoader, showLoader } from "./loader.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoader();
  const nombre = signUpForm["nombre-reg"].value;
  const apellido = signUpForm["apellido-reg"].value;
  const email = signUpForm["email-reg"].value;
  const password = signUpForm["password-reg"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    // Cerrar modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
    hideLoader();

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Bem vind@ " + nombre + " " + apellido);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("O email ja foi registrado", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("O email é invalido", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("A senha é muinto curta", "error")
    } else if (error.code) {
      showMessage("Falhou o Registro, tente novamente", "error")
    }
    hideLoader();
  }

});
 */