function showTime() {
    let today = new Date;
    let currentTime = today.toLocaleTimeString('ru-RU')
    let currentSec = today.getSeconds()
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('bigTime').innerHTML = currentSec;
}
setInterval(showTime, 1000)