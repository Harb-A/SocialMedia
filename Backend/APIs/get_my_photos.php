<?php
session_start();
include("connection.php");


$id = $_SESSION["id"];

$query = $mysqli->prepare("SELECT * FROM posts WHERE userId = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();
$response = [];
while ($article = $array->fetch_assoc()) {
    $response[] = $article;
}
echo json_encode($response);
