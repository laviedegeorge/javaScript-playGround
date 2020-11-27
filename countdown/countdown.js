const year = new Date().getFullYear();
const countDownTo = new Date(year, 11, 26);

const cdDate = document.getElementById("cdDate");
cdDate.innerHTML =
  countDownTo.getDate() + "/" + countDownTo.getMonth() + "/" + year;

let countDown = setInterval(() => {
  /* audio24 = document.getElementById("player").play(); */

  const today = new Date().getTime();
  const diff = countDownTo.getTime() - today;
  const a_second = 1000;
  const a_minute = a_second * 60;
  const an_hour = a_minute * 60;
  const hours_24 = an_hour * 24;
  const a_year = 31622400000;

  let cdYear = Math.floor(diff / a_year);
  let cdMonth = Math.floor(diff / 2592000000);
  let cdDays = Math.floor(diff / hours_24);
  let cdHours = Math.floor((diff % hours_24) / an_hour);
  let cdMins = Math.floor((diff % an_hour) / a_minute);
  let cdSecs = Math.floor((diff % a_minute) / a_second);

  let cdValues = [
    cdYear, // 0
    cdMonth, // 1
    cdDays, // 2
    cdHours, // 3
    cdMins, // 4
    cdSecs, //5
  ];

  let cdInput = document.querySelectorAll(".num");
  for (let key in cdValues) {
    cdInput[key].firstChild.data = cdValues[key];
  }
}, 1000);
