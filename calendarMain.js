/**
Initialize the currentMonth, currentYear, and queryString
variables. currentMonth and currentYear are used to
generate a queryString. The queryString is then used to add,
view, and remove events for a selectedDate date.
*/
var currentMonth = "10";
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

/**
Functions added to show/hide forms in the Event adder
*/
$("#btnEventWrite").click(function(e) {
    $("#eventAdder").toggle();
    e.preventDefault();
});

$("#confirmAdd").click(function(e) {
    $("#eventAdder").toggle();
    e.preventDefault();
    document.getElementById("start_time").value="";
    document.getElementById("end_time").value="";
    document.getElementById("end_date").value="";
    document.getElementById("weekly").checked = false;
    document.getElementById("biweekly").checked = false;
    document.getElementById("monthly").checked = false;
});

$('#time').change(function() {
    $(this).next('div').toggle();
    document.getElementById("start_time").value="";
    document.getElementById("end_time").value="";
});

$('#mult').change(function() {
    $(this).next('div').toggle();
    document.getElementById("end_date").value="";
    $('#rec').toggle();
    $('#recT').toggle();
});

$('#rec').change(function() {
    $(this).next('div').toggle();
    document.getElementById("weekly").checked = false;
    document.getElementById("biweekly").checked = false;
    document.getElementById("monthly").checked = false;
    $('#mult').toggle();
    $('#multT').toggle();
});

/** Week view **/
var flag = false;
function weekFunction(){
  document.getElementById('weekView').style.backgroundColor = "#A9A9A9";
  flag = true;
      $('.tableRow').click(function(){
        if(flag == true ) {
         $('.tableRow').hide(); // hide all rows
         $("#mon").show();
         $("#wek").hide();
         $(this).show(); // show the clicked one
       }
       });
}

$("#mon").click(function(e) {
    flag = false;
     $('.tableRow').show(); // show all rows
     $("#mon").hide();
     $("#wek").show();
});



/** Creates button for the month of August */
var aug = document.createElement('button');
aug.setAttribute('class', 'focus w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey w3-border-black');
aug.setAttribute('style','font-weight:900');
aug.appendChild(document.createTextNode('Aug'));
aug.onclick = function() { flag = false; $("#wek").show();  $('#mon').hide(); $('.tableRow').show(); update("08","2016"); setupCalendar("2016", 8)};
/** Creates button for the month of September*/
var sep = document.createElement('button');
sep.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
sep.setAttribute('style','font-weight:900');
sep.appendChild(document.createTextNode('Sep'));
sep.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide(); $('.tableRow').show(); update("09","2016"); setupCalendar("2016", 9)};
/** Creates button for the month of October*/
var oct = document.createElement('button');
oct.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
oct.setAttribute('style','font-weight:900');
oct.appendChild(document.createTextNode('Oct'));
oct.onclick = function() {  flag = false; $("#wek").show(); $('#mon').hide(); $('.tableRow').show();  update("10","2016"); setupCalendar("2016", 10)};
/** Creates button for the month of November */
var nov = document.createElement('button');
nov.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
nov.setAttribute('style','font-weight:900');
nov.appendChild(document.createTextNode('Nov'));
nov.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show();  update("11","2016"); setupCalendar("2016", 11)};
/** Creates button for the month of December */
var dec = document.createElement('button');
dec.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
dec.setAttribute('style','font-weight:900');
dec.appendChild(document.createTextNode('Dec'));
dec.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show();  update("12","2016"); setupCalendar("2016", 12)};
/** Creates button for the month of January */
var jan = document.createElement('button');
jan.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
jan.setAttribute('style','font-weight:900');
jan.appendChild(document.createTextNode('Jan'));
jan.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show(); update("01","2017"); setupCalendar("2017", 1)};
/** Creates button for the month of February */
var feb = document.createElement('button');
feb.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
feb.setAttribute('style','font-weight:900');
feb.appendChild(document.createTextNode('Feb'));
feb.onclick = function() { flag = false; $("#wek").show();  $('#mon').hide();  $('.tableRow').show(); update("02","2017"); setupCalendar("2017", 2)};
/** Creates button for the month of March */
var mar = document.createElement('button');
mar.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
mar.setAttribute('style','font-weight:900');
mar.appendChild(document.createTextNode('Mar'));
mar.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show(); update("03","2017"); setupCalendar("2017", 3)};
/** Creates button for the month of April */
var apr = document.createElement('button');
apr.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
apr.setAttribute('style','font-weight:900');
apr.appendChild(document.createTextNode('Apr'));
apr.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show(); update("04","2017"); setupCalendar("2017", 4)};
/** Creates button for the month of May */
var may = document.createElement('button');
may.setAttribute('class', 'w3-btn w3-xlarge w3-dark-grey w3-hover-light-grey');
may.setAttribute('style','font-weight:900');
may.appendChild(document.createTextNode('May'));
may.onclick = function() { flag = false; $("#wek").show(); $('#mon').hide();  $('.tableRow').show(); update("05","2017"); setupCalendar("2017", 5)};

/**
This appends all the buttons to the header to create a year view of the year.
*/
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
/**
This starts the program off on the first mon of the academic year.
*/
document.getElementById("calendar").onload = function() {setupCalendar("2016",10)};