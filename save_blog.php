<?php

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "blog";

if(isset($_POST['title'], $_POST['category'], $_POST['theme'], $_POST['content'])) {
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO blog_data (title, category, background_img, content) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $title, $category, $theme, $content);

    $title = $_POST['title'];
    $category = $_POST['category'];
    $theme = $_POST['theme'];
    $content = $_POST['content'];

    if ($stmt->execute()) {
        echo "Blog published successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Error: All required fields are not filled.";
}

?>
