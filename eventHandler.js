//Add event for certain day
function addEvent(queryString) {
    var event = {
        date: "no date",
        description: "no description"
    };

    event.date = queryString;
    //var datePromptInput = prompt(event.date);
    if (queryString.length() != 8) {
        //document.getElementById("event").innerHTML = "You added an event on " + event.date + " and the event is:  " + event.description;
        alert("Please select date.");
    }

    var descriptionPromptInput = prompt("What is your event?");
    event.description = descriptionPromptInput;


    if (descriptionPromptInput == "")
    {
        alert("Please type in an event.")
    }
    else {
        $.post("eventFile.php", event);
        readEvent(queryString);
    }
}

///Get all events for a specified date
function readEvent(queryString) {
    var eventReader = {
        dateLookup: "no date",
        eventList: "No events"
    };

    var dateID = queryString;
    eventReader.dateLookup = dateID;
    //document.getElementById("event").innerHTML = EventList;
    if (dateID != null) {
        document.getElementById("event2").innerHTML = "Reading events...";
        $.post("eventReader.php", eventReader, function(data) {

            document.getElementById("event2").innerHTML = data;

        });
    }
}

function removeEvent(queryString) {
    var eventFinder = {
        dateLookup: "no date",
        ind: 0
    };

    var dateID = queryString;
    eventFinder.dateLookup = queryString;
    var indInput = prompt("Enter the index");
    eventFinder.ind = indInput;

    $.post("eventRemover.php", eventFinder, function(data) {
        document.getElementById("event3").innerHTML = data;
    });


}
