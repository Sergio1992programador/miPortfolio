<?php
session_start();
require_once "Loginuser.php";
require_once(__DIR__ . "/components/header.php");
require_once(__DIR__ . "/db.php");

$nombre = $_POST['usuario'] ?? '';
$password = $_POST['password'] ?? '';
$pdo = connect("simpson_db");
$user = Loginuser::authenticate($pdo, $nombre, $password);

if ($user) {
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['nombre'] = $user['usuarioNuevo'];
    header("Location: dashboard.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Los Simpson</title>

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
    background-image: url('img/lossimpsonss.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
">

    <?= render(); ?>

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
                Se necesita usuario para poder acceder
            </label>
            <button>
                <a id="enlace" href="login.php" style="text-decoration: none; color: inherit;">Iniciar sesión</a>
            </button>
        </form>
    </main>

    <footer>
        <strong>&copy; Todos los derechos reservados Sergio 2025</strong>
    </footer>

</body>

</html>