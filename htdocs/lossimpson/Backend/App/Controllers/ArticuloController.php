<?php
// El controlador es el que contiene la lógica real de los endpoints (CRUD, validaciones…).
namespace App\Controllers;
use App\Models\Articulo;

class ArticuloController
{

    public function index()
    {
        echo json_encode(Articulo::all());
    }

    public function show($id)
    {
        $usuario = Articulo::find($id);
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

        $usuario = Articulo::create($data);
        http_response_code(201);
        echo json_encode($usuario);
    }

    public function update($id, $data)
    {
        $usuario = Articulo::update($id, $data);
        if (!$usuario) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Artículo no encontrado']);
        } else {
            echo json_encode($usuario);
        }
    }

    public function delete($id)
    {
        $result = Articulo::delete($id);
        if ($result) {
            echo json_encode(['mensaje' => 'Artículo eliminado']);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Artículo no encontrado']);
        }
    }

}
