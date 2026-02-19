<?php

session_start();
require_once "Loginuser.php";

$nombre = $_POST['usuario'] ?? '';
$password = $_POST['password'] ?? '';

$user = Loginuser::authenticate($pdo, $nombre, $password);

if ($user) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['nombre'] = $user['usuarioNuevo'];
    header("Location: dashboard.php");
    exit;
} else {
    echo '
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Error de login</title>

    <!-- Metadatos -->
    <meta name="keywords" content="Lá mejor página">
    <meta name="author" content="Sergio Vallejo">

    <!-- CSS -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="bootstrap.css">
    <link rel="stylesheet" href="formulario.css">

    <!-- PWA Manifest -->
    <link rel="manifest" href="manifest.json">

    <!-- JS -->
    <script type="text/javascript" src="bootstrap/js/bootstrap.bundle.js" defer></script>
</head>
<body style="
    background-image: url(\'lossimpsonss.jpg\');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
">
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h1>Los Simpson <img id="barto" src="bartt.png" alt="Bart"></h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                    aria-controls="menu" aria-expanded="false" aria-label="Menú">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#inicio">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#sobre">Sobre nosotros</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

<main class="centrado">
       <form style="display: flex; flex-direction: column; align-items: center;">
     <label style="
        background-color: rgb(255, 237, 78);
        font-size: 30px;
        padding: 30px;
        margin: 0;
        text-align: center;
        border-radius: 10px;
        display: inline-block;
    ">
        Usuario o contraseña incorrectos
    </label>
    <button>
        <a id="enlace" href="login.html" style="text-decoration: none; color: inherit;">Volver</a>
    </button>
</form>

    </main>

    <footer>
        <strong>&copy; Todos los derechos reservados Sergio 2025</strong>
    </footer>

</body>
</html>
';
}


/*
Flujo:
    verify_login.php recibe $_POST['nombre'] y $_POST['password'].
    Llama a UserLogin::authenticate($pdo, $nombre, $password).
    Dentro de UserLogin.php:
        Se hace un SELECT * FROM usersLogin WHERE nombre=?.
        Si existe el usuario, se compara la contraseña introducida con el hash de la base de datos usando 
            password_verify($password, $user['password_hash']).
        Si coincide:
            Se inicia sesión con session_start().
            Se guardan variables de sesión: $_SESSION['user_id'] y $_SESSION['nombre'].
            Se redirige a dashboard.php.
        Si no coincide: se muestra mensaje de error y link de volver al login.
        Clave: la contraseña nunca se compara en texto plano, solo se verifica con el hash seguro.
*/

