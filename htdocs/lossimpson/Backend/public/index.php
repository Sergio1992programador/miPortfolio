<?php
use App\Core\Router;

// Indica que la respuesta será JSON
header('Content-Type: application/json');

// Autoload de clases
require_once __DIR__ . '/../vendor/autoload.php';

// Método HTTP (GET, POST, etc.)
$method = $_SERVER['REQUEST_METHOD'];

// URI completa (incluye query string)
$uri = $_SERVER['REQUEST_URI'];

// Script base (ej: /lossimpson/Backend/public/index.php)
$scriptName = $_SERVER['SCRIPT_NAME'];

// Base path (ej: /lossimpson/Backend/public)
$basePath = dirname($scriptName);

// Elimina la query string de la URI
$uri = parse_url($uri, PHP_URL_PATH);

// Elimina el base path y barras sobrantes
$uri = str_replace($basePath, '', $uri);
$uri = trim($uri, '/');

// Cuerpo de la petición (solo útil para POST y PUT)
$data = json_decode(file_get_contents('php://input'), true);

// Ejecuta el router
Router::route($method, $uri, $data);