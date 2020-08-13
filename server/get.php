<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idPersona"])) {
    exit("No hay registro de persona");
}
$idPersona = $_GET["idPersona"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id, name, email, state from personas where id = ?");
$sentencia->execute([$idPersona]);
$mascota = $sentencia->fetchObject();
echo json_encode($persona);
