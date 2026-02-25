import { renderFooter } from "../../components/footer.js";
import { renderHeader } from "../../components/header.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("normal");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !apellidos || !correo || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const payload = {
      nombre,
      apellidos,
      correo,
      mensaje,
    };

    try {
      const res = await fetch("http://localhost/lossimpson/Backend/public/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("response: ", res);
      const data = await res.json();
      console.log("data: ", data === null);

      if (res.ok) {
        alert(data.mensaje || "Mensaje enviado correctamente");
        form.reset(); // limpiar formulario
      } else {
        alert(data.mensaje || "Error al enviar el mensaje");
      }
    } catch(error) {
      console.error("Error en la solicitud:", error);
      alert("Error de red o del servidor");
    }
  });
});

renderHeader();
renderFooter();