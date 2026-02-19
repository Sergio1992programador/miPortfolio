<?php

session_start();
session_unset();
session_destroy();
header("Location: login.html");
exit;


/*
Flujo:
    session_start() para acceder a la sesión.
    session_unset() borra todas las variables de sesión.
    session_destroy() destruye la sesión en el servidor.
    Redirige al login.php.
    Clave: asegura que nadie pueda seguir accediendo al dashboard tras cerrar sesión.
*/
