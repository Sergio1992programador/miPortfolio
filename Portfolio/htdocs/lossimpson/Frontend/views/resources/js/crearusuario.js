import { renderFooter } from "../../components/footer.js";
import { renderHeader } from "../../components/header.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("numero").value;
    const nombre_usuario = document.getElementById("usuario_nuevo").value;
    const password = document.getElementById("password").value;

    const payload = {
        nombre,
        apellidos,
        email,
        telefono,
        nombre_usuario,
        password
    };

    try {
        const res = await fetch("http://localhost/lossimpson/Backend/public/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (res.ok) {
            alert("Usuario creado correctamente");
            window.location.href = "login.html";
        } else {
            alert(data.mensaje || "Error al crear usuario");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Error de red o del servidor");
    }
});

renderHeader();
renderFooter();