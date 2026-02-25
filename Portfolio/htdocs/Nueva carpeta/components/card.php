<!-- const card = document.createElement("div");
            card.classList.add("col-sm-10", "m-3");
            card.id = character.id;

            // Imagen centrada
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

            // Descripción con scroll
            const descripcionWrapper = document.createElement("div");
            descripcionWrapper.classList.add("descripcion-wrapper");
            descripcionWrapper.innerHTML = character.descripcion;

            card.innerHTML += `<h3>${character.nombre}</h3>`;
            card.appendChild(imageWrapper);
            card.innerHTML += `<h4>${character.titulo}</h4>`;
            card.appendChild(descripcionWrapper);

            contenedor.appendChild(card);

            const direccion = `${character.id}.html`;
            card.addEventListener("click", () => {
                window.location.href = direccion;
            }); -->
<?php

function card(array $data, string $parametros = ''): string
{
    $direccion = "{$data['enlace']}" . "{$parametros}";

    return "
        <div class='col-sm-10 m-3' id='{$data['id']}' onclick=\"window.location.href='{$direccion}'\">
            <h3>{$data['nombre']}</h3>
            <div style='display: flex; justify-content: center; align-items: center; margin-bottom: 10px;'>
                <img 
                    id='{$data['id']}-image' 
                    src='{$data['imagen']}' 
                    alt='{$data['nombre']}' 
                    style='height: 200px; object-fit: cover;' 
                />
            </div>
            <h4>{$data['titulo']}</h4>
            <div class='descripcion-wrapper'>
                {$data['descripcion']}
            </div>
        </div>
    ";
}
