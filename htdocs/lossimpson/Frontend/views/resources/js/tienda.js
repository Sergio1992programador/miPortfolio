import { card } from '../../components/card.js';
import { renderFooter } from '../../components/footer.js';
import { renderHeader } from '../../components/header.js';

// 1. Verificar si el usuario está logueado
// Ya no redirigimos si no hay token, solo lo usamos para mostrar estado en el header si lo necesitas
const token = localStorage.getItem("token");

// 2. Cargar el header
renderHeader(token);

// 3. Cargar las familias (productos de la tienda)
const API_URL = "http://localhost/lossimpson/Backend/public/tienda";

function loadTienda() {
    fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
            const container = document.querySelector("#tienda-container");

            data.forEach(tienda => {
                const carta = {
                    id: tienda.id,
                    imagen: `/lossimpson/img/${tienda.imagen}`,
                    nombre: tienda.nombre,
                    titulo: tienda.titulo,
                    descripcion: tienda.descripcion,
                    enlace: `http://localhost/lossimpson/Frontend/views/tiendacamiseta.html?id=${tienda.id}`,
                };

                container.appendChild(card(carta));
            });
        })
        .catch(error => {
            console.error("Error al cargar tienda:", error);
        });
}

loadTienda();
renderFooter();