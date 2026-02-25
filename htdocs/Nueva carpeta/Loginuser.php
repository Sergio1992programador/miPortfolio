<?php

require_once "db.php";

class Loginuser
{

    public static function register($pdo, $nombre, $apellidos, $email, $telefono, $usuarioNuevo, $password_hash)
    {
        $hash = password_hash($password_hash, PASSWORD_DEFAULT); // encripta la contraseña
        $stmt = $pdo->prepare("INSERT INTO loginuser(nombre, apellidos, email, telefono, usuarioNuevo, password_hash) VALUES (?, ?, ?, ?, ?, ?)");
        return $stmt->execute([$nombre, $apellidos, $email, $telefono, $usuarioNuevo, $hash]);
    }

    public static function authenticate($pdo, $nombre, $password)
    {
        $stmt = $pdo->prepare("SELECT * FROM loginuser WHERE usuarioNuevo = ?");
        $stmt->execute([$nombre]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            return $user;
        }
        return false;
    }
}

?>