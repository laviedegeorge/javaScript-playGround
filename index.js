//..........................................................................................
// A PROGRAM
//CHECKS A WORD INPUTED IN THE THE TECT FIELD AND RETURNS HOW MANY
// TIMES IT APPEARS.
// in a text
//..................................................................................................

/* const cal = document.getElementById('check');
cal.addEventListener('click', calCheck);

function calCheck(){

    let answer = document.getElementById('answer');
    let input = document.getElementById('input').value;
    input = input.toLowerCase();
    let checkCont = document.getElementById('checkCont').value;
    checkCont = checkCont.toLowerCase();
    
    let checkContArray = checkCont.split(input);
    console.log(checkContArray);
    checkContArray.length-1;

    console.log(checkContArray.length-1);
    answer.value = checkContArray.length-1;


} */

//..............................................
// MY FIRST CONSTRUCTOR FUNCTION
//.............................................

/* class Car {
    constructor(maxSpeed, driver) {
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.dist = (speed, time) => {
            console.log(speed * time);
        };
        this.logDriver = () => {
            console.log(this.driver);
        };
    }
}

car1 = new Car(100, "George");
car2 = new Car(120, "John");
car3 = new Car(100, "James");

console.log(typeof(Car));
console.log(car1);
console.log(car1.maxSpeed);
car2.dist(100,10); */

//............................................
//CHANGING OF CLASS NAME WITH JS
//.....................................

/* function changeClass(prev, className){
    let tag = document.getElementById("firstP");
    tag.classList.replace(prev,className);
}
 */


 //.................................................
 // JS CLASS $ CONSTRUCTORS
 //....................................................

 /* class Car{
     constructor(name, model, colour, regNo, /* drive(speed,  dist) ){
         this.name = name;
         this.model = model;
         this.colour = colour;
         this.regNo = regNo;
         this.drive = (speed, dist) => {
             return speed*dist;
         }
     }
    }


myCar = new Car('Toyota', 'Carmy', 'black', '5543 aba'); */


 //.................................................
 // DELETING USER WITH CLASS AND CONSTRUCTORS
 //....................................................

 class User{
     constructor(name, email, id){
         this.name = name;
         this.email = email;
         this.id = id;
     }
 }

 class Admin extends User {
    deleteUser(user){
        users = users.filter(u =>{
           return u.email != user.email;
        })
        
    }
}


 let users = [
    userOne = new User("kelvin", "kelvin@yahoo.com", 001),
    userTwo = new User("sammy", "sammy@yahoo.com", 002),
    userTwo = new User("emma", "emma@yahoo.com", 003),
    userTwo = new User("dami", "dami@yahoo.com", 004),
    userTwo = new User("mani", "mani@yahoo.com", 005),
    userAdmin = new Admin("me", "me@yahoo.com", 000),
 ] 

 


 