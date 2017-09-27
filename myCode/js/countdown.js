var showDays = $('#showDays');
var showHours = $('#showHours');
var showMinutes = $('#showMinutes');
var showSeconds = $('#showSeconds');
var timer;
timer = setInterval(function(){
    var currentTime = new Date();
    var endTime = new Date('2017-7-10');
    var leftTime = endTime.getTime() - currentTime.getTime();
    var day = Math.floor(leftTime/1000/60/60/24);
    var hour = Math.floor(leftTime/1000/60/60%24);
    var minute = Math.floor(leftTime/1000/60%60);
    var second = Math.floor(leftTime/1000%60);

    // var arr = [];
    // arr.push(day);
    // arr.push(hour);
    // arr.push(minute);
    // arr.push(second);

    // showDays.html(arr[0]);
    // showHours.html(arr[1]);
    // showMinutes.html(arr[2]);
    // showSeconds.html(arr[3]);
    showDays.html(day);
    showHours.html(hour);
    showMinutes.html(minute);
    showSeconds.html(second);
},1000);

// clearInterval(timer);