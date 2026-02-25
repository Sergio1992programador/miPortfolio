<?php
namespace App\Core;
require_once __DIR__ . '/../../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class AuthMiddleware
{

    public static function verificarToken()
    {
        // Es una función de PHP que devuelve todas las cabeceras HTTP enviadas por el cliente (Postman, navegador, app, etc.) en la petición.
        $headers = apache_request_headers();

        if (!isset($headers['Authorization'])) {
            http_response_code(401);
            echo json_encode(['mensaje' => 'Token no enviado']);
            exit;
        }

        $authHeader = $headers['Authorization'];
        list($type, $token) = explode(' ', $authHeader);
        /*
        Divide la cadena anterior en dos partes:
            $type → "Bearer"
            $token → "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        */

        if (strtolower($type) !== 'bearer') {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Formato de token incorrecto']);
            exit;
        }
        /*
        Aquí simplemente se comprueba que la palabra inicial sea realmente "Bearer".
        Si el cliente mandó mal el formato, se devuelve error 400 (Bad Request).
        */

        try {
            $config = require __DIR__ . '/../config/jwt.php';
            $decoded = JWT::decode($token, new Key($config['secret_key'], $config['algorithm']));
            return $decoded; // Devuelve los datos del usuario
            /*
            $config carga la clave secreta (secret_key) y el algoritmo (HS256) desde tu archivo jwt.php.
            JWT::decode(...) usa la librería firebase/php-jwt para:
                Verificar la firma del token (que nadie lo haya modificado).
                Verificar la expiración (exp), si el token está vencido.
                Devolver el contenido original (payload) si todo está bien.
            */

        } catch (Exception $e) {
            http_response_code(401);
            echo json_encode(['mensaje' => 'Token inválido o expirado', 'error' => $e->getMessage()]);
            exit;
        }
    }

}



