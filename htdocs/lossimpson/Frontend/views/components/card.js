export function card(data) {
  const cardElement = document.createElement("div");
  cardElement.classList = "col-sm-10 text-info rounded-4 shadow-sm hover-card m-5 bg-white cursor-pointer p-4";
  cardElement.id = data.id;

  // Imagen centrada
  const imageWrapper = document.createElement("div");
  imageWrapper.style.display = "flex";
  imageWrapper.style.justifyContent = "center";
  imageWrapper.style.alignItems = "center";
  imageWrapper.style.marginBottom = "10px";

  const imagen = document.createElement("img");
  imagen.id = `${data.id}-image`;
  imagen.src = data.imagen;
  imagen.alt = data.nombre;
  imagen.style.height = "200px";
  imagen.style.objectFit = "cover";

  imageWrapper.appendChild(imagen);

  // Descripción con scroll
  const descripcionWrapper = document.createElement("div");
  descripcionWrapper.classList.add("descripcion-wrapper");
  descripcionWrapper.innerHTML = data.descripcion;

  cardElement.innerHTML += `<h3>${data.nombre}</h3>`;
  cardElement.appendChild(imageWrapper);
  cardElement.innerHTML += `<h4>${data.titulo}</h4>`;
  cardElement.appendChild(descripcionWrapper);

  const direccion = `${data.enlace}.`;
  cardElement.addEventListener("click", () => {
    window.location.href = direccion;
  });

  return cardElement;
}
