var getStartOfMonth = function(year, month) {

    var day = new Date(year + "-" + month + "-01").getDay();
    day = (day === 0) ? 7 : day;
    return day;

}



//src: http://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
var getDaysInMonth = function(year, month) {
    return new Date(year, month, 0).getDate();
}



var setupCalendar = function(year, month) {
    clearCalendar();
    var days = [];
    for (i = 0; i <= 5; i++) {
        days.push("sunday" + i.toString());
        days.push("monday" + i.toString());
        days.push("tuesday" + i.toString());
        days.push("wednesday" + i.toString());
        days.push("thursday" + i.toString());
        days.push("friday" + i.toString());
        days.push("saturday" + i.toString());
    }

    var firstDay = getStartOfMonth(year, month);
    var lastDay = getDaysInMonth(year, month);
    console.log(getStartOfMonth(year, month));
    console.log(firstDay);

    if(month === 8){
      document.getElementById("monthName").innerHTML = "August";
    }
    else if(month === 9){
      document.getElementById("monthName").innerHTML = "September";
    }
    else if(month === 10){
      document.getElementById("monthName").innerHTML = "October";
    }
    else if(month === 11){
      document.getElementById("monthName").innerHTML = "November";
    }
    else if(month === 12){
      document.getElementById("monthName").innerHTML = "December";
    }
    else if(month === 1){
      document.getElementById("monthName").innerHTML = "January";
    }
    else if(month === 2){
      document.getElementById("monthName").innerHTML = "February";
    }
    else if(month === 3){
      document.getElementById("monthName").innerHTML = "March";
    }
    else if(month === 4){
      document.getElementById("monthName").innerHTML = "April";
    }
    else if(month === 5){
      document.getElementById("monthName").innerHTML = "May";
    }

    for (i = 0; i < lastDay; i++) {

        btn = document.createElement("BUTTON"); // Create a <button> element
        t = document.createTextNode((i + 1).toString()); // Create a text node
        btn.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
        btn.setAttribute('style', 'font-weight:900');
        btn.appendChild(t); // Append the text to <button>
        td = document.getElementById(days[i + firstDay]);
        td.appendChild(btn);
        btn.onclick = (function(x) {
            return function() {
                //put function name that takes in  the value i and sets it to currentDay
                update2(x);
            }
        })((i + 1).toString());

    }

}

var clearCalendar = function() {

    var days = [];
    for (i = 0; i <= 5; i++) {
        days.push("sunday" + i.toString());
        days.push("monday" + i.toString());
        days.push("tuesday" + i.toString());
        days.push("wednesday" + i.toString());
        days.push("thursday" + i.toString());
        days.push("friday" + i.toString());
        days.push("saturday" + i.toString());
    }

<<<<<<< HEAD
    for (i = 0; i < days.length; i++) {
        td = document.getElementById(days[i]).innerHTML = "";
=======
    document.getElementById("monthName").innerHTML = ""

    for (i = 0; i < days.length; i++) {
        document.getElementById(days[i]).innerHTML = "";
>>>>>>> origin/master
    }

}


function update2(x) {
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    queryString = currentMonth + pad(x) + currentYear;
    document.getElementById('selectedDate').innerHTML = "Selected month: " + currentMonth + "/" + pad(x) + "/" + currentYear;
    readEvent(queryString);
    //document.getElementById("event3").innerHTML = "Your events for " + currentMonth + "/" + pad(x) + "/" + currentYear + " are:  ";
    return;
}
