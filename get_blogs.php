<?php
$servername = "localhost";
$username = "root";
$pass = "";
$dbname = "blog";
$conn = mysqli_connect($servername, $username, $pass, $dbname);

$category = $_GET['category'];

// Fetch blogs from the database based on the category
$query = "SELECT * FROM blog_data WHERE category = '$category'";
$result = mysqli_query($conn, $query);

$blogs = [];
while ($row = mysqli_fetch_assoc($result)) {
  $blogs[] = [
    'title' => $row['title'],
    'background_img' => $row['background_img'],
    'content' => html_entity_decode($row['content']), // Decode HTML entities
  ];
}

header('Content-Type: application/json');
echo json_encode($blogs);
?>
