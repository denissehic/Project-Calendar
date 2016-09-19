/**
Initialize the currentMonth, currentYear, and queryString
variables. currentMonth and currentYear are used to
generate a queryString. The queryString is then used to add,
view, and remove events for a selectedDate date.
*/
var currentMonth = "08";
var currentYear =  "2016";
var queryString = "";

/**
The function takes in the month and year selected by the
user and assigns it to the currentMonth and currentYear.
*/
function update(month,year) {
    currentMonth = month;
    currentYear = year;
}

/** Creates button for the month of August */
var aug = document.createElement('button');
aug.setAttribute('class', 'focus w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey w3-border-black');
aug.setAttribute('style','font-weight:900');
aug.appendChild(document.createTextNode('Aug'));
aug.onclick = function() {update("08","2016"); setupCalendar("2016", 8)};
/** Creates button for the month of September*/
var sep = document.createElement('button');
sep.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
sep.setAttribute('style','font-weight:900');
sep.appendChild(document.createTextNode('Sep'));
sep.onclick = function() {update("09","2016"); setupCalendar("2016", 9)};
/** Creates button for the month of October*/
var oct = document.createElement('button');
oct.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
oct.setAttribute('style','font-weight:900');
oct.appendChild(document.createTextNode('Oct'));
oct.onclick = function() {update("10","2016"); setupCalendar("2016", 10)};
/** Creates button for the month of November */
var nov = document.createElement('button');
nov.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
nov.setAttribute('style','font-weight:900');
nov.appendChild(document.createTextNode('Nov'));
nov.onclick = function() {update("11","2016"); setupCalendar("2016", 11)};
/** Creates button for the month of December */
var dec = document.createElement('button');
dec.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
dec.setAttribute('style','font-weight:900');
dec.appendChild(document.createTextNode('Dec'));
dec.onclick = function() {update("12","2016"); setupCalendar("2016", 12)};
/** Creates button for the month of January */
var jan = document.createElement('button');
jan.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
jan.setAttribute('style','font-weight:900');
jan.appendChild(document.createTextNode('Jan'));
jan.onclick = function() {update("01","2017"); setupCalendar("2017", 1)};
/** Creates button for the month of February */
var feb = document.createElement('button');
feb.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
feb.setAttribute('style','font-weight:900');
feb.appendChild(document.createTextNode('Feb'));
feb.onclick = function() {update("02","2017"); setupCalendar("2017", 2)};
/** Creates button for the month of March */
var mar = document.createElement('button');
mar.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
mar.setAttribute('style','font-weight:900');
mar.appendChild(document.createTextNode('Mar'));
mar.onclick = function() {update("03","2017"); setupCalendar("2017", 3)};
/** Creates button for the month of April */
var apr = document.createElement('button');
apr.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
apr.setAttribute('style','font-weight:900');
apr.appendChild(document.createTextNode('Apr'));
apr.onclick = function() {update("04","2017"); setupCalendar("2017", 4)};
/** Creates button for the month of May */
var may = document.createElement('button');
may.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
may.setAttribute('style','font-weight:900');
may.appendChild(document.createTextNode('May'));
may.onclick = function() {update("05","2017"); setupCalendar("2017", 5)};

var rst = document.createElement('button');
rst.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
rst.setAttribute('style','font-weight:900');
rst.appendChild(document.createTextNode('rst'));
rst.onclick = function() {clearCalendar()};



var wrapper = document.getElementById('wrapper');
wrapper.appendChild(aug);
wrapper.appendChild(sep);
wrapper.appendChild(oct);
wrapper.appendChild(nov);
wrapper.appendChild(dec);
wrapper.appendChild(jan);
wrapper.appendChild(feb);
wrapper.appendChild(mar);
wrapper.appendChild(apr);
wrapper.appendChild(may);
wrapper.appendChild(rst);

document.getElementById("calendar").onload = function() {setupCalendar("2016",8)};
