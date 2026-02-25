<?php

namespace App\Models;
use App\Core\Database;
use PDO;

class Personaje
{

    public static function all()
    {
        $db = Database::connect();
        $stmt = $db->query("SELECT * FROM personajes");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function find($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("SELECT * FROM personajes WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function create($data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("INSERT INTO personajes (nombre, enlace, imagen, titulo, descripcion) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data['nombre'], $data['enlace'], $data['imagen'], $data['titulo'], $data['descripcion']]);
        return self::find($db->lastInsertId());
    }

    public static function update($id, $data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("UPDATE personajes SET nombre = ?, enlace = ?, imagen = ?, titulo = ?, descripcion = ?  WHERE id = ?");
        $stmt->execute([$data['nombre'], $data['enlace'], $data['imagen'], $data['titulo'], $data['descripcion'], $id]);
        return self::find($id);
    }

    public static function delete($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("DELETE FROM personajes WHERE id = ?");
        return $stmt->execute([$id]);
    }

    public static function getByFamilyId($familiaId)
    {
        $db = Database::connect();

        $stmt = $db->prepare("
        SELECT p.*
        FROM personajes p
        INNER JOIN personajes_familias pf ON p.id = pf.personaje_id
        WHERE pf.familia_id = ?
        ");

        $stmt->execute([$familiaId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }



}


