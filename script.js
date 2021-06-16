const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');
const timeText = document.querySelector('.current-time');

const getTime = function () {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const changeDigits = function (num) {
    if (num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const curTime = [hour, min, sec];
  const [newHour, newMin, newSec] = curTime.map((num) => changeDigits(num));
  timeText.innerHTML = `${newHour}:${newMin}:${newSec}`;

  const hourDegree = hour * (360 / 12);
  const minDegree = min * (360 / 60);
  const secDegree = sec * (360 / 60);

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  secHand.style.transform = `rotate(${secDegree}deg)`;
};

setInterval(getTime, 1000);
window.addEventListener('DOMContentLoaded', getTime);
