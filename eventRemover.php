<?php
/**
    A date and index is received from "eventHandler.js".
    This file opens up and clears "eventInformation.txt" and scans all indeces of the events.
    If the index of the event in this file does NOT match up with the event sent
    from the JS file, the line gets rewritten onto "eventInformation.txt".
    Otherwise, the line is not written on the text file.
*/
date_default_timezone_set("America/Chicago");
$dateLook = $_POST['dateLookup'];
$date = substr($dateLook, 4,8) . "-" . substr($dateLook, 0,2) . "-" . substr($dateLook, 2,2);
class Calendar {
    public function deleteEvent($event_id) {
        $db = $this->getDB();
        $db->query("DELETE FROM calendarV2 WHERE event_id=" . $event_id);
    }
    public function getDB() {
        $server = "mysql.eecs.ku.edu";
        $username = "dmurga";
        $db = new mysqli($server, $username, "Ns5qKknK", $username);
        return $db;
    }
}
$calendar = new Calendar;
$calendar->deleteEvent($_REQUEST['event_id']);
echo "Your events for " . substr($dateLook, 0,2). "/". substr($dateLook, 2,2) ."/" . substr($dateLook, 4,9) . " are: " . "<br>";
?>
