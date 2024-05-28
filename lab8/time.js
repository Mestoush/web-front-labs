function showTime() {
    let today = new Date;
    let currentTime = today.toLocaleTimeString('ru-RU')
    let currentSec = today.getSeconds()
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('bigTime').innerHTML = currentSec;
    let degrees = (currentSec / 60) * 360;
    let secondHand = document.getElementById('secondHand');
    secondHand.style.transform = `rotate(${degrees}deg)`;
}
setInterval(showTime, 1000)