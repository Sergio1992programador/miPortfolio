const contenedor = document.getElementById("todo");

function recibirEnlace(href) {
    fetch('getDashboard.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `dato=${href}`
    }
    ).then(console.log(`Peticion: ${href}`))
} 

class Personaje {
    constructor(id, nombre, enlace, imagen, titulo, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.enlace = enlace;
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

const personajesData = new Personaje(
    "personajes",
    "Personajes",
    recibirEnlace('Personajes.html'),
    "img/personajes1.png",
    "Todos los personajes",
    "<p>Aquí, podrás ver a todos los personajes más importantes de Los Simpson, conocer sus historias, curiosidades y descubrir por qué cada uno de ellos ha dejado una huella inolvidable en la cultura popular.</p><br>" 
);

const familiasData = new Personaje(
    "familias",
    "Familias",
    "homer.html",
    "img/familias.webp",
    "Familias importantes",
    "<p>Aquí, podrás ver cómo se dividen las familias más importantes de Los Simpson, conocer sus integrantes, sus relaciones y el papel que cada una juega en la historia de la serie. Desde los Simpson hasta los Flanders, cada familia aporta su propio estilo, valores y momentos inolvidables.</p><br>"
);

const videoData = new Personaje(
    "video",
    "Videojuego",
    "homer.html",
    "img/video.png",
    "Videojuego de los Simpson",
    "<p>Aquí, podrás ver a Bart Simpson en plena acción, saltando con su skate. Con su actitud rebelde y su energía imparable, Bart se convierte en el protagonista de esta aventura</p><br>" 
);

const tiendaData = new Personaje(
    "tienda",
    "Tienda Simpson",
    "homer.html",
    "img/tienda.png",
    "Tienda de los Simpson",
    "<p>Aquí, accederás a la tienda donde podrás comprar productos de Los Simpson.</p><br>"
);



const characterData = [];
characterData.push(personajesData);
characterData.push(familiasData);
characterData.push(videoData);
characterData.push(tiendaData);

console.log("AAAAAAAAAAAAAAAAA");
for (const character of characterData) {
    let characterInfo = {
        id: character.i0,
        nombre: character.nombre,
        imagen: character.imagen,
        enlace: character.enlace,
        titulo: character.titulo,
        descripcion: character.descripcion
    };
    try {
      const response = await fetch("card.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(characterInfo)
      });

      const html = await response.text();
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      contenedor.appendChild(wrapper.firstElementChild);
      console.log("EEEEEEEEEEEEEEEE");
    } catch (error) {
      console.error("Error al cargar la tarjeta:", error);
    }
}   


/* for (const character of characterData) {
    const card = document.createElement("div");
    card.classList.add("col-sm-10", "m-3");
    card.id = character.id;

    // Crear contenedor para imagen
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

    // Crear contenedor para la descripción con scroll
    const descripcionWrapper = document.createElement("div");
    descripcionWrapper.classList.add("descripcion-wrapper");
    descripcionWrapper.innerHTML = `<p>${character.descripcion}</p>`;

    card.innerHTML += `<h3>${character.nombre}</h3>`;
    card.appendChild(imageWrapper);
    card.innerHTML += `<h4>${character.titulo}</h4>`;
    card.appendChild(descripcionWrapper);

    contenedor.appendChild(card);

    const direccion = `${character.id}.html`;
    card.addEventListener("click", () => {
        window.location.href = direccion;
    });

} */