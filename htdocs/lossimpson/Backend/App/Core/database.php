<?php
namespace App\Core;
use PDO;
use PDOException;
class Database
{
    private static $host = "localhost";
    private static $db = "simpson_db";
    private static $user = "root";
    private static $pass = "";
    private static $conn;

    public static function connect()
    {
        if (!self::$conn) {
            try {
                self::$conn = new PDO(
                    "mysql:host=" . self::$host . ";dbname=" . self::$db,
                    self::$user,
                    self::$pass,
                    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
                );
            } catch (PDOException $e) {
                die("Error de conexión: " . $e->getMessage());
            }
        }
        return self::$conn;
    }
}
