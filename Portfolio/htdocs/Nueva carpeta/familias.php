<?php
session_start();
require_once(__DIR__ . '/components/header.php');
require_once(__DIR__ . '/components/card.php');


$v = isset($_SESSION['user_id']);


$cards = [
    [
        "id" => "1",
        "nombre" => "Familia Simpson",
        "enlace" => "personajes.php",
        "imagen" => "img/familias.webp",
        "titulo" => "Simpson",
        "descripcion" => "<p>Aquí podrás ver a la familia Simpson, el grupo más emblemático de Springfield. Esta familia ha protagonizado incontables aventuras llenas de humor, crítica social y momentos entrañables. Su hogar en el 742 Evergreen Terrace es el escenario de historias que han marcado generaciones y siguen siendo referencia en la cultura pop mundial.</p><br>"
    ],
    [
        "id" => "9",
        "nombre" => "Familia Van Houten",
        "enlace" => "personajes.php",
        "imagen" => "img/van.png",
        "titulo" => "Van Houten",
        "descripcion" => "<p>Aquí podrás ver a la familia Van Houten, una representación de la vida cotidiana en Springfield. Con una historia marcada por altibajos y situaciones cómicas, esta familia ha sido parte de momentos memorables en la serie. Su presencia aporta una visión distinta de las dinámicas sociales y familiares que conviven en la ciudad, complementando el universo de Los Simpson con su estilo único y sus desafíos personales.</p><br>"
    ],
    [
        "id" => "3",
        "nombre" => "Familia Flanders",
        "enlace" => "personajes.php",
        "imagen" => "img/flan.png",
        "titulo" => "Flanders",
        "descripcion" => "<p>Aquí podrás ver a la familia Flanders, una presencia constante en el vecindario de Springfield. Con una actitud marcada por la rectitud, la fe y la amabilidad, esta familia representa un estilo de vida tradicional que contrasta con el caos de otras familias de la serie. Su participación en la historia aporta momentos de reflexión, humor y ternura, convirtiéndolos en un pilar peculiar dentro del universo de Los Simpson.</p><br>"
    ],

    [
        "id" => "5",
        "nombre" => "Familia Wiggum",
        "enlace" => "personajes.php",
        "imagen" => "img/wig.png",
        "titulo" => "Wiggum",
        "descripcion" => "<p>Aquí podrás ver a la familia Wiggum, una presencia peculiar dentro de la comunidad de Springfield. Con un estilo desenfadado y situaciones llenas de humor, esta familia aporta momentos únicos a la serie. Su participación refleja aspectos cotidianos de la vida en la ciudad, mezclando autoridad, rutina y comedia en una combinación que enriquece el universo de Los Simpson.</p><br>"
    ],


    [
        "id" => "6",
        "nombre" => "Familia Spuckler",
        "enlace" => "personajes.php",
        "imagen" => "img/spuck.png",
        "titulo" => "Spuckler",
        "descripcion" => "<p>Aquí podrás ver a la familia Spuckler, una de las más pintorescas de Springfield. Con un estilo de vida rural y desenfadado, esta familia aporta un toque de humor irreverente y situaciones inesperadas a la serie. Su presencia refleja una faceta distinta de la comunidad, marcada por la espontaneidad, la sencillez y una visión única del día a día en la ciudad.</p><br>"
    ],

    [
        "id" => "8",
        "nombre" => "Familia Bouvier",
        "enlace" => "personajes.php",
        "imagen" => "img/bou.png",
        "titulo" => "Bouvier",
        "descripcion" => "<p>Aquí podrás ver a la familia Bouvier, una presencia elegante y tradicional dentro del universo de Springfield. Con una historia marcada por costumbres arraigadas y una personalidad crítica, esta familia aporta una dimensión más refinada y compleja a la serie. Su participación refleja aspectos de clase, estilo y relaciones familiares que enriquecen el entorno social de Los Simpson.</p><br>"
    ],

    [
        "id" => "11",
        "nombre" => "Familia Lovejoy",
        "enlace" => "personajes.php",
        "imagen" => "img/love.png",
        "titulo" => "Lovejoy",
        "descripcion" => "<p>Aquí podrás conocer a la familia Lovejoy, una figura representativa de la moralidad y la vida religiosa en Springfield. Encabezada por el reverendo Timothy Lovejoy, esta familia encarna los valores de fe, comunidad y responsabilidad espiritual. Su presencia en la serie aporta una perspectiva ética y reflexiva, influyendo en los dilemas sociales y personales de los habitantes de la ciudad. A través de sus interacciones, especialmente con personajes como Ned Flanders y Marge Simpson, los Lovejoy enriquecen el universo de Los Simpson con debates sobre creencias, tolerancia y el papel de la religión en la vida cotidiana.</p><br>"
    ],

    [
        "id" => "2",
        "nombre" => "Personjes independientes",
        "enlace" => "personajes.php",
        "imagen" => "img/in.png",
        "titulo" => "Personajes independientes",
        "descripcion" => "<p>Aquí podrás descubrir a los personajes independientes de Springfield, figuras que, sin estar ligadas por lazos familiares, aportan una riqueza única al universo de Los Simpson. Desde el sarcástico vendedor de cómics hasta la siempre escéptica Lisa, estos personajes encarnan diversas perspectivas sociales, culturales y emocionales. Su presencia en la serie permite explorar temas como la soledad, la ambición, la amistad y la identidad, añadiendo capas de complejidad a la vida cotidiana de la ciudad. A través de sus historias individuales, Springfield se convierte en un reflejo vibrante y diverso de la experiencia humana.</p><br>"
    ],

    [
        "id" => "10",
        "nombre" => "Familia Skinner",
        "enlace" => "personajes.php",
        "imagen" => "img/skin.png",
        "titulo" => "Skinner",
        "descripcion" => "<p>Aquí podrás ver a la familia Skinner, una presencia marcada por disciplina y tradición en Springfield. Con una historia que refleja valores de autoridad, educación y vínculos familiares complejos, esta familia aporta una dimensión más seria y estructurada al universo de Los Simpson. Su participación en la serie añade profundidad a las relaciones sociales y escolares que definen la vida en la ciudad</p><br>"
    ],


    [
        "id" => "4",
        "nombre" => "Familia Nahasapeemapetilon",
        "enlace" => "personajes.php",
        "imagen" => "img/app.png",
        "titulo" => "Nahasapeemapetilon",
        "descripcion" => "<p>Aquí podrás ver a la familia Nahasapeemapetilon, una de las más singulares de Springfield. Con una historia marcada por tradiciones culturales y situaciones cotidianas, esta familia aporta una perspectiva diferente al entorno de la serie. Su presencia en la comunidad refleja valores de esfuerzo, familia y adaptación, enriqueciendo el universo de Los Simpson con su estilo característico y sus vivencias únicas.</p><br>"
    ]
];



?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="bootstrap.css">
    <script type="text/javascript" src="bootstrap/js/bootstrap.bundle.js" defer></script>
    <meta name="keywords" content="Lá mejor página">
    <meta name="author" content="Sergio Vallejo">
    <title>Personajes</title>
</head>

<body>
    <?php echo render() ?>
    <main>
        <section>
            <div class="container-fluid">
                <div id="todo"
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 m-4 justify-content-lg-center">
                    <?php
                    foreach ($cards as $section) {
                        echo card($section, '?f=' . "{$section['id']}");
                    }
                    ?>
                </div>
        </section>
        <article>

        </article>
        <aside>

        </aside>
    </main>
    <footer>
        <strong>&copy; Todos los derechos reservados Sergio 2025</strong>
    </footer>
</body>

</html>


<!--
Flujo:
    Se inicia sesión con session_start().
    Se verifica si existe $_SESSION['user_id'].
    Si no existe → redirige al login.php.
    Si existe → muestra el contenido privado (bienvenida, opciones, logout).
    Aquí se ve que la sesión mantiene conectados a los usuarios mientras navegan.
-->