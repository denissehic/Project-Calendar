
current = "";
queryString = "";
currentMonth = "08";
currentYear = "2016";

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

      for (i = 0; i < lastDay; i++) {

          btn = document.createElement("BUTTON"); // Create a <button> element
          t = document.createTextNode((i + 1).toString()); // Create a text node
          btn.appendChild(t); // Append the text to <button>
          td = document.getElementById(days[i + firstDay]);
          td.appendChild(btn);
          btn.onclick = (function(x) {
              return function() {
                  //put function name that takes in  the value i and sets it to currentDay
                  update(x);
              }
          })((i + 1).toString());

      }

  }

  function update (x) {
    queryString = currentMonth+x+currentYear;
    console.log(queryString);
    return;
  }

  setupCalendar(2016, 1);
