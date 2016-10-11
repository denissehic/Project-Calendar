/**
This function take the queryString and validates that it is in the correct
MMDDYYYY format.Then it asks the user to inout the event for the day.
Then it calls the php script to place the event in eventInformaion.txt
*/
function addEvent() {
    var event = {
        date: "no date",
        end_date: "",
        description: "no description",
        start_time: "no time",
        end_time: "no time",
        rec: null,
        multi: null
    };

    //event date
    var event_date = document.getElementById("event_date").value, //2016-08-01
        queryString = event_date.toString().substring(5,7) + event_date.toString().substring(8,10) + event_date.toString().substring(0,4);
    event.date = event_date;    

    //check multi
    if(document.getElementById("mult").checked)
    {
        if (document.getElementById("end_date").value != "") {
            event.end_date = document.getElementById("end_date").value;
            event.multi = "mult";
        }
        else {
            alert("Please select an end date");
        }
    }

    //check times
    if(document.getElementById("time").checked) {
        if ((document.getElementById("start_time").value != null && document.getElementById("end_time").value != null)) {
            event.start_time = document.getElementById("start_time").value;
            event.end_time = document.getElementById("end_time").checked;
        }
        else {
            alert("Please select a time");
        }
    }
    else {
        event.start_time = "00:00"
        event.end_time = "24:00"
    }

    //check recurring
    if (document.getElementById("rec").checked)
    {
      if(document.getElementById("weekly").checked)
      {
        event.rec = "weekly";
      }
      else if(document.getElementById("biweekly").checked)
      {
        event.rec = "biweekly";
      }
      else if(document.getElementById("monthly").checked)
      {
        event.rec = "monthly";
      }
      else {
        alert("Please enter a recurring option")
      }
    }

    //check description
    if(document.getElementById("event_name").value) {
        event.description = document.getElementById("event_name").value;
    }
    else {
        alert("Please enter an event description");
    }
    
    $.post("eventFile.php", event);
    readEvent(queryString);
}

/**
This function takes the queryString and validates it to ensure it is in the
right MMDDYYYY format. Then it calls the php script to read all the events
for the specified date. Then it is displayed to the user.
*/
function readEvent(queryString) {
    var eventReader = {
        dateLookup: "no date",
        eventList: "No events"
    };

    var dateID = queryString;
    eventReader.dateLookup = dateID;
    if (dateID != null) {
        document.getElementById("event2").innerHTML = "Reading events...";
        $.post("eventReader.php", eventReader, function(data) {

            document.getElementById("event2").innerHTML = data;

        });
    }
}

/**
This function takes the queryString and validates it to ensure it is in the
right MMDDYYYY format. Then it calls the php script to to delete the specified
event by the user on that date.
*/
function removeEvent(queryString) {
    var eventFinder = {
        dateLookup: "no date",
        ind: 0
    };

    if (queryString.length != 8) {
        alert("Please select date.");
    } else {
        var dateID = queryString;
        eventFinder.dateLookup = queryString;
        var indInput = prompt("Enter the index");
        eventFinder.ind = indInput;

        $.post("eventRemover.php", eventFinder, function(data) {
            document.getElementById("event3").innerHTML = data;
        });
    }

}