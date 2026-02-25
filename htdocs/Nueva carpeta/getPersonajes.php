<?php
require_once(__DIR__ . "/db.php");
header("Content-Type: application/json");

$pdo = connect("simpson_db");
$familiaId = isset($_GET['f']) ? intval($_GET['f']) : null;

try {
    if ($familiaId !== null) {
        // Consulta con filtro por familia
        $stmt = $pdo->prepare("
            SELECT p.* 
            FROM personajes p
            INNER JOIN personajes_familias pf ON p.id = pf.personaje_id
            WHERE pf.familia_id = :familiaId
        ");
        $stmt->execute(['familiaId' => $familiaId]);
    } else {
        // Consulta sin filtro
        $stmt = $pdo->query("SELECT * FROM personajes");
    }

    $personaje = $stmt->fetchAll();
    echo json_encode($personaje);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al consultar la base de datos: " . $e->getMessage()]);
}
?>