import { renderFooter } from "../../components/footer.js";
import { renderHeader } from "../../components/header.js";

renderHeader();
renderFooter();

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost/lossimpson/Backend/public/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
    });

    const data = await res.json();

    if (data.token) {
        localStorage.setItem("token", data.token);

        // Recuperar parámetro redirect si existe
        const params = new URLSearchParams(window.location.search);
        const redirectUrl = params.get("redirect");

        // Redirigir al destino original o a personajes.html
        window.location.href = redirectUrl || "personajes.html";
      } else {
  const msg = document.getElementById("login-message");
  if (msg) {
    msg.textContent = data.mensaje || "Usuario o contraseña incorrectos.";
    msg.classList.remove("d-none");
  }
}
});

// Mostrar mensaje si viene redirigido
const params = new URLSearchParams(window.location.search);
if (params.has("redirect")) {
    const msg = document.getElementById("login-message");
    if (msg) {
        msg.textContent = "Necesitas iniciar sesión para acceder a esa sección.";
    }
}
