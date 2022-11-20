<?php
session_start();
include("connection.php");
header('Access-Control-Allow-Origin: *');

$idz = $_SESSION['id'];
$caption = $_POST['caption'];
$fileName = $_FILES["image"]["name"];
$likes = 0;

$query = $mysqli->prepare("INSERT into posts (userId, caption, pictureFile, likes) VALUES (?,?,?,?)");
$query->bind_param("issi", $idz, $caption, $fileName, $likes);
if ($query->execute()) {
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}

$folder = "../Posts/" . $fileName;
$tempname = $_FILES["image"]["tmp_name"];
if (move_uploaded_file($tempname, $folder)) {
    echo "Upload success!";
} else {
    echo "Upload fail.";
}
