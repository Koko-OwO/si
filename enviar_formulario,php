<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Contacto</title>
  </head>
  <body>
  <?php

        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $numero = $_POST['numero'];
        $mensaje = $_POST['mensaje'];
        $destinatario = 'hcamargo03@misena.edu.co';


        $asunto = 'mensaje de pablito';
        $contenido = "Nombre: $nombre\n";
        $contenido .= "Correo electrónico: $correo\n";
        $contenido .= "Número de teléfono: $numero\n";
        $contenido .= "Mensaje: $mensaje\n";

        $cabeceras = "From: $correo\r\n";
        $cabeceras .= "Reply-To: $correo\r\n";
        mail($destinatario, $asunto, $contenido, $cabeceras);

        header('Location: agradecimiento.php');
    ?>

  </body>
</html>