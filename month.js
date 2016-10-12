
/**
 * getStartOfMonth takes in a year and a month and returns an number 1-7 for
 * what day of the week the month starts on.
 */
var getStartOfMonth = function(year, month) {
    var day = 0;
    switch(month) {
        case 8:
            day = 1;
            break;
        case 9:
            day = 4;
            break;
        case 10:
            day = 6;
            break;
        case 11:
            day = 2;
            break;
        case 12:
            day = 4;
            break;
        case 1:
            day = 0;
            break;
        case 2:
            day = 3;
            break;
        case 3:
            day = 3;
            break;
        case 4:
            day = 6;
            break;
        case 5:
            day = 1;
            break;
    }
    return day;
}

/**
 * getDaysInMonth takes in a year and a month and returns the number of days
 * in the month. src: http://www.w3resource.com/javascript-exercises/javascript-date-exercise-3.php
 */
var getDaysInMonth = function(year, month) {
    return new Date(year, month, 0).getDate();
}


/**
 * setupCalendar takes in a year and a month and appends the digits of the days
 * onto the calendar table.
 */
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

    if (month === 8) {
        document.getElementById("monthName").innerHTML = "August";
    } else if (month === 9) {
        document.getElementById("monthName").innerHTML = "September";
    } else if (month === 10) {
        document.getElementById("monthName").innerHTML = "October";
    } else if (month === 11) {
        document.getElementById("monthName").innerHTML = "November";
    } else if (month === 12) {
        document.getElementById("monthName").innerHTML = "December";
    } else if (month === 1) {
        document.getElementById("monthName").innerHTML = "January";
    } else if (month === 2) {
        document.getElementById("monthName").innerHTML = "February";
    } else if (month === 3) {
        document.getElementById("monthName").innerHTML = "March";
    } else if (month === 4) {
        document.getElementById("monthName").innerHTML = "April";
    } else if(month === 5) {
        document.getElementById("monthName").innerHTML = "May";
    }

    var firstDay = getStartOfMonth(year, month);
    var lastDay = getDaysInMonth(year, month);
    console.log(getStartOfMonth(year, month));
    console.log(firstDay);

    for (i = 0; i < lastDay; i++) {

        btn = document.createElement("BUTTON");
        t = document.createTextNode((i + 1).toString());
        btn.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
        btn.setAttribute('style', 'font-weight:900');
        btn.appendChild(t);
        td = document.getElementById(days[i + firstDay]);
        td.appendChild(btn);
        btn.onclick = (function(x) {
            return function() {
                update2(x);
            }
        })((i + 1).toString());

    }

}

/**
 * clearCalendar deletes the buttons with the digits of the days from the calendar table
 */
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

    for (i = 0; i < days.length; i++) {
        td = document.getElementById(days[i]).innerHTML = "";
    }

}

/**
 * update2 takes in a day and generates a concatenated string to update the queryString
 * global variable.
 */
function update2(x) {
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    queryString = currentMonth + pad(x) + currentYear;
    document.getElementById('selectedDate').innerHTML = "Selected Date: " + currentMonth + "/" + pad(x) + "/" + currentYear;
    readEvent(queryString);
    return;
}
