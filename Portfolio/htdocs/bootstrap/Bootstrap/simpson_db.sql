-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-10-2025 a las 12:20:33
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simpson_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loginuser`
--

CREATE TABLE `loginuser` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellidos` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `telefono` int(11) NOT NULL,
  `usuarioNuevo` varchar(200) NOT NULL,
  `password_hash` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `loginuser`
--

INSERT INTO `loginuser` (`id`, `nombre`, `apellidos`, `email`, `telefono`, `usuarioNuevo`, `password_hash`) VALUES
(3, 'Nacho', 'iiiii', 'sdtgseatsea@hotmail.com', 444444, 'Nac', '$2y$10$NiD/e4a4bFC/Ww/pPzxqEeiro62YEMQI/DQHxSN6SRyAnz9OOj532'),
(4, 'sergio', 'Vallejo', 'sergiovallejo1992@gmail.com', 444444, 'SergioV', '$2y$10$GYdw3q4Hdo9rSZ1lwpC3vOaV.ra9jhsl.zWMPC/BYeAOSg6p4wk/u');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `loginuser`
--
ALTER TABLE `loginuser`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `loginuser`
--
ALTER TABLE `loginuser`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
