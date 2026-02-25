<?php

// Configuración para el uso de JWT
return [
    'secret_key' => 'Super_Secreta_12345', // clave segura, debe ser privada y única (puede ser una string larga aleatoria).
    'algorithm' => 'HS256',
    'exp_time' => 3600 // Tiempo de expiración en segundos (1 hora)
];



