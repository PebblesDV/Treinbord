let showingTimeLeft = true; //time left is set to true

function showTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

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
