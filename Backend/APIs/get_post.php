<?php
include("connection.php");

$query = $mysqli->prepare("SELECT * FROM posts");
$query->execute();

$array = $query->get_result();
$response = [];
while ($article = $array->fetch_assoc()) {
    $response[] = $article;
}
echo json_encode($response);
