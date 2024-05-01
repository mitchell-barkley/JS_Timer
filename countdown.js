var charlotte = new Date("May 29, 2024 6:30:00").getTime();

var a = setInterval(function() {
    var now = new Date().getTime();
    var distance = charlotte - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var t1 = "timer1";
    document.getElementById(t1).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

var amanda = new Date("April 1, 2025 6:30:00").getTime();

var b = setInterval(function() {
    var now2 = new Date().getTime();
    var distance2 = amanda - now2;
    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    var t2 = "timer2";
    document.getElementById(t2).innerHTML = days2 + "d " + hours2 + "h " + minutes2 + "m " + seconds2 + "s ";
}, 1000);

var mitchell = new Date("October 8, 2024").getTime();

var c = setInterval(function() {
    var now3 = new Date().getTime();
    var distance3 = mitchell - now3;
    var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
    var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    var t3 = "timer3";
    document.getElementById(t3).innerHTML = days3 + "d " + hours3 + "h " + minutes3 + "m " + seconds3 + "s ";
}, 1000);

var christmas = new Date("December 25, 2024 6:30:00").getTime();

var d = setInterval(function() {
    var now4 = new Date().getTime();
    var distance4 = christmas - now4;
    var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
    var t4 = "timer4";
    document.getElementById(t4).innerHTML = days4 + "d " + hours4 + "h " + minutes4 + "m " + seconds4 + "s ";
}, 1000);

var newYears = new Date("January 1, 2025 6:30:00").getTime();

var e = setInterval(function() {
    var now5 = new Date().getTime();
    var distance5 = newYears - now5;
    var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
    var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);
    var t5 = "timer5";
    document.getElementById(t5).innerHTML = days5 + "d " + hours5 + "h " + minutes5 + "m " + seconds5 + "s ";
}, 1000);

var canadaDay = new Date("July 1, 2024 6:30:00").getTime();

var f = setInterval(function() {
    var now6 = new Date().getTime();
    var distance6 = canadaDay - now6;
    var days6 = Math.floor(distance6 / (1000 * 60 * 60 * 24));
    var hours6 = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds6 = Math.floor((distance6 % (1000 * 60)) / 1000);
    var t6 = "timer6";
    document.getElementById(t6).innerHTML = days6 + "d " + hours6 + "h " + minutes6 + "m " + seconds6 + "s ";
}, 1000);

var halloween = new Date("October 31, 2024 6:30:00").getTime();

var g = setInterval(function() {
    var now7 = new Date().getTime();
    var distance7 = halloween - now7;
    var days7 = Math.floor(distance7 / (1000 * 60 * 60 * 24));
    var hours7 = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes7 = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds7 = Math.floor((distance7 % (1000 * 60)) / 1000);
    var t7 = "timer7";
    document.getElementById(t7).innerHTML = days7 + "d " + hours7 + "h " + minutes7 + "m " + seconds7 + "s ";
}, 1000);

var thanksgiving = new Date("October 14, 2024 6:30:00").getTime();

var h = setInterval(function() {
    var now8 = new Date().getTime();
    var distance8 = thanksgiving - now8;
    var days8 = Math.floor(distance8 / (1000 * 60 * 60 * 24));
    var hours8 = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes8 = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds8 = Math.floor((distance8 % (1000 * 60)) / 1000);
    var t8 = "timer8";
    document.getElementById(t8).innerHTML = days8 + "d " + hours8 + "h " + minutes8 + "m " + seconds8 + "s ";
}, 1000);