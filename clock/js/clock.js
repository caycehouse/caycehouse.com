var displayDate,
    prependZero,
    ready,
    stopTimer,
    timer,
    twelveHourTime;
timer = null;
twelveHourTime = function(hours) {
    twelve_hour_time = hours -= 12;
    if (twelve_hour_time < 10) {
        twelve_hour_time = prependZero(twelve_hour_time);
    }
    return twelve_hour_time;
};
prependZero = function(time) {
    return "0" + time;
};
displayDate = function() {
    var current_hours,
        current_minutes,
        current_seconds,
        d,
        day,
        hours,
        minutes,
        month,
        seconds,
        year;
    d = new Date();
    current_hours = d.getHours();
    current_minutes = d.getMinutes();
    current_seconds = d.getSeconds();
    month = d.getMonth() + 1;
    day = d.getDate();
    year = d.getYear() - 100;
    hours = (function() {
        switch (false) {
        case current_hours !== 0:
            return 12;
        case !(current_hours > 12):
            return twelveHourTime(current_hours);
        case !(current_hours < 10):
            return prependZero(current_hours);
        default:
            return current_hours;
        }
    })();
    minutes = (function() {
        switch (false) {
        case !(current_minutes < 10):
            return prependZero(current_minutes);
        default:
            return current_minutes;
        }
    })();
    seconds = (function() {
        switch (false) {
        case !(current_seconds < 10):
            return prependZero(current_seconds);
        default:
            return current_seconds;
        }
    })();
    $("#time").html(hours + " : " + minutes + " : " + seconds);
    return $("#date").html(month + "/" + day + "/" + year);
};
stopTimer = function() {
    clearInterval(timer);
    return timer = null;
};
ready = function() {
    stopTimer();
    return timer = setInterval(displayDate, 1000);
};
$(document).ready(ready);


