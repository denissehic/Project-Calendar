<?php
/**
    A date string is received from "eventHandler.js".
    This file opens up "eventInformation.txt" and looks for all dates matching the date received from the JS file.
    If the dates match then that line with the matching dates get sent back to "eventHandler.js" and is displayed on the web page.
*/
date_default_timezone_set("America/Chicago");
$dateLook = $_POST['dateLookup'];
$date = substr($dateLook, 4,8) . "-" . substr($dateLook, 0,2) . "-" . substr($dateLook, 2,2); 
class Calendar {
	public function getEvents($event_date) {
		$db = $this->getDB();
		$records = $db->query("SELECT * FROM calendarV2 WHERE event_date='" . $event_date . "' ORDER BY start_time ASC");
		$data = array();
		while($row = $records->fetch_assoc()) {
			$data[] = $row; 
		}
		return $data;
	}
	public function getDB() {
		$server = "mysql.eecs.ku.edu";
		$username = "dmurga";
		$db = new mysqli($server, $username, "Ns5qKknK", $username);
		return $db;
	}
}
$calendar = new Calendar;
$data = $calendar->getEvents($date);
echo "<br>Your events for " . substr($dateLook, 0,2). "/". substr($dateLook, 2,2) ."/" . substr($dateLook, 4,9) . " are: " . "<br>";
foreach ($data as $key => $event) {
	$red = false;
	$event_string = $event['description'] . " | " . substr($event['start_time'], 0, 5) . "-" . substr($event['end_time'], 0, 5) . " | Event ID: " .  $event['event_id'] . " <br>";
	$ind = $key;
	if($key > 0) {
		while($ind >=0) {
			if($event['start_time'] < $data[$ind - 1]['end_time']) {
				$red = true;
			}
			$ind--;
		}
	}
	if($red) {
		echo "<font color='red'>" . $event_string . "</font>";
	}
	else {
		echo $event_string;
	}
	
}
echo "<br>";
?>
