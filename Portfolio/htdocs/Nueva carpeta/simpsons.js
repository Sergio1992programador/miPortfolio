// Asegúrate de que este contenedor exista en tu HTML
const contenedor = document.getElementById("character-container");

function getParametroFamilia() {
    const params = new URLSearchParams(window.location.search);
    return params.get("f");
}

const familiaId = getParametroFamilia();
const url = familiaId 
    ? `http://localhost/Bootstrap/getPersonajes.php?f=${familiaId}` 
    : `http://localhost/Bootstrap/getPersonajes.php`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            console.error("Error del servidor:", data.error);
            return;
        }

        data.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("col-sm-10", "m-3");
            card.id = character.id;

            const imageWrapper = document.createElement("div");
            imageWrapper.style.display = "flex";
            imageWrapper.style.justifyContent = "center";
            imageWrapper.style.alignItems = "center";
            imageWrapper.style.marginBottom = "10px";

            const imagen = document.createElement("img");
            imagen.id = `${character.id}-image`;
            imagen.src = character.imagen;
            imagen.alt = character.nombre;
            imagen.style.height = "200px";
            imagen.style.objectFit = "cover";

            imageWrapper.appendChild(imagen);

            const descripcionWrapper = document.createElement("div");
            descripcionWrapper.classList.add("descripcion-wrapper");
            descripcionWrapper.innerHTML = character.descripcion;

            card.innerHTML += `<h3>${character.nombre}</h3>`;
            card.appendChild(imageWrapper);
            card.innerHTML += `<h4>${character.titulo}</h4>`;
            card.appendChild(descripcionWrapper);

            contenedor.appendChild(card);

            // Redirigir a detalle del personaje si lo deseas
            // const direccion = `${character.id}.html`;
            // card.addEventListener("click", () => {
            //     window.location.href = direccion;
            // });
        });
    })
    .catch(error => console.error("Error al recuperar personajes:", error.message));