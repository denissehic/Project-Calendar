<?php

$file = "eventInformation.txt";
$lines = file($file);
date_default_timezone_set("America/Chicago");

$dateLook = $_POST['dateLookup'];
$dateID = substr($dateLook, 0,8);

$inFile = fopen($file, "r");

echo "Your events for " . substr($dateLook, 0,2). "/". substr($dateLook, 2,2) ."/" . substr($dateLook, 4,9) . " are: " . "<br>";

for($i = 0; $i < sizeof($lines); $i++)
{
    if(substr($lines[$i],0,8) == $dateLook)
    {
        echo $i . ". " . substr($lines[$i],9) . "<br>";
    }
}

/*while(!feof($inFile))
{

}*/

fclose($inFile);

?>
