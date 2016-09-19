<?php

$file = "eventInformation.txt";
$lines = file($file);
date_default_timezone_set("America/Chicago");
//$newOutFile = "eventDeleter.txt";

$dateLook = $_POST['dateLookup'];
$dateID = substr($dateLook, 0,8);
$ind = $_POST['ind'];

$inFile = fopen($file, "w+");
//$newInFile = fopen($newOutFile, "a+");
//$j = 0;
$lineToRemove = "";

echo "Your events for " . $dateLook . " are: " . "<br>";

for($i = 0; $i < sizeof($lines); $i++)
{

    $lineToRemove = $i . ". " . $lines[$i] . nl2br();
    if(substr($lineToRemove,0,1) != $ind)
    {
        fwrite($inFile, $lines[$i] . nl2br());

    }
}

/*while(!feof($inFile))
{

}*/

fclose($inFile);

?>
