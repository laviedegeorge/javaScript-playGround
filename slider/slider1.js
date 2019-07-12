
let color = "#000000";
let pointer = document.getElementsByClassName("pointer");

let slide = document.getElementById("slide");
let counter = 0; 
let bgChange = ['url(/slider/images/img1.png)',
                'url(/slider/images/img2.png)',
                'url(/slider/images/img3.png)',
                'url(/slider/images/img4.png)',
                'url(/slider/images/img5.png)',
                'url(/slider/images/img6.png)'
];



let slider = setInterval(() => {

    if (counter >= bgChange.length) {
        counter = 0;
    } 

    slide.style.backgroundImage = bgChange[counter];

    if (pointer[counter] == counter) {
        pointer[counter].style.backgroundColor = "#000000" ; 
    }else{
        pointer[counter].style.backgroundColor = "#ffffff" ;
    }
    /* Array.from(pointer).forEach(() => {
        if (counter == pointer[counter]) {
            pointer[counter].style.backgroundColor = "#ffffff" ; 
        }
    }); */
    counter++;
    
}, 3000);
 