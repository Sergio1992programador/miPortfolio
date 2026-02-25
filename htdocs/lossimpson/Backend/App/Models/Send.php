<?php

namespace App\Models;
use App\Core\Database;
use PDO;

class Send
{
    // Obtener todos los mensajes enviados
    public static function all()
    {
        $db = Database::connect();
        $stmt = $db->query("SELECT * FROM send");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Buscar un mensaje por ID
    public static function find($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("SELECT * FROM send WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Crear un nuevo registro de mensaje
    public static function create($data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("INSERT INTO send (nombre, apellidos, correo, mensaje) VALUES (?, ?, ?, ?)");
        $stmt->execute([$data['nombre'], $data['apellidos'], $data['correo'], $data['mensaje']]);
        return self::find($db->lastInsertId());
    }

    // Actualizar un mensaje existente
    public static function update($id, $data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("UPDATE send SET nombre = ?, apellidos = ?, correo = ?, mensaje = ? WHERE id = ?");
        $stmt->execute([$data['nombre'], $data['apellidos'], $data['correo'], $data['mensaje'], $id]);
        return self::find($id);
    }

    // Eliminar un mensaje
    public static function delete($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("DELETE FROM send WHERE id = ?");
        return $stmt->execute([$id]);
    }
}