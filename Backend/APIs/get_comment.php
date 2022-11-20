<?php
include("connection.php");


$id = $_GET["id"];
$query = $mysqli->prepare("SELECT com FROM comments WHERE picId = ?");
$query->bind_param("i", $id);
$query->execute();

$array = $query->get_result();
$response = [];
while ($article = $array->fetch_assoc()) {
    $response[] = $article;
}
echo json_encode($response);
