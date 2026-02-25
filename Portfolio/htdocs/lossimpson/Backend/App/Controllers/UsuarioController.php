<?php
// El controlador es el que contiene la lógica real de los endpoints (CRUD, validaciones…).
namespace App\Controllers;
require_once __DIR__ . '/../models/Usuario.php';
use App\Models\Usuario;

class UsuarioController
{

    public function index()
    {
        echo json_encode(Usuario::all());
    }

    public function show($id)
    {
        $usuario = Usuario::find($id);
        if (!$usuario) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Usuario no encontrado']);
        } else {
            echo json_encode($usuario);
        }
    }

    public function store($data)
    {
        $camposObligatorios = ['nombre', 'apellidos', 'email', 'telefono', 'nombre_usuario', 'password'];

        foreach ($camposObligatorios as $campo) {
            if (empty($data[$campo])) {
                http_response_code(400);
                echo json_encode(['mensaje' => "Campo '$campo' incompleto"]);
                return;
            }
        }

        $usuario = Usuario::create($data);
        http_response_code(201);
        echo json_encode($usuario);
    }

    public function update($id, $data)
    {
        $usuario = Usuario::update($id, $data);
        if (!$usuario) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Usuario no encontrado']);
        } else {
            echo json_encode($usuario);
        }
    }

    public function delete($id)
    {
        $result = Usuario::delete($id);
        if ($result) {
            echo json_encode(['mensaje' => 'Usuario eliminado']);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Usuario no encontrado']);
        }
    }

}
