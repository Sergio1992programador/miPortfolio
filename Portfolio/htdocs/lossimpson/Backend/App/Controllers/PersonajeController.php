<?php
// El controlador es el que contiene la lógica real de los endpoints (CRUD, validaciones…).
namespace App\Controllers;
use App\Models\Personaje;

class PersonajeController
{

    // Muestra la lista de personajes, con opción de filtrado
    public function index($filters = [])
    {
        // Aplica filtro por familia si se proporciona
        if (isset($filters['f'])) {
            $personajes = Personaje::getByFamilyId($filters['f']);
        } else {
            $personajes = Personaje::all();
        }

        echo json_encode($personajes);
    }



    // Muestra un personaje específico por ID
    public function show($id)
    {
        $personaje = Personaje::find($id);
        if (!$personaje) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Personaje no encontrado']);
        } else {
            echo json_encode($personaje);
        }
    }

    // Crea un nuevo personaje
    public function store($data)
    {
        if (!isset($data['nombre']) || !isset($data['enlace']) || !isset($data['imagen']) || !isset($data['titulo']) || !isset($data['descripcion'])) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Datos incompletos']);
            return;
        }
        $personaje = Personaje::create($data);
        http_response_code(201);
        echo json_encode($personaje);
    }

    // Actualiza un personaje existente
    public function update($id, $data)
    {
        $personaje = Personaje::update($id, $data);
        if (!$personaje) {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Personaje no encontrado']);
        } else {
            echo json_encode($personaje);
        }
    }

    // Elimina un personaje por ID
    public function delete($id)
    {
        $result = Personaje::delete($id);
        if ($result) {
            echo json_encode(['mensaje' => 'Personaje eliminado']);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Personaje no encontrado']);
        }
    }

}
