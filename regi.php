<?php

    $servername = "localhost";
    $username = "root";
    $pass = "";
    $dbname = "blog";
    $conn = mysqli_connect($servername, $username, $pass, $dbname);

    if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
    }
    else
    {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $no = $_POST["no"];
        $password = $_POST["pass"];
        $name = $_POST["name"];

         
         $sql = "INSERT INTO user (fname,username, email, contact_no, pas) VALUES ('$name','$username', '$email', '$no', '$password')";
        
 
         if (mysqli_query($conn, $sql)) {
             echo "Registration successful. You can now <a href='Login.html'>login</a>.";
         } else {
             echo "Failed: " . mysqli_error($conn);
         }
 
         // Close statement
         mysqli_close($conn);
    }

?>
