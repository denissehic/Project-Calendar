<?php
/**
    Data is received from "eventHandler.js".
    The data given from the file will simply write the the data onto a file named "eventInformation.txt".
    Each string of data given from "eventHandler.js" will be on its own line.
*/
date_default_timezone_set("America/Chicago");
class Calendar {
	public function addEvent($data) {
		$db = $this->getDB();
		if ($data['multi']) {
			$date = date("Y-m-d", strtotime($data['sdate']));
			$id = intval($db->query("SELECT MAX(event_id) as id FROM calendarV2")->fetch_assoc()['id']);
			$id += 1;
			while (strtotime($date) <= strtotime($data['edate'])) {
				$insert_string = $id . ", " . "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
				$db->query("INSERT INTO calendarV2 (event_id, description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
				$date = date("Y-m-d", strtotime($date . "+1 day"));
			}
		}
		else if($data['rec']) {
			$date = date("Y-m-d", strtotime($data['sdate']));
			$id = intval($db->query("SELECT MAX(event_id) as id FROM calendarV2")->fetch_assoc()['id']);
			$id += 1;
			while (strtotime($date) <= strtotime("2016-10-31")) {//< strtotime($data['edate'])) {
				$insert_string = $id . ", " . "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
				$db->query("INSERT INTO calendarV2 (event_id, description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
				switch ($data['rec']) {
					case 'weekly':
						$date = date("Y-m-d", strtotime($date . "+1 week"));
						break;
					case 'biweekly':
						$date = date("Y-m-d", strtotime($date . "+2 week"));
						break;
					case 'monthly':
						$date = date("Y-m-d", strtotime($date . "+1 month"));
						break;
					default:
						$date = date("Y-m-d", strtotime($date . "next " . $data['rec']));
						break;
				}
			}
		}
		else {
			$date = date("Y-m-d", strtotime($data['sdate']));
			$id = intval($db->query("SELECT MAX(event_id) as id FROM calendarV2")->fetch_assoc()['id']);
			$id += 1;
			$insert_string = $id . ", " . "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
			$db->query("INSERT INTO calendarV2 (event_id, description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
		}
	}
	public function getDB() {
		$server = "mysql.eecs.ku.edu";
		$username = "dmurga";
		$db = new mysqli($server, $username, "Ns5qKknK", $username);
		return $db;
	}
}
$data = array(
		'description' => $_POST['description'],
		'sdate' => $_POST['date'],
		'edate' => $_POST['end_date'],
		'stime' => $_POST['start_time'],
		'etime' => $_POST['end_time'],
		'rec' => $_POST['rec'],
		'multi' => $_POST['multi']
);
var_dump($data);
$calendar = new Calendar;
$calendar->addEvent($data);

?>
