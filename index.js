var timeElement = document.getElementById('time');

function updateTime() {
    var date = new Date(Date.now());
    timeElement.innerHTML = `${date.toLocaleTimeString()}`;
    // timeElement.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    setTimeout(updateTime, 1000);
}

updateTime();

var t = new Date().getHours();
// var t =24
if (t <= 4) {
 
    document.body.style.background="linear-gradient(0deg, rgba(208,208,208,1) 0%, rgba(131,129,149,1) 60%, rgba(72,78,103,1) 100%)";

} else if (t<=7 && t>=5) {

    document.body.style.background="linear-gradient(0deg, rgba(230,228,228,1) 0%, rgba(180,182,143,1) 61%, rgba(151,156,78,1) 100%)";

} else if (t<=12 && t>=8) {
 
document.body.style.background= "linear-gradient(0deg, rgba(230,228,228,1) 0%, rgba(255,223,162,1) 61%, rgba(255,169,0,1) 100%)";

} else if (t<=16 && t>=13) {

    document.body.style.background= "linear-gradient(0deg, rgba(230,228,228,1) 0%, rgba(168,198,212,1) 60%, rgba(106,168,196,1) 100%)";
       
    
} else if (t<=19 && t>=17) {

    document.body.style.background="linear-gradient(0deg, rgba(205,204,204,1) 0%, rgba(161,96,76,1) 100%)";

} else if (t<=22 && t>=20) {

    document.body.style.background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(149,148,129,1) 49%, rgba(115,136,107,1) 100%)";


} else if (t<=24 && t>=23) {
    // alert('hit')
    document.body.style.background="linear-gradient(0deg, rgba(205,204,204,1) 0%, rgba(159,156,185,1) 60%, rgba(95,91,135,1) 100%)";
}

var cursorElement = document.getElementById('cursor');

document.addEventListener('mousemove', updateMousePosition);

function updateMousePosition(event) {
    console.log(event);
    cursorElement.style.top = `${event.pageY}px`;
    cursorElement.style.left = `${event.pageX}px`;
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}