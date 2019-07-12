let btn = document.getElementById("btn");
btn.addEventListener("click", 
    reveal = () => {
        let revealDiv = document.getElementById("revealDiv");
        revealDiv.classList.toggle('reveal');
        }
);