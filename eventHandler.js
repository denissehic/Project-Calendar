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
        type: "single"
    };
    var x = document.getElementById("event_date");
    var text = x.value.toString().substring(5,7) + x.value.toString().substring(8,10) + x.value.toString().substring(0,4);

    var end = document.getElementById("end_date").value;
    if(end == "")
    {
      alert("empty");
    }
    else {
      event.end_date = end;
    }
    event.start_time = document.getElementById("start_time").value;
    event.end_time = document.getElementById("end_time").value;
    if(event.start_time == ""){
      event.start_time = "00:00"
    }
    if(event.end_time == ""){
      event.end_time = "24:00"
    }

    if (document.getElementById("mult").checked)
    {
      event.type = "mult";
    }
    if (document.getElementById("rec").checked)
    {
      event.type = "rec";
    }

    alert(event.type);
    var queryString = text;



    event.date = queryString;
    var descriptionPromptInput = document.getElementById("event_name");

    event.description = descriptionPromptInput.value;



    if (descriptionPromptInput == "") {
        alert("Please type in an event.");
    } else {
        $.post("eventFile.php", event);
        readEvent(queryString);
    }
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
