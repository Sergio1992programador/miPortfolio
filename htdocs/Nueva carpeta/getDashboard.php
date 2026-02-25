<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $dato = $_POST['dato'] ?? '';
    echo isset($_SESSION['user_id']) ? $dato : 'sinverificado.php';
}
?>