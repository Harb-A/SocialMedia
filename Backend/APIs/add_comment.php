<?php

include("connection.php");
header('Access-Control-Allow-Origin: *');


$picId = $_POST["picId"];
$comment = $_POST["comment"];

$array = $check_query->get_result();
if (mysqli_num_rows($array) == 0) {
    $query = $mysqli->prepare("INSERT INTO comments (picId, comment) VALUES (?,?)");
    $query->bind_param("i, s", $picId, $comment);
    $query->execute();
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}
