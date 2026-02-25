<?php
session_start();
require_once(__DIR__ . '/components/header.php');
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
    <script type="text/javascript" src="simpsons.js" defer></script>
    <meta name="keywords" content="Lá mejor página">
    <meta name="author" content="Sergio Vallejo">
    <title>Personajes</title>
</head>

<body>
    <?= render(); ?>
    <main>
        <section>
            <div class="container-fluid">
                <div id="character-container"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-4 justify-content-lg-center">
                </div>
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
    <script>
        // Registrar Service Worker
        // if ("serviceWorker" in navigator) {
        //     navigator.serviceWorker.register("/bootstrap/index.html")
        //         .then(reg => console.log("Service Worker registrado:", reg))
        //         .catch(err => console.error("Error registrando Service Worker:", err));
        // }
    </script>
</body>

</html>