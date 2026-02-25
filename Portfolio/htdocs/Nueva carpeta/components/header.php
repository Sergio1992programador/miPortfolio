<?php
$sesion = isset($_SESSION['user_id']);

function render()
{
    global $sesion; // Accede a la variable global dentro de la función

    $logoutItem = $sesion
        ? "<li class='nav-item'><a class='nav-link' href='logout.php'>Cerrar sesión</a></li>"
        : "<li class='nav-item'><a class='nav-link' href='login.php'>Iniciar sesión</a></li>";

    return "
    <header>
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark' id='navbar'>
            <div class='container-fluid'>
                <a class='navbar-brand' href='#'>
                    <h1>Los Simpson <img id='barto' src='img/bartt.png' alt='Bart'></h1>
                </a>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'
                    aria-controls='menu' aria-expanded='false' aria-label='Menú'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='menu'>
                    <ul class='navbar-nav ms-auto'>
                        <li class='nav-item'><a class='nav-link' href='dashboard.php'>Inicio</a></li>
                        <li class='nav-item'><a class='nav-link' href='#sobre'>Sobre nosotros</a></li>
                        <li class='nav-item'><a class='nav-link' href='#contacto'>Contacto</a></li>
                        $logoutItem
                    </ul>
                </div>
            </div>
        </nav>
    </header>";
}
?>