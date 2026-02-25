<?php
echo '
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="formulario.css">
    <script type="text/javascript" src="bootstrap/js/bootstrap.bundle.js" defer></script>
    <meta name="keywords" content="Lá mejor página">
    <meta name="author" content="Sergio Vallejo">
    <title>Personajes</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h1>Los Simpson <img id="barto" src="img/bartt.png" alt="Bart"></h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Menú">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="dashboard.php">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#sobre">Sobre nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.php">Iniciar sesión</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section>
            <div class="container-fluid">
                <div id="character-container"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-4 justify-content-lg-center">
                    <form action="verify_login.php" method="post">
                        <fieldset>
                            <legend>Usuario</legend>
                            <label for="usuario">Usuario:</label><br>
                            <input type="text" name="usuario" id="usuario" placeholder="Ponga su Usuario" required><br>
                            <label for="password">Contraseña:</label><br>
                            <input type="password" name="password" id="password" placeholder="Ponga su contraseña" required>
                            <div class="centrado">
                                <button type="submit">Entrar</button>
                                <button type="reset">Limpiar</button><br><br>
                            </div>
                            <div class="centrado">
                                <button><a id="enlace" href="crearusuario.php">Crear Usuario</a></button>
                            </div>
                        </fieldset><br>
                    </form>
                </div>
            </div>
        </section>
        <article></article>
        <aside></aside>
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
';
?>