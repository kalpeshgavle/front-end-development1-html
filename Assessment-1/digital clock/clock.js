function dayTime() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = time.getDay();
    let mon = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let sessions = document.getElementById("session");


    // for 2 digits
    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }
    if (sec < 10) {
        sec = "0" + sec
    }
    // for AM/PM status

    if (hrs >= 12) {
        sessions.innerHTML = "PM";
    } else {
        sessions.innerHTML = "AM";
    };

    // for 12 hour format

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    // for Weekdays
    if (day == 0) {
        day = "Sunday"
    } else if (day == 1) {
        day = "Monday"
    }
    else if (day == 2) {
        day = "Tuesday"
    }
    else if (day == 3) {
        day = "Wednesday"
    }
    else if (day == 4) {
        day = "Thursday"
    }
    else if (day == 5) {
        day = "Friday"
    }
    else if (day == 6) {
        day = "Saturday"
    }

    // for months

    if (mon == 0) {
        mon = "January"
    }
    else if (mon == 1) {
        mon = "February"
    }
    else if (mon == 2) {
        mon = "March"
    }
    else if (mon == 3) {
        mon = "April"
    }
    else if (mon == 4) {
        mon = "MAy"
    }
    else if (mon == 5) {
        mon = "June"
    }
    else if (mon == 6) {
        mon = "July"
    }
    else if (mon == 7) {
        mon = "August"
    }
    else if (mon == 8) {
        mon = "September"
    }
    else if (mon == 9) {
        mon = "October"
    }
    else if (mon == 10) {
        mon = "November"
    }
    else if (mon == 11) {
        mon = "December"
    }


    // for display 
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = mon;
    document.getElementById("year").innerHTML = year;
    document.getElementById("date").innerHTML = date;
}

setInterval(dayTime)