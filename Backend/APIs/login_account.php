<?php

include("connection.php");
header('Access-Control-Allow-Origin: *');
session_start();
$email = $_POST["email"];
$password = $_POST["password"];

$query = $mysqli->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$query->bind_param("ss", $email, $password);
$query->execute();
$result = $query->get_result();
if (!empty($result)) {
    $account = $result->fetch_assoc();
    $_SESSION['id'] = $account['id'];
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}
