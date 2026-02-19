<?php

require_once "UserLogin.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $password = $_POST['password'];

    if (Loginuser::register($pdo, $nombre, $password)) {
        echo "Usuario registrado correctamente. <a href='login.php'>Ir al login</a>";
    } else {
        echo "Error: nombre de usuario ya existe o fallo en el registro.";
    }
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title> Registro de usuario </title>
</head>

<body>
    <h2> Registro </h2>
    <form method="POST">
        <input type="text" name="nombre" placeholder="Usuario" required>
        <input type="password" name="password" placeholder="Contraseña" required>
        <button type="submit"> Registrar </button>
    </form>
    <p> ¿Ya tienes cuenta? <a href="login.php"> Inicia sesión </a></p>
</body>

</html>

<!--
Flujo:
    El usuario completa el formulario: nombre y password.
    Se envía por POST al mismo register.php.
    register.php llama a UserLogin::register($pdo, $nombre, $password).
    Dentro de UserLogin.php:
        Se crea un hash seguro de la contraseña con password_hash($password, password_DEFAULT) (usa bcrypt por defecto, más seguro que SHA).
        Se inserta el usuario y el hash en la tabla usersLogin.
        Si todo va bien, el usuario ve un mensaje de éxito y puede ir a login.php.
        Clave: la contraseña nunca se guarda en texto plano, solo el hash seguro.
-->