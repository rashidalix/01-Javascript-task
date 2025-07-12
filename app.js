




// var username = prompt("Enter your username");
// var totalmarks = 300;

// var sub1 = +prompt("Enter your subject 1 marks");
// var sub2 = +prompt("Enter your subject 2 marks");
// var sub3 = +prompt("Enter your subject 3 marks");

// var obtmarks = sub1 + sub2 + sub3;
// var percentage = (obtmarks / totalmarks * 100);

// console.log("Hello" + " "+username +" "+ "You obtained marks are "+ obtmarks+" "+ "And your percentage is: "+ " " +percentage + "%");


// var username = prompt("enter your name");
// alert("Welcome, " +username);


// var name = prompt("Enter your name");
// var age = +prompt("Enter your age");

// console.log(name+ " "+ "is" +" " +age + " "+ "years old!");


// var favcolor = prompt("Enter your fav color");
// alert("Wow!" +" "+favcolor+" "+"is a nice color!");


// var num1 = +prompt("Enter first integer");
// var num2 = +prompt("Enter second integer");
// console.log("The result of"+" "+num1+ "+" +num2+" " "is"+" "+(num1+num2));


// var num1 = prompt("Enter any number") * 1;
// var num2 = prompt("Enter any second number") * 1;

// console.log("The result of "+num1+" + "+num2+" "+ "is"+" "+ (num1+num2));




/* Task 1: Create a Full Address
Instruction:
Ask the user to enter their street, city, and country. Concatenate these values into one full
address string and display it like:
"Your full address is: 123 Main St, Springfield, USA" */

/* var street;
var city;
var country;
street = prompt("enter your street");
city = prompt("enter your city");
country = prompt("enter your country");

var fullAddress = "Your Full Address is: " + street + "," + " " + city + ", " + country;
console.log(fullAddress); */

/* Task 2: Make a Custom Username
Instruction:
Ask the user to input their first name and a favorite number. Concatenate them to create a
simple username like:
"john42"
Display the result with a message: "Your new username is: john42" */

// var firstName = prompt("Enter your first name");
// var favNumber = +prompt("Enter your favorite number");
// var username = firstName + favNumber;
// console.log("Your new username is: " + username);

// 2nd Short Method

var username = prompt("Enter your First Name") + +prompt("Enter your Fav Number");
console.log("Your new username is: " + username);

// let myName = document.createElement("a");
// myName.href = "https://www.google.com";
// myName.textContent = "Click here to visit Google";
// document.body.prepend(myName);