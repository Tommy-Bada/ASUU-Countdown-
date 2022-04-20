// ASUU strike call off date
let countDownDate = new Date("May 16, 2022 00:00:00").getTime();

let everySecond = setInterval(function(){
    
    // Present date
    let now = new Date().getTime();

    // Gap between Present date and call off date (in miliseconds)
    let distance = countDownDate - now;

    // Measurement for each second, minute, hour and day
    let $1second = 1000;
    let $1minute = 1000 * 60;
    let $1hour = 1000 * 60 * 60;
    let $1day = 1000 * 60 * 60 * 24;

    // Time calculations for remaining days, hours, minutes, seconds
    let daysRemaining = Math.floor(distance / $1day);
    let hoursRemaining = Math.floor((distance % $1day) / $1hour );
    let minutesRemaining = Math.floor((distance % $1hour) / $1minute);
    let secondsRemaining = Math.floor((distance % $1minute) / $1second)
    console.log(daysRemaining);

    // Display on the Web
    document.getElementById("days").innerHTML = daysRemaining;
    document.getElementById("hours").innerHTML = hoursRemaining;
    document.getElementById("minutes").innerHTML = minutesRemaining;
    document.getElementById("seconds").innerHTML = secondsRemaining;

    if (distance < 0){
        clearInterval(everySecond);
        document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;

    }
}, 1000);
