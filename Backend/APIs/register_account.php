<?php

include("connection.php");
header('Access-Control-Allow-Origin: *');


$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$password = $_POST["password"];
$bio = "Edit Bio";


$check_query = $mysqli->prepare("SELECT * FROM users WHERE email = ?");
$check_query->bind_param("s", $email);
$check_query->execute();

$array = $check_query->get_result();
if (mysqli_num_rows($array) == 0) {
    $query = $mysqli->prepare("INSERT INTO users (fname, lname, email, password, bio) VALUES (?,?,?,?,?)");
    $query->bind_param("sssss", $fname, $lname, $email, $password, $bio);
    $query->execute();
    $response = [];
    $response["success"] = true;
    echo json_encode($response);
} else {
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
}
