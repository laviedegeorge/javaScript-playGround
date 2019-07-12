/* let btn = document.getElementById("readMore");
btn.addEventListener("click", () => {
    let showMore = document.getElementsByTagName("div")[1];
    showMore.style.height = "auto";
    btn.innerHTML = "Read Less";
}) */

/* let textCont = document.getElementsByTagName("p")[0]; */


let btn = document.getElementById("readMore");
btn.addEventListener("click", () => {
    let showMore = document.getElementsByTagName("div")[1];

   /*  if (showMore.style.height == "300px") {
        showMore.classList.add = "read-more";
        btn.innerHTML = "Read Less"; 
    } else {
        showMore.classList.remove = "read-more";
        btn.innerHTML = "Read More";   
    } */

    showMore.classList.toggle("read-more");
})
