<?php

namespace App\Controllers;
use App\Models\Send;

use PHPMailer\PHPMailer\PHPMailer;
/* use PHPMailer\PHPMailer\Exception; 

require_once __DIR__ . "/../../../vendor/autoload.php";

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp-mail.outlook.com';
$mail->SMTPAuth = true;
$mail->Username = 'calamar_curso@hotmail.com';
$mail->Password = '123456789aaa';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('calamar_curso@hotmail.com', 'Formulario');
$mail->addAddress('calamar_curso@hotmail.com');
$mail->Subject = 'Nuevo mensaje';
$mail->Body = "Mendaje Enviado desde PHP";

echo "mail de PHPMailer: ";
echo "<pre>";
var_dump($mail);
echo "</pre>";
$mail->send();
LO PILLA TODO SOLO FALLA LA AUTENTIFICACIÓN QUE ES COSA DE SEGURIDAD DEL CORREO
 */
class SendController
{
    // Método para listar todos los mensajes (GET /send)
    public function index()
    {
        $mensajes = Send::all();
        http_response_code(200);
        echo json_encode($mensajes);
    }

    // Método para mostrar un mensaje concreto por ID (GET /send/{id})
    public function show($id)
    {
        $mensaje = Send::find($id);
        if ($mensaje) {
            http_response_code(200);
            echo json_encode($mensaje);
        } else {
            http_response_code(404);
            echo json_encode(['mensaje' => 'Mensaje no encontrado']);
        }
    }

    // Método para guardar un nuevo mensaje (POST /send)
    public function store($data)
    {
        // Validar que los campos requeridos estén presentes
        if (!isset($data['nombre']) || !isset($data['apellidos']) || !isset($data['correo']) || !isset($data['mensaje'])) {
            http_response_code(400);
            echo json_encode(['mensaje' => 'Datos incompletos']);
            return;
        }

        // Sanitizar los datos
        $nombre = htmlspecialchars($data['nombre']);
        $apellidos = htmlspecialchars($data['apellidos']);
        $correo = htmlspecialchars($data['correo']);
        $mensaje = htmlspecialchars($data['mensaje']);

        // Guardar en la base de datos usando el modelo
        try {
            $registro = Send::create([
                'nombre' => $nombre,
                'apellidos' => $apellidos,
                'correo' => $correo,
                'mensaje' => $mensaje
            ]);


            //




            //



            // Enviar correo (no bloquea si falla)
            /*          $correoEnviado = mail($to, $subject, $body, $headers); */

            http_response_code(200);
            echo json_encode([
                'mensaje' => 'Mensaje guardado correctamente.',
                /*                 'correo_enviado' => $correoEnviado, */
                'registro' => $registro
            ]);
        } catch (\PDOException $e) {
            http_response_code(500);
            echo json_encode(['mensaje' => 'Error al guardar en BD', 'error' => $e->getMessage()]);
            return;
        }


    }
}