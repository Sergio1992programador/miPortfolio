<?php
namespace App\Core;

class Router
{
    public static function route($method, $uri, $data)
    {
        // Divide la URI en segmentos y obtiene el recurso y el ID
        $segments = explode('/', $uri);
        $resource = $segments[0] ?? null;
        $id = $segments[1] ?? null;

        // Login directo
        if ($resource === 'login' && $method === 'POST') {
            $auth = new \App\Controllers\AuthController();
            $auth->login($data);
            return;
        }

        // Define las rutas y sus controladores asociados, así como los métodos públicos y parámetros permitidos
        $routes = [
            'usuarios' => [
                'controller' => \App\Controllers\UsuarioController::class,
                'public' => ['POST']
            ],
            'personajes' => [
                'controller' => \App\Controllers\PersonajeController::class,
                'public' => ['GET'],
                'params' => ['f']
            ],
            'familias' => [
                'controller' => \App\Controllers\FamiliaController::class,
                'public' => ['GET', 'POST']
            ],

            'tienda' => [
                'controller' => \App\Controllers\TiendaController::class,
                'public' => ['GET', 'POST']
            ],

            'articulo' => [
                'controller' => \App\Controllers\ArticuloController::class,
                'public' => ['GET', 'POST']
            ],

            'send' => [
                'controller' => \App\Controllers\SendController::class,
                'public' => ['GET', 'POST']
            ]

        ];

        // Verifica si la ruta existe y aplica la lógica correspondiente
        if (isset($routes[$resource])) {
            $routeConfig = $routes[$resource];
            $controllerClass = $routeConfig['controller'];
            $controller = new $controllerClass();

            // Verifica si el método es público o requiere autenticación
            $publicMethods = $routeConfig['public'] ?? [];
            if (!in_array($method, $publicMethods)) {
                AuthMiddleware::verificarToken();
            }
            // Lógica de enrutamiento basada en el método HTTP
            switch ($method) {
                case 'GET':
                    // Obtener y filtrar parámetros de consulta
                    $queryParams = $_GET;
                    $filteredParams = [];

                    // Extraer parámetros definidos en la ruta
                    if (!empty($routeConfig['params'])) {
                        foreach ($routeConfig['params'] as $paramName) {
                            if (isset($queryParams[$paramName])) {
                                $filteredParams[$paramName] = $queryParams[$paramName];
                            }
                        }
                    }

                    // Si hay parámetros válidos, pásalos al controlador
                    if (!empty($filteredParams)) {
                        $controller->index($filteredParams);
                    } else {
                        $id ? $controller->show($id) : $controller->index();
                    }
                    break;

                case 'POST':
                    $controller->store($data);
                    break;

                case 'PUT':
                    $controller->update($id, $data);
                    break;

                case 'DELETE':
                    $controller->destroy($id);
                    break;

                default:
                    http_response_code(405);
                    echo json_encode(['error' => 'Método no permitido']);
            }
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Ruta no encontrada']);
        }
    }
}
