const cal = document.getElementById('check');
cal.addEventListener('click', calCheck);

// function calCheck(){

//     let answer = document.getElementById('answer');
//     let input = document.getElementById('input').value;
//     input = input.toLowerCase();
//     let checkCont = document.getElementById('checkCont').value;
//     checkCont = checkCont.toLowerCase();
    
//     let checkContArray = checkCont.split(input);
//     console.log(checkContArray);
//     checkContArray = checkContArray.length-1;

//     console.log(checkContArray);
//     answer.value ='The number of times ' + input + ' appeared in the content is ' + checkContArray;
// }

function calCheck() {
    // btn animation
    cal.classList.add('clickBtn');
    setTimeout(() => {
        cal.classList.remove('clickBtn'); 
    }, 200);

    let answer = document.getElementById('answer');

    //get the value from input
    let content = getContent()
    let word = getWord()
    //get the word it checking for

    //find the number of times  a word repeats
    answer.value = addPlaceholder(
        word, 
        findRedundantWord(content, word)
    )
}

const addPlaceholder = (word, times) => {
    return 'The number of times ' + word + 
    ' appeared in the content is ' + times
}

const getElement = (s) => document.getElementById(s)

const getWord = () => {
    let input = getElement('input')
    return input.value.toLowerCase()
}

const getContent = () => {
    checkCont = getElement('checkCont')

    return checkCont.value.toLowerCase();    
}

function findRedundantWord(content, word) {
    return (content.split(word).length) - 1;
}

//..................................................
// for Modal 
//.................................................


// get the modal div and modal content
let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");

// get the close button in the modal
let close = document.getElementById("closeBtn")
close.addEventListener("click", () => modal.style.display = "none")

//function the activates thw click to hide the modal
window.onload = function showModal(){
    modal.style.display = "flex";

    setTimeout(() => {
        modalContent.style.display = "block";
    }, 500);
} 

// click anywhere to close 
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

