<?php

require_once "Loginuser.php";
require_once(__DIR__ . "/components/header.php");
require_once(__DIR__ . "/db.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $password_hash = $_POST['password'];
    $apellidos = $_POST['apellidos'];
    $telefono = $_POST['numero'];
    $email = $_POST['email'];
    $usuarioNuevo = $_POST['usuarioNuevo'];

    $pdo = connect("simpson_db");
    if (Loginuser::register($pdo, $nombre, $apellidos, $email, $telefono, $usuarioNuevo, $password_hash)) {
        echo "Usuario registrado correctamente. <a href='login.php'>Ir al login</a>";
    } else {
        echo "Error: nombre de usuario ya existe o fallo en el registro.";
    }
    exit;
}
?>

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
    <?= render(); ?>
    <main>
        <section>
            <div class="container-fluid">
                <div id="character-container"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-4 justify-content-lg-center">
                    <form method="POST" id="registroForm">
                        <fieldset>
                            <legend>Datos de usuario</legend>

                            <label for="nombre">Nombre:</label>
                            <br>
                            <input type="text" name="nombre" id="nombre" placeholder="Ponga su nombre" maxlength="25"
                                required>
                            <br>
                            <label for="apellidos">Apellidos:</label>
                            <br>
                            <input type="text" name="apellidos" id="apellidos" placeholder="Ponga sus apellidos"
                                maxlength="30" required>
                            <br>
                            <label for="email">Email:</label>
                            <br>
                            <input type="email" name="email" id="email" placeholder="Ponga su email" required>
                            <br>
                            <label for="numero">Teléfono:</label>
                            <br>
                            <input type="number" name="numero" id="numero" placeholder="Ponga su teléfono" required>
                            <br>
                            <label for="usuarioNuevo" name="usuarioNuevo" id="usuarioNuevo">Usuario nuevo:</label>
                            <br>
                            <input type="text" name="usuarioNuevo" id="usuarioNuevo" placeholder="Nombre del Usuario"
                                required>
                            <br>
                            <label for="password" name="password" id="password">Contraseña:</label>
                            <br>
                            <input type="password" name="password" id="password" placeholder="Ponga su contraseña"
                                required>
                            <br>
                            <br>
                            <div class="centrado">
                                <button type="submit">Registrarse</button>
                                <button type="reset">Limpiar</button>
                                <br>
                                <br>
                            </div>
                            <div class="centrado">
                                <button type="button" onclick="window.location.href='login.php'">Volver</button>
                            </div>
                        </fieldset>
                    </form>

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
        // if ('serviceWorker' in navigator) {
        //     navigator.serviceWorker.register("/bootstrap/index.html")
        //         .then(reg => console.log('Service Worker registrado:', reg))
        //         .catch(err => console.error('Error registrando Service Worker:', err));
        // }
    </script>
</body>

</html>