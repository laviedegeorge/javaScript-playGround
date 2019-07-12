
const year = new Date().getFullYear();
const countDownTo = new Date(year, 6, 16);

 const cdDate = document.getElementById("cdDate");
 cdDate.innerHTML = countDownTo.getDate();

let countDown = setInterval(() => {
    /* audio24 = document.getElementById("player").play(); */
    
    const today = new Date().getTime();
    const diff = countDownTo.getTime() - today;
    
    let cdYear = Math.floor(diff/31622400000);
    let cdMonth = Math.floor(diff/2592000000);
    let cdDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    let cdHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let cdMins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let cdSecs = Math.floor((diff % (1000 * 60)) / 1000);
    
    let cdValue = [
        cdYear, cdMonth, cdDays, cdHours, cdMins, cdSecs
    ];

    let cdInput = document.querySelectorAll(".num");
    cdInput[0].firstChild.data = cdYear;
    cdInput[1].firstChild.data = cdMonth;
    cdInput[2].firstChild.data = cdDays;
    cdInput[3].firstChild.data = cdHours;
    cdInput[4].firstChild.data = cdMins;
    cdInput[5].firstChild.data = cdSecs;
    
}, 1000);