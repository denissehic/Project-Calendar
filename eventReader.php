<?php

/**
    A date string is received from "eventHandler.js". This file opens up "eventInformation.txt" and looks for all dates matching the date received from the JS file.  If the dates match then that line with the matching dates get sent back to "eventHandler.js" and is displayed on the web page.  
*/


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
