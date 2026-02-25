/* 
let personajes = [];
for (let i = 1; i < 100; i++) {
}
fetch("https://thesimpsonsapi.com/api/characters")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en la petición: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos recibidos:", data.name);

    })
    .catch(error => {
        console.error("Hubo un problema:", error);
    }); */

// Función para obtener personajes desde SWAPI
async function obtenerPersonajes() {
    try {
        const response = await fetch("https://thesimpsonsapi.com/api/characters");
        if (!response.ok) {
            throw new Error("Error en la petición: " + response.status);
        }

        const data = await response.json();

        // Seleccionamos el contenedor
        const contenedor = document.getElementById("characters");
        contenedor.innerHTML = "";
        let cnt = 1;
        // Recorremos los personajes
        data.results.forEach(personaje => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
        <p><img src="https://cdn.thesimpsonsapi.com/500/character/${cnt}.webp"></img></p>
        <h2>${personaje.name}</h2>
        <p><strong>Edad:</strong> ${personaje.age} años</p>
        <p><strong>Fecha de nacimiento:</strong> ${personaje.birthdate}</p>
        <p><strong>Género:</strong> ${personaje.gender}</p>
        <p><strong>Puesto de trabajo:</strong> ${personaje.occupation}</p>
        <p><strong>Frases:</strong> ${personaje.phrases}</p>
        <p><strong>Estado:</strong> ${personaje.status}</p>



      `;

            contenedor.appendChild(card);
            cnt++;
        });

    } catch (error) {
        console.error("Hubo un problema:", error);
    }
}

// Ejecutamos la función cuando cargue la página
document.addEventListener("DOMContentLoaded", obtenerPersonajes);

