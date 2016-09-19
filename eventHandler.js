/**
This function take the queryString and validates that it is in the correct
MMDDYYYY format.Then it asks the user to inout the event for the day.
Then it calls the php script to place the event in eventInformaion.txt
*/
function addEvent(queryString) {
    var event = {
        date: "no date",
        description: "no description"
    };

    event.date = queryString;

    if (queryString.length != 8) {

        alert("Please select date.");
    } else {
        var descriptionPromptInput = prompt("What is your event?");
        event.description = descriptionPromptInput;
    }

    if (descriptionPromptInput == "") {
        alert("Please type in an event.")
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
