<?php
        $first_name = $_POST['First_Name'];
        $last_name = $_POST['Last_Name'];
        $password = $_POST['password'];
        $phone_number = $_POST['phone_number'];
        $email = $_POST['email'];
        $city = $_POST['city'];
        $address = $_POST['address'];
if (!empty($first_name) ||!empty($last_name) ||!empty($password) ||!empty($phone_number) || !empty($email) || !empty($city) || !empty($address)) {

        // Connect to Database
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "moh_20414396";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM registration WHERE email = ? LIMIT 1"; // To limit emails to one email
            $Insert = "INSERT INTO registration (first_name, last_name, password, phone,email, city, address) values(?, ?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssssiss",$first_name, $last_name, $password, $email, $phone_number, $city, $address);
                if ($stmt->execute()) {
                    echo "New record inserted successfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
