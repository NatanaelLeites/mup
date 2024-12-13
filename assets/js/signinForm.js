import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
import { hideLoader, showLoader } from "./loader.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showLoader();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    window.location.href = "./pages/plataforma.html";

    // Cierra modal
    const modal = bootstrap.Modal.getInstance(signinModal.closest('.modal'));
    modal.hide();
    hideLoader();

    // resetea form
    signInForm.reset();

    // show welcome message
    showMessage("Bem vind@ " + userCredentials.user.email);
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Senha errada", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("Usuario nao encontrado", "error")
    } else {
      showMessage("Erro no inicio", "error")
    }
    hideLoader();
  }
});