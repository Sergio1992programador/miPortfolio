export function renderFooter() {
  // Aplica estilos al body para layout vertical
  Object.assign(document.body.style, {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    margin: "0"
  });

  // Asegura que el contenido principal tenga flex: 1
  const main = document.querySelector("main");
  if (main) {
    main.style.flex = "1";
  }

  // Crea el footer
  const footer = document.createElement("footer");
  footer.className =
    "bg-primary text-dark fs-5 p-4 d-flex justify-content-center align-items-center";

  // Contenido del footer
  const copyright = document.createElement("strong");
  copyright.innerHTML = "&copy; Todos los derechos reservados Sergio 2025";

  footer.appendChild(copyright);
  document.body.appendChild(footer);
  return footer;
}