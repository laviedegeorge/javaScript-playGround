const bookHolder = document.querySelector("#contHolder");

/* ........................................................
SEARCH
..........................................................*/
const search = document.querySelector("#search");
search.addEventListener('keyup', (event) => {
    const searchVal = event.target.value.toLowerCase();
    const bks = bookHolder.querySelectorAll(".content");

    bks.forEach((b) => {
        const bookName = b.firstChildElement.textContent;

        if (bookName.toLowerCase().indexOf(searchVal) != -1) {
            bks.display = "flex";
        } else {
            bks.display = "none";
        }
    })
})

/* .....................................................
DELETE BOOK
....................................................... */
bookHolder.addEventListener("click", (event) => {
    if (event.target.className == "delete") {

        /* event.target.classList.add("clickBtn");
        setTimeout(() => {
        event.target.classList.add("clickBtn"); 
        }, 200); */

        const book = event.target.parentElement;
        bookHolder.removeChild(book);
    }
})

/* .....................................................
ADD BOOK
....................................................... */
const addBook = document.querySelector("#addBtn");

addBook.addEventListener("click", (event) => {

    addBook.classList.add("clickBtn");
    setTimeout(() => {
        addBook.classList.remove("clickBtn"); 
    }, 200);

    let bookTitle = document.querySelector("#addInput").value;
    let author = document.querySelector("#author").value;

    if (bookTitle == "" && author == "") {
        event.preventDefault();
        const warning = document.getElementById("warning");
        warning.innerHTML = "Please fill in at least one(1) input field before sumbitting"; 
    }else{
    const content = document.createElement("div");
    content.classList.add("content");

    const bookName = document.createElement("p");
    bookName.innerHTML = bookTitle;

    const brk = document.createElement("br");
    
    const by = document.createElement("span");
    by.classList.add("by");
    by.innerHTML = "By: " + author;

    const btn = document.createElement("button");
    btn.classList.add("delete");
    btn.innerHTML = "delete";

    bookName.appendChild(brk);
    bookName.appendChild(by);
    content.appendChild(bookName);
    content.appendChild(btn)

    bookHolder.appendChild(content);

    /* bookTitle = "";
    author = ""; */
    /* clearContent(bookTitle, author); */
    }
})

/* function clearContent(a,b){
   a = "";
   b = "";
} */

/* ..........................................................
SWITCHING TABS
............................................................ */

const ul = document.querySelector("#tabs");
const tabs = document.querySelectorAll(".main .content-holder");

ul.addEventListener('click', (event) => {
    const li = ul.querySelectorAll("li");
    li.forEach((c) =>{
        if (event.target == c) {
            c.classList.add("activeli");
        } else {
            c.classList.remove("activeli");
        }
    })
     event.target.classList.add("activeli");
    if (event.target.tagName == "LI") {
        const currentLi =document.querySelector(event.target.dataset.target);
        tabs.forEach((tab) => {
            if (tab == currentLi) {
                tab.classList.add("active-tab");
            } else {
               tab.classList.remove("active-tab"); 
            }
        })
    }
})