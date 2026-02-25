import { card } from '../../components/card.js';
import { renderFooter } from '../../components/footer.js';
import { renderHeader } from '../../components/header.js';

// 1. Verificar si el usuario está logueado
const token = localStorage.getItem("token");
if (!token) {
  const currentUrl = window.location.pathname + window.location.search;
  window.location.href = `/lossimpson/Frontend/views/login.html?redirect=${encodeURIComponent(currentUrl)}`;
}

// 2. Cargar el header
renderHeader();

// 3. Cargar personajes
function loadPersonajes() {
  const params = new URLSearchParams(window.location.search);
  const familiaId = params.get("f");

  const API_URL = familiaId
    ? `http://localhost/lossimpson/Backend/public/personajes?f=${familiaId}`
    : "http://localhost/lossimpson/Backend/public/personajes";

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const container = document.querySelector("#character-container");

      data.forEach(personaje => {
        const carta = {
          id: personaje.id,
          imagen: `/lossimpson/img/${personaje.imagen}`,
          nombre: personaje.nombre,
          titulo: personaje.titulo,
          descripcion: personaje.descripcion,
          enlace: `http://localhost/lossimpson/Frontend/views/mantenimiento.html?id=${personaje.id}`,
        };

        container.appendChild(card(carta));
      });
    })
    .catch(error => {
      console.error("Error al cargar personajes:", error);
    });
}

// 4. Ejecutar funciones principales
loadPersonajes();
renderFooter();
