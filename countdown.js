let timer = 60;
let min = 0;
let sec = 0;
function startTimer() {
    min = parseInt(timer/60);
    sec = parseInt(timer%60);
    if(timer < 1) {
        window.location = "timeover.html";
    }
    document.getElementById("time").innerHTML = "<b>Time Left: </b>" + min.toString() + ":" + sec.toString();
    timer--;
    setTimeout(function() {
        startTimer();
    }, 1000);
}