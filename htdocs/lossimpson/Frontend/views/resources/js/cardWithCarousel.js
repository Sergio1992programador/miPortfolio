export function cardWithCarousel(data) {
  const style = document.createElement("style");
  style.textContent = `
    .top-section > div {
      min-width: 240px;
      word-break: break-word;
    }

    img.responsive-img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    .vertical-divider-inline {
      width: 2px;
      background-color: rgba(1, 174, 217, 0.6);
      margin: 0 24px;
      align-self: stretch;
    }

    .responsive-hr {
      display: none;
    }

    
.mt-4 {
    margin-top: 0 !important;
}

    .descripcion-wrapper {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 960px) {
      .top-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .vertical-divider-inline {
        display: none;
      }

      .responsive-hr {
        display: block;
        width: 100%;
        border: none;
        border-top: 2px solid rgba(1, 174, 217, 0.6);
        margin: 20px 0;
      }

      .top-section h2,
      .top-section h3,
      .top-section h4,
      .top-section p {
        width: 100%;
      }

      .top-section h4,
      .top-section div {
        text-align: center;
      }
    }
  `;
  document.head.appendChild(style);

  const cardElement = document.createElement("div");
  cardElement.className = "col-sm-10 text-info rounded-4 shadow-sm hover-card bg-white cursor-pointer";
  cardElement.id = data.id;
  cardElement.style.margin = "40px auto";
  cardElement.style.padding = "24px";

  const topSection = document.createElement("div");
  topSection.className = "top-section";
  topSection.style.display = "flex";
  topSection.style.flexWrap = "wrap";
  topSection.style.justifyContent = "space-between";
  topSection.style.alignItems = "stretch";
  topSection.style.gap = "20px";

  const imageWrapper = document.createElement("div");
  imageWrapper.style.flex = "1";

  const imagen = document.createElement("img");
  imagen.id = `${data.id}-image`;
  imagen.src = data.imagen;
  imagen.alt = data.nombre;
  imagen.className = "responsive-img";
  imagen.style.height = "300px";
  imagen.style.objectFit = "cover";
  imagen.style.borderRadius = "20px";
  imagen.style.padding = "8px";

  imageWrapper.appendChild(imagen);

  const contentWrapper = document.createElement("div");
  contentWrapper.style.flex = "2";
  contentWrapper.style.display = "flex";
  contentWrapper.style.flexDirection = "row";
  contentWrapper.style.alignItems = "center";
  contentWrapper.style.justifyContent = "center";
  contentWrapper.style.padding = "0 12px";
  contentWrapper.style.flexWrap = "wrap";

  const titleWrapper = document.createElement("div");
  titleWrapper.style.flex = "1";
  titleWrapper.style.textAlign = "center";

  const h3 = document.createElement("h2");
  h3.textContent = data.nombre;
  h3.style.margin = "0 0 12px 0";

  const h2 = document.createElement("h3");
  h2.textContent = data.titulo;
  h2.style.margin = "0";

  titleWrapper.appendChild(h3);
  titleWrapper.appendChild(h2);

  const verticalDivider = document.createElement("div");
  verticalDivider.className = "vertical-divider-inline";

  const responsiveHr = document.createElement("hr");
  responsiveHr.className = "responsive-hr";

  const descripcionWrapper = document.createElement("div");
  descripcionWrapper.className = "descripcion-wrapper";
  descripcionWrapper.style.flex = "1";

  const h4 = document.createElement("h4");
  h4.textContent = "Detalles del producto";
  h4.style.marginBottom = "12px";

  const descripcion = document.createElement("div");
  descripcion.innerHTML = data.descripcion;

  descripcionWrapper.appendChild(h4);
  descripcionWrapper.appendChild(descripcion);

  contentWrapper.appendChild(titleWrapper);
  contentWrapper.appendChild(verticalDivider);
  contentWrapper.appendChild(responsiveHr);
  contentWrapper.appendChild(descripcionWrapper);

  topSection.appendChild(imageWrapper);
  topSection.appendChild(contentWrapper);

  // 👉 Carrusel dentro de topSection con contenedor más pequeño
const carouselWrapper = document.createElement("div");
carouselWrapper.className = "carousel-wrapper";
carouselWrapper.style.width = "70%";
carouselWrapper.style.margin = "40px auto 0 auto";
carouselWrapper.style.border = "1px solid #eee";
carouselWrapper.style.borderRadius = "12px";
carouselWrapper.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
carouselWrapper.style.height = "auto"; // ← asegura que no tenga altura fija
carouselWrapper.style.overflow = "visible"; // ← evita recortes si el contenido crece
  const carouselId = `carousel-${data.id}`;
  const carrusel = document.createElement("div");
  carrusel.id = carouselId;
  carrusel.className = "carousel slide mt-4";
  carrusel.setAttribute("data-bs-ride", "carousel");

  const inner = document.createElement("div");
  inner.className = "carousel-inner";

  data.imagenes.forEach((src, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item${index === 0 ? " active" : ""}`;

    const img = document.createElement("img");
    img.src = src;
    img.className = "d-block mx-auto responsive-img";
    img.style.height = "400px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";
    img.style.margin = "0 auto";
    img.style.display = "block";

    item.appendChild(img);
    inner.appendChild(item);
  });

  const prev = document.createElement("button");
  prev.className = "carousel-control-prev";
  prev.type = "button";
  prev.setAttribute("data-bs-target", `#${carouselId}`);
  prev.setAttribute("data-bs-slide", "prev");
  prev.style.width = "60px";
  prev.style.height = "60px";
  prev.style.top = "50%";
  prev.style.transform = "translateY(-50%)";
  prev.style.backgroundColor = "transparent";
  prev.style.border = "none";

  const prevIcon = document.createElement("span");
  prevIcon.className = "carousel-control-prev-icon";
  prevIcon.setAttribute("aria-hidden", "true");
  prevIcon.style.scale = "0.6";
  prev.appendChild(prevIcon);

  const next = document.createElement("button");
  next.className = "carousel-control-next";
  next.type = "button";
  next.setAttribute("data-bs-target", `#${carouselId}`);
  next.setAttribute("data-bs-slide", "next");
  next.style.width = "60px";
  next.style.height = "60px";
  next.style.top = "50%";
  next.style.transform = "translateY(-50%)";
  next.style.backgroundColor = "transparent";
  next.style.border = "none";

  const nextIcon = document.createElement("span");
  nextIcon.className = "carousel-control-next-icon";
  nextIcon.setAttribute("aria-hidden", "true");
  nextIcon.style.scale = "0.6";
  next.appendChild(nextIcon);

  carrusel.appendChild(inner);
  carrusel.appendChild(prev);
  carrusel.appendChild(next);
  carouselWrapper.appendChild(carrusel);
  topSection.appendChild(carouselWrapper);

  cardElement.appendChild(topSection);

  const enlaceWrapper = document.createElement("div");
  enlaceWrapper.style.textAlign = "center";
  enlaceWrapper.style.marginTop = "50px";
  enlaceWrapper.style.marginBottom = "40px";

  const enlace = document.createElement("a");
  enlace.href = data.enlace;
  enlace.textContent = "Ir al sitio";
  enlace.target = "_blank";
  enlace.className = "btn btn-outline-primary";
  enlace.style.fontSize = "1.2rem";
  enlace.style.padding = "14px 28px";

  enlaceWrapper.appendChild(enlace);
  cardElement.appendChild(enlaceWrapper);

  return cardElement;
}

fetch 

// 👇 Ejemplo de uso
const data = {
  id: "card1",
  nombre: "Camiseta Bart",
  titulo: "Camiseta Bart Attitude  Estilo urbano con personalidad rebelde  Ideal para fans de Los Simpson  Diseño original y cómodo  100% algodón premium (Talla M - Color Negro | - Color Rojo | - Color Blanco)",
  descripcion: `<p>Esta camiseta de Bart Simpson es mucho más que una prenda: es una declaración de estilo y actitud. Confeccionada en algodón 100% de alta calidad, ofrece una textura suave al tacto y una comodidad excepcional para el uso diario. Su diseño presenta a Bart en una pose icónica, con su característico aire rebelde y desenfadado, ideal para quienes buscan expresar personalidad y autenticidad a través de su ropa. El estampado está realizado con tintas duraderas que resisten lavados frecuentes sin perder intensidad, mientras que el corte moderno se adapta perfectamente a diferentes tipos de cuerpo. Ya sea para salir con amigos, para regalar a un fan de Los Simpson o simplemente para añadir un toque divertido y nostálgico a tu armario, esta camiseta es una elección que combina cultura pop, calidad textil y estilo urbano. Disponible en talla M y color negro, es una pieza versátil que se integra fácilmente en cualquier conjunto casual.</p>`,
  imagen: "../../img/barttienda1.png",
  imagenes: [
    "../../img/barttienda1.png",
    "../../img/barttienda2.png",
    "../../img/barttienda3.png"
  ],
  enlace: "./tiendacompra.html" 
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container") || document.body;
  container.appendChild(cardWithCarousel(data));
});