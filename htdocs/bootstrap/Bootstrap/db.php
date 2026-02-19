<?php

// Conexión a la base de datos con PDO
$host = "localhost";
$db = "simpson_db";
$user = "root";
$pass = "";

try {
    /* Crea una conexión a BD y la guardo en $pdo */
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /* Por defecto, PDO no lanza errores “visibles”; simplemente devuelve false si algo falla.
        Con setAttribute.... lanzará una excepción PDOException, que podrás capturar con un try...catch y mostrar claramente el mensaje. */
} catch (PDOException $e) {
    die("Error DB: " . $e->getMessage());
}




