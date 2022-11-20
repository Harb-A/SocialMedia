<?php
session_start();
include("connection.php");
header('Access-Control-Allow-Origin: *');

$id = $_SESSION["id"];

$query = $mysqli->prepare("SELECT * FROM users WHERE id = ?");
$query->bind_param("i", $id);
$query->execute();

$res = $query->get_result();
$res = $res->fetch_assoc();

echo json_encode($res);
