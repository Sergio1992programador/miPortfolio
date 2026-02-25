<?php
namespace App\Controllers;

use Firebase\JWT\JWT;
use App\Models\Usuario;

// Controlador para la autenticación y generación de tokens JWT
class AuthController
{

    public function login($data)
    {


        // Validar entrada
        if (!isset($data['usuario']) || !isset($data['password'])) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Email y contraseña requeridos']);
            return;
        }

        // En este ejemplo, comprobamos contra la base de datos (si tu tabla tiene campo password)
        //    o simplemente una validación simulada para pruebas.
        $usuario = Usuario::findByUsername($data['usuario']);
        if (!$usuario || !password_verify($data['password'], $usuario['password_hash'])) {
            http_response_code(401);
            echo json_encode(['mensaje' => 'Credenciales incorrectas']);
            return;
        }


        // Cargar configuración JWT
        $config = require __DIR__ . '/../config/jwt.php';
        $issuedAt = time();
        $expire = $issuedAt + $config['exp_time'];

        // Crear payload (contenido del token)
        $payload = [
            'iat' => $issuedAt,
            'exp' => $expire,
            'usuario' => [
                'id' => $usuario['id'],
                'email' => $usuario['email']
            ]
        ];

        // Generar token
        $jwt = JWT::encode($payload, $config['secret_key'], $config['algorithm']);

        echo json_encode([
            'mensaje' => 'Login correcto',
            'token' => $jwt
        ]);
    }

}



