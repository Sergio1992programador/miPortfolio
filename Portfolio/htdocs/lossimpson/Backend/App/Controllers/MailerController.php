<?php
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'tu_correo@gmail.com';
$mail->Password = 'tu_contraseña_de_app';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('tu_correo@gmail.com', 'Formulario');
$mail->addAddress('destinatario@ejemplo.com');
$mail->Subject = 'Nuevo mensaje';
$mail->Body = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";

$mail->send();