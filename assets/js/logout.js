import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { hideLoader, showLoader } from "./loader.js";
import { showMessage } from "./showMessage.js";

const logout = document.getElementById("logout");

logout.addEventListener("click", async () => {
  showLoader();
  try {
    await signOut(auth)
    location.reload();
    hideLoader();
  } catch (error) {
    showMessage('Tente sair novamente', 'error')
    hideLoader();
  }
});