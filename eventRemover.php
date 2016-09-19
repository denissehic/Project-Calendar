<?php
/**
    A date and index is received from "eventHandler.js". This file opens up and clears "eventInformation.txt" and scans all indeces of the events. If the index of the event in this file does NOT match up with the event sent from the JS file, the line gets rewritten onto "eventInformation.txt".  Otherwise, the line is not written on the text file.
*/

/** The text file to be opend */
$file = "eventInformation.txt"; 

$lines = file($file); // 

$dateLook = $_POST['dateLookup'];
$dateID = substr($dateLook, 0,8);
$ind = $_POST['ind'];

$inFile = fopen($file, "w+");
//$newInFile = fopen($newOutFile, "a+");
//$j = 0;
$lineToRemove = "";

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
