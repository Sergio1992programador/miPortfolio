import { card } from '../../components/card.js';
import { renderFooter } from '../../components/footer.js';
import { renderHeader } from '../../components/header.js';

// 1. Renderizar encabezado
renderHeader();

// 2. Definir las tarjetas
const cards = [
    {
        id: "personajes",
        nombre: "Personajes",
        enlace: "http://localhost/lossimpson/Frontend/views/personajes.html",
        imagen: "personajes1.png",
        titulo: "Todos los personajes",
        descripcion:
            "<p>Descubre a los personajes más importantes de Los Simpson, sus historias y curiosidades.</p>",
    },
    {
        id: "familias",
        nombre: "Familias",
        enlace: "http://localhost/lossimpson/Frontend/views/familias.html",
        imagen: "familias.webp",
        titulo: "Familias importantes",
        descripcion:
            "<p>Explora las familias más emblemáticas de la serie y sus relaciones únicas.</p>",
    },
    {
        id: "video",
        nombre: "Videojuego",
        enlace: "http://localhost/lossimpson/Frontend/views/mantenimiento.html",
        imagen: "video.png",
        titulo: "Videojuego de los Simpson",
        descripcion:
            "<p>Acompaña a Bart en su aventura con skate y actitud rebelde.</p>",
    },
    {
        id: "tienda",
        nombre: "Tienda Simpson",
        enlace: "http://localhost/lossimpson/Frontend/views/tienda.html",
        imagen: "tienda.png",
        titulo: "Tienda de los Simpson",
        descripcion:
            "<p>Accede a productos exclusivos de Los Simpson en nuestra tienda.</p>",
    },
];

// 3. Renderizar las cartas
function loadCards() {
    const container = document.querySelector("#category-container");

    if (!container) {
        console.error("No se encontró el contenedor #category-container");
        return;
    }

    cards.forEach((cardData) => {
        const carta = {
            ...cardData,
            imagen: `/lossimpson/img/${cardData.imagen}`,
        };
        container.appendChild(card(carta));
    });
}

// 4. Ejecutar funciones principales
loadCards();
renderFooter();
