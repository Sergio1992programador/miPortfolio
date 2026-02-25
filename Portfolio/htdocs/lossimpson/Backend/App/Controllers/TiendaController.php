<?php

namespace App\Controllers;
// El controlador es el que contiene la lógica real de los endpoints (CRUD, validaciones…).

use App\Models\Tienda;

class TiendaController
{

    public function index()
    {
        echo json_encode(Tienda::all());
    }

    public function show($id)
    {
        $tienda = Tienda::find($id);
        if (!$tienda) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Articulos no encontrados']);
        } else {
            echo json_encode($tienda);
        }
    }

    public function store($data)
    {
        if (!isset($data['nombre']) || !isset($data['enlace']) || !isset($data['imagen']) || !isset($data['titulo']) || !isset($data['descripcion'])) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Datos incompletos']);
            return;
        }
        $tienda = Tienda::create($data);
        http_response_code(201);
        echo json_encode($tienda);
    }

    public function update($id, $data)
    {
        $tienda = Tienda::update($id, $data);
        if (!$tienda) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Articulo no encontrado']);
        } else {
            echo json_encode($tienda);
        }
    }

    public function delete($id)
    {
        $result = Tienda::delete($id);
        if ($result) {
            echo json_encode(['mensaje' => 'Articulo eliminado']);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Articulo no encontrado']);
        }
    }

}
