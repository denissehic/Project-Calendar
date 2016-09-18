<?php

$file = "eventInformation.txt";
$lines = file($file);
date_default_timezone_set("America/Chicago");

$dateLook = $_POST['dateLookup'];
$dateID = substr($dateLook, 0,8);

$inFile = fopen($file, "r");

echo "Your events for " . $dateLook . " are: " . "<br>";

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
