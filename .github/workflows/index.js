let time = document.getElementById("currentUTCTime");

setInterval(() => {

    let d = new Date();

    time.innerHTML = d.toLocaleTimeString();

});



var today = new Date();

var day = today.getDay();



var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("currentDayOfTheWeek").innerHTML = dayList[day];
