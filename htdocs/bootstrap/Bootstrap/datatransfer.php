<?php
header("Content-Type: application/json");

function conectar()
{
    try {
        $server = "localhost";
        $usuario = "root";
        $clave = "";
        $db = "simpson_db"; // Asegúrate de usar la base correcta
        $con = new PDO("mysql:host=$server; dbname=$db", $usuario, $clave);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return ($con);
    } catch (PDOException $e) {
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        die();
    }
}

function desconectar($con)
{
    $con = null;
}

$input = file_get_contents("php://input");
$datos = json_decode($input, true);

$con = conectar();
$insertados = 0;

if (is_array($datos)) {
    foreach ($datos as $character) {
        if (
            isset(
            $character["id"],
            $character["nombre"],
            $character["enlace"],
            $character["imagen"],
            $character["titulo"],
            $character["descripcion"]
        )
        ) {
            $stmt = $con->prepare("INSERT INTO characters (id, nombre, enlace, imagen, titulo, descripcion) 
            VALUES (:id, :nombre, :enlace, :imagen, :titulo, :descripcion)");
            $stmt->bindParam(":id", $character["id"]);
            $stmt->bindParam(":nombre", $character["nombre"]);
            $stmt->bindParam(":enlace", $character["enlace"]);
            $stmt->bindParam(":imagen", $character["imagen"]);
            $stmt->bindParam(":titulo", $character["titulo"]);
            $stmt->bindParam(":descripcion", $character["descripcion"]);
            $stmt->execute();
            $insertados++;
        }
    }
}

desconectar($con);
echo json_encode(["status" => "ok", "insertados" => $insertados]);