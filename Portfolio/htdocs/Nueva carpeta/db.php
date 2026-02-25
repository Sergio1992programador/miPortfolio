<?php
function connect($database, $user = "root", $password = "", $server = "localhost")
{



    try {
        /* Crea una conexión a BD y la guardo en $pdo */
        $pdo = new PDO("mysql:host=$server;dbname=$database;charset=utf8", $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        /* Por defecto, PDO no lanza errores “visibles”; simplemente devuelve false si algo falla.
        Con setAttribute.... lanzará una excepción PDOException, que podrás capturar con un try...catch y mostrar claramente el mensaje. */
        return $pdo;
    } catch (PDOException $e) {
        die("Error DB: " . $e->getMessage());
    }
}

function disconnect($con)
{
    $con = null;
}



