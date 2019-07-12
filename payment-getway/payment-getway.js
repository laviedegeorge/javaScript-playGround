//..............................................................
// SWITCHING TABS
//...........................................................

const navList = document.querySelector(".nav-list");
const tabsOption = document.querySelectorAll(".payment-view-opt");

navList.addEventListener("click", (event) => {
    const list = navList.querySelectorAll("li");

    list.forEach((c) => {
        if (event.target == c) {
            c.classList.add("active");
        } else {
           c.classList.remove("active") ;
        }
    })
    if (event.target.tagName == "LI") { 

        const targetDiv = document.querySelector(event.target.dataset.paymethod);
        tabsOption.forEach(tab => {
            if (tab == targetDiv) {
                tab.classList.add("active-div");
            } else {
                tab.classList.remove("active-div"); 
            }
        });

    } 
})



//..............................................................
// FUNTION FOR CARD NUMBER
//...........................................................

const cardNo = document.getElementById('cardNo');
cardNo.addEventListener('keydown', (event) => {
    if (isNaN(event) == false) {
       event.preventDefault(); 
    }
    if (cardNo.value.length == 4 || cardNo.value.length == 9 || cardNo.value.length == 14 || cardNo.value.length == 19) {
        cardNo.value += " ";
    }
})