let days = document.getElementById('days');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hour_dot = document.querySelector('.hour_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let endDate = '01/01/2024 00:00:00';
// mm/dd/yyyy hh:mm:ss

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    // kalkulace dní, hodin, minut, sekund

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    // Output
    days.innerHTML = d + '<br><span>days</span>';
    hours.innerHTML = h + '<br><span>hours</span>';
    mins.innerHTML = m + '<br><span>mins</span>';
    secs.innerHTML = s + '<br><span>secs</span>';

    // Animation
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    // Animace teček
    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`; // 360 deg / 365 days = 0.986
    hour_dot.style.transform = `rotateZ(${h * 15}deg)`; // 360 / 24 = 15
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;   // 360 / 60 = 6
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;   // 360 / 60 = 6

    if(distance < 0){
        clearInterval(x);
        document.getElementById('time').style.display = 'none';
        document.querySelector('.newYear').style.display = 'block';
    }
})