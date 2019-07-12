
let logInDiv = document.getElementById('login');
let logIn = document.getElementById('login-btn');
logIn.addEventListener("click", openSignIn);

let signUpDiv = document.getElementById('sign-up');
let signUp = document.getElementById('signup-btn');
signUp.addEventListener("click", openSignUp);

let animateDiv1 = document.getElementById('ani-div1');
let arrow1 = document.getElementById('arrow1');

let arrow2 = document.getElementById('arrow2');
let animateDiv2 = document.getElementById('ani-div2');

function openSignIn(){
    animateDiv1.classList.add('animate-btn');
    arrow1.classList.add('animate-arrow');

    setTimeout(() => {
        arrow1.classList.add('hide');

        setTimeout(() => {
            arrow1.classList.remove('hide');
        }, 1000);
    }, 400);

    

    setTimeout(() => {
        logInDiv.classList.add ('open');
        signUpDiv.classList.remove ('close');
        animateDiv1.classList.remove('animate-btn');
        arrow1.classList.remove('animate-arrow');
    }, 700);   
}


    
function openSignUp(){
    animateDiv2.classList.add('animate-btn');
    arrow2.classList.add('animate-arrow');
    
    setTimeout(() => {
        arrow2.classList.add('hide');

        setTimeout(() => {
            arrow2.classList.remove('hide');
        }, 1000);
    }, 400);

    

    setTimeout(() => {
        signUpDiv.classList.add ('close');
        logInDiv.classList.remove ('open');
        
        animateDiv2.classList.remove('animate-btn');
        arrow2.classList.remove('animate-arrow');
        
    }, 800); 
     
}

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', btnClick);
function btnClick(){
    btn1.classList.add('clickBtn');

    setTimeout(() => {
        btn1.classList.remove('clickBtn'); 
    }, 200);
}

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', btnClick2);
function btnClick2(){
    btn2.classList.add('clickBtn');

    setTimeout(() => {
        btn2.classList.remove('clickBtn'); 
    }, 200);
}

// get the buttons in the overlay
// add a click event when that
// closes the overlay with button within
// add the `open` class to the overlay when user click
// on the button
// remove the `open` class from the other 
// overlay 

/* function logInUp(ip){
    let y = document.getElementById(${ip});
    x.classList.add('open');
} */
