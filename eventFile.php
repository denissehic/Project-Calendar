<?php

$file = "eventInformation.txt";
date_default_timezone_set("America/Chicago");


$date = $_POST['date'];
$description = $_POST['description'];


echo readfile($file) . "<br>";

$outFile = fopen($file, "a+");

fwrite($outFile, $date . ": " . $description . "\n");

fclose($outFile);
?>
