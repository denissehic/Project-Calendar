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
			while (strtotime($date) < strtotime($data['edate'])) {
				$insert_string = "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
				$db->query("INSERT INTO calendarV2 (description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
				$date = date("Y-m-d", strtotime($date . "+1 day"));
			}
		}
		else if($data['rec']) {
			while (strtotime($date) < strtotime($data['edate'])) {
				$date = date("Y-m-d", strtotime($data['sdate']));
				$insert_string = "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
				$db->query("INSERT INTO calendarV2 (description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
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
			$insert_string = "'" . $data['description'] . "', '" . $date . "', '" . $data['stime'] . "', '" . $data['etime'] . "'";
			$db->query("INSERT INTO calendarV2 (description, event_date, start_time, end_time) VALUES (" . $insert_string . ")");
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
		'description' => 'description', //$_POST['description'],
		'sdate' => $_POST['date'],
		'edate' => 'end_date', //$_POST['end_date'],
		'stime' => 'stime', //$_POST['start_time'],
		'etime' => 'etime', //$_POST['end_time'],
		'rec' => $_POST['recurring'] ? $_POST['recurring'] : '',
		'multi' => $_POST['multi'] ? $_POST['multi'] : ''
);

$calendar = new Calendar;
$calendar->addEvent($data);

?>
