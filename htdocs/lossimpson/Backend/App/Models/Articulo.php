<?php
/*TODO conectar con la tabla articulo a la base de datos*/
namespace App\Models;
use App\Core\Database;
use PDO;

class Articulo
{

    public static function all()
    {
        $db = Database::connect();
        $stmt = $db->query("SELECT * FROM articulo");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function find($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("SELECT * FROM articulo WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public static function create($data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("INSERT INTO articulo (nombre, enlace, imagen, titulo, descripcion) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$data['nombre'], $data['enlace'], $data['imagen'], $data['titulo'], $data['descripcion']]);
        return self::find($db->lastInsertId());
    }

    public static function update($id, $data)
    {
        $db = Database::connect();
        $stmt = $db->prepare("UPDATE articulo SET nombre = ?, enlace = ?, imagen = ?, titulo = ?, descripcion = ?  WHERE id = ?");
        $stmt->execute([$data['nombre'], $data['enlace'], $data['imagen'], $data['titulo'], $data['descripcion'], $id]);
        return self::find($id);
    }

    public static function delete($id)
    {
        $db = Database::connect();
        $stmt = $db->prepare("DELETE FROM articulo WHERE id = ?");
        return $stmt->execute([$id]);
    }

    public static function getByFamilyId($tiendaId)
    {
        $db = Database::connect();

        $stmt = $db->prepare("
            SELECT a.*
            FROM articulo a
            INNER JOIN articulos_tienda at ON a.id = at.articulo_id
            WHERE at.tienda_id = ?
        ");

        $stmt->execute([$tiendaId]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


}


