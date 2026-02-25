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

// 3. Cargar las familias
const API_URL = "http://localhost/lossimpson/Backend/public/familias";

function loadFamilies() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            const container = document.querySelector("#family-container");

            data.forEach(familia => {
                const carta = {
                    id: familia.id,
                    imagen: `/lossimpson/img/${familia.imagen}`,
                    nombre: familia.nombre,
                    titulo: familia.titulo,
                    descripcion: familia.descripcion,
                    enlace: `http://localhost/lossimpson/Frontend/views/personajes.html?f=${familia.id}`,
                };

                container.appendChild(card(carta));
            });
        })
        .catch(error => {
            console.error("Error al cargar familias:", error);
        });
}

loadFamilies();
renderFooter();
