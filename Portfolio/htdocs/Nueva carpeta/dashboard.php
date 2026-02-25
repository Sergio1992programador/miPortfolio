<?php
session_start();
require_once(__DIR__ . '/components/header.php');
require_once(__DIR__ . '/components/card.php');


$v = isset($_SESSION['user_id']);


$cards = [
    [
        "id" => "personajes",
        "nombre" => "Personajes",
        "enlace" => $v ? "personajes.php" : "sinverificado.php",
        "imagen" => "img/personajes1.png",
        "titulo" => "Todos los personajes",
        "descripcion" => "<p>Aquí, podrás ver a todos los personajes más importantes de Los Simpson, conocer sus historias, curiosidades y descubrir por qué cada uno de ellos ha dejado una huella inolvidable en la cultura popular.</p><br>"
    ],
    [
        "id" => "familias",
        "nombre" => "Familias",
        "enlace" => $v ? "familias.php" : "sinverificado.php",
        "imagen" => "img/familias.webp",
        "titulo" => "Familias importantes",
        "descripcion" => "<p>Aquí, podrás ver cómo se dividen las familias más importantes de Los Simpson, conocer sus integrantes, sus relaciones y el papel que cada una juega en la historia de la serie. Desde los Simpson hasta los Flanders, cada familia aporta su propio estilo, valores y momentos inolvidables.</p><br>"
    ],
    [
        "id" => "video",
        "nombre" => "Videojuego",
        "enlace" => $v ? "videojuego.php" : "sinverificado.php",
        "imagen" => "img/video.png",
        "titulo" => "Videojuego de los Simpson",
        "descripcion" => "<p>Aquí, podrás ver a Bart Simpson en plena acción, saltando con su skate. Con su actitud rebelde y su energía imparable, Bart se convierte en el protagonista de esta aventura</p><br>"
    ],
    [
        "id" => "tienda",
        "nombre" => "Tienda Simpson",
        "enlace" => $v ? "tienda.php" : "sinverificado.php",
        "imagen" => "img/tienda.png",
        "titulo" => "Tienda de los Simpson",
        "descripcion" => "<p>Aquí, accederás a la tienda donde podrás comprar productos de Los Simpson.</p><br>"
    ]
];

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="bootstrap.css">
    <script type="text/javascript" src="bootstrap/js/bootstrap.bundle.js" defer></script>
    <meta name="keywords" content="Lá mejor página">
    <meta name="author" content="Sergio Vallejo">
    <title>Personajes</title>
</head>

<body>
    <?php echo render() ?>
    <main>
        <section>
            <div class="container-fluid">
                <div id="todo"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-4 justify-content-lg-center">
                    <?php
                    foreach ($cards as $section) {
                        echo card($section);
                    }
                    ?>
                </div>
        </section>
        <article>

        </article>
        <aside>

        </aside>
    </main>
    <footer>
        <strong>&copy; Todos los derechos reservados Sergio 2025</strong>
    </footer>
</body>

</html>


<!--
Flujo:
    Se inicia sesión con session_start().
    Se verifica si existe $_SESSION['user_id'].
    Si no existe → redirige al login.php.
    Si existe → muestra el contenido privado (bienvenida, opciones, logout).
    Aquí se ve que la sesión mantiene conectados a los usuarios mientras navegan.
-->