var timeElement = document.getElementById('time');

function updateTime() {
    var date = new Date(Date.now());
    timeElement.innerHTML = `${date.toLocaleTimeString()}`;
    // timeElement.innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    setTimeout(updateTime, 1000);
}

updateTime();


function changeBodyBg(color){
    document.body.style.background = color;
}