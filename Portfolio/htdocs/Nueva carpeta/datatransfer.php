<?php
header("Content-Type: application/json");

// Configuración de conexión
$host = 'localhost';
$db = 'simpson_db';
$user = 'root';
$pass = '';

$dsn = "mysql:host=$host;dbname=$db;";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
    exit;
}

// Obtener datos JSON desde el cuerpo de la petición
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// Preparar consultas
$checkStmt = $pdo->prepare("SELECT COUNT(*) FROM personajes WHERE id = ?");
$insertStmt = $pdo->prepare("INSERT INTO personajes (id, nombre, enlace, imagen, titulo, descripcion) VALUES (?, ?, ?, ?, ?, ?)");

$insertados = 0;
$omitidos = 0;

foreach ($data as $personaje) {
    $checkStmt->execute([$personaje['id']]);
    $existe = $checkStmt->fetchColumn();

    if ($existe > 0) {
        $omitidos++;
        continue;
    }

    $insertStmt->execute([
        $personaje['id'],
        $personaje['nombre'],
        $personaje['enlace'],
        $personaje['imagen'],
        $personaje['titulo'],
        $personaje['descripcion']
    ]);

    $insertados++;
}

echo json_encode([
    "mensaje" => "Proceso completado.",
    "insertados" => $insertados,
    "omitidos" => $omitidos
]);
?>