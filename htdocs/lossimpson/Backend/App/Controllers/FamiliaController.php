<?php

namespace App\Controllers;
// El controlador es el que contiene la lógica real de los endpoints (CRUD, validaciones…).

use App\Models\Familia;

class FamiliaController
{

    public function index()
    {
        echo json_encode(Familia::all());
    }

    public function show($id)
    {
        $familia = Familia::find($id);
        if (!$familia) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Familia no encontrada']);
        } else {
            echo json_encode($familia);
        }
    }

    public function store($data)
    {
        if (!isset($data['nombre']) || !isset($data['enlace']) || !isset($data['imagen']) || !isset($data['titulo']) || !isset($data['descripcion'])) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Datos incompletos']);
            return;
        }
        $familia = Familia::create($data);
        http_response_code(201);
        echo json_encode($familia);
    }

    public function update($id, $data)
    {
        $familia = Familia::update($id, $data);
        if (!$familia) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Familia no encontrada']);
        } else {
            echo json_encode($familia);
        }
    }

    public function delete($id)
    {
        $result = Familia::delete($id);
        if ($result) {
            echo json_encode(['mensaje' => 'Familia eliminada']);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Familia no encontrada']);
        }
    }

}
