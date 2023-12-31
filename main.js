let showingTimeLeft = true; //time left is set to true

function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  document.getElementById("minutes").innerHTML = `${hours}:${minutes}`; //current time
}

function timeLeft() {
  document.getElementById("minutes").innerHTML =
    '1 <span class="smaller">minuut</span>'; //time left ('1 minuut')
}

function switchTime() {
  if (showingTimeLeft === true) {
    showTime(); //shows current time
    showingTimeLeft = false; //sets showingTimeLeft to false
  } else {
    timeLeft(); //shows time left
    showingTimeLeft = true; //sets showingTimeLeft to true
  }
}
setInterval(switchTime, 5000); //switches between showtime & timeleft every 5 seconds

setInterval(() => {
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();

  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
