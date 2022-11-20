<?php
session_start();
include("connection.php");
header('Access-Control-Allow-Origin: *');

$id = $_SESSION['id'];
$newBio = $_POST['newBio'];
echo ($id);
echo ($newBio);
$query = $mysqli->prepare("UPDATE users SET bio = ? WHERE id = ?");
$query->bind_param("si", $newBio, $id);
$query->execute();
