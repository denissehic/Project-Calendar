

<?php
/**
    Data is received from "eventHandler.js".
    The data given from the file will simply write the the data onto a file named "eventInformation.txt".
    Each string of data given from "eventHandler.js" will be on its own line.
*/
$file = "eventInformation.txt";
date_default_timezone_set("America/Chicago");


$date = $_POST['date'];
$description = $_POST['description'];


echo readfile($file) . "<br>";

$outFile = fopen($file, "a+");

fwrite($outFile, $date . ": " . $description . "\n");

fclose($outFile);
?>
