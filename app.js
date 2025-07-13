
// var username = prompt("Enter your username");
// var totalmarks = 300;

// var sub1 = +prompt("Enter your subject 1 marks");
// var sub2 = +prompt("Enter your subject 2 marks");
// var sub3 = +prompt("Enter your subject 3 marks");

// var obtmarks = sub1 + sub2 + sub3;
// var percentage = (obtmarks / totalmarks * 100);

// console.log("Hello" + " "+username +" "+ "You obtained marks are "+ obtmarks+" "+ "And your percentage is: "+ " " +percentage + "%");

/* Assignment 1: Welcome Message
Objective:
Use prompt() to ask for the user's name.
Use alert() to display:
"Welcome, [name]!"
Concepts used: prompt, alert, var, concatenation */

// Solution
// var username = prompt("enter your name");
// alert("Welcome, " +username);

/* Assignment 2: Age Message
Objective:
Ask the user for their name and age using prompt().
Log this message in the console:
"[name] is [age] years old."
Concepts used: prompt, console.log, var, concatenation */


// Solution
// var name = prompt("Enter your name");
// var age = +prompt("Enter your age");

// console.log(name+ " "+ "is" +" " +age + " "+ "years old!");


/* Assignment 3: Favorite Color
Objective:
Ask the user for their favorite color.
Show an alert like:
"Wow! [color] is a nice color!"
Concepts used: prompt, alert, var, concatenation */

// Solution
// var favcolor = prompt("Enter your fav color");
// alert("Wow!" +" "+favcolor+" "+"is a nice color!");


/* Assignment 4: Simple Math Sentence
Objective:
Ask the user for two numbers using prompt().
Show a sentence in the console like:

"The result of 4 + 5 is 9."
(You can just add the numbers directly — no need to convert types yet.)
Concepts used: prompt, console.log, var, concatenation */


// Solution
// var num1 = prompt("Enter any number") * 1;
// var num2 = prompt("Enter any second number") * 1;

// console.log("The result of "+num1+" + "+num2+" "+ "is"+" "+ (num1+num2));


/* Assignment 5: About Me Summary
Objective:
Ask the user for their name, hobby, and country using prompt().
Show an alert like:
"Hi, I'm [name] from [country], and I love [hobby]!"
Concepts used: prompt, alert, var, concatenation */

// Solution

// var name = prompt("Enter your name");
// var hobby = prompt("Enter your hobby");
// var country = prompt("Enter your country");

// alert("Hi, I'm " + name + " " + "from" + " " + country + ", and I love " + hobby + "!");

/* Task 1: Create a Full Address
Instruction:
Ask the user to enter their street, city, and country. Concatenate these values into one full
address string and display it like:
"Your full address is: 123 Main St, Springfield, USA" */

// Solution
// var street;
// var city;
// var country;
// street = prompt("enter your street");
// city = prompt("enter your city");
// country = prompt("enter your country");

// var fullAddress = "Your Full Address is: " + street + "," + " " + city + ", " + country;
// console.log(fullAddress); 

/* Task 2: Make a Custom Username
Instruction:
Ask the user to input their first name and a favorite number. Concatenate them to create a
simple username like:
"john42"
Display the result with a message: "Your new username is: john42" */

// Solution
// var firstName = prompt("Enter your first name");
// var favNumber = +prompt("Enter your favorite number");
// var username = firstName + favNumber;
// console.log("Your new username is: " + username);

// 2nd Short Method

// var username = prompt("Enter your First Name") + +prompt("Enter your Fav Number");
// console.log("Your new username is: " + username);

/* Task 3: Email Generator
Instruction:
Ask the user for their first name and last name. Combine them into an email address format
like:
"firstname.lastname@example.com"
Show the result. */

// Solution

// let Name = prompt("Enter your first name") + prompt("Enter your last name");
// let email = "@gmail.com";
// let emailAddress = Name + email;
// console.log("Your email address is: " + emailAddress);

/* Task 4: Combine Favorite Things
Instruction:
Ask the user for their favorite color, animal, and food. Create a sentence like:
"Your favorite things are: blue dogs and pizza!" */

// Solution

// var favColor = prompt("Enter your fav color");
// var favAnimal = prompt("Enter your fav animal");
// var favFood = prompt("Enter your fav food");

// var fullSentence = "Your favorite things are: " + favColor+ " "+ favAnimal + " " + "and" + " " + favFood + "!";
// console.log(fullSentence);


/* Task 5: Quote with Author

Instruction:
Ask the user for a quote and the author’s name. Display it in
"The only limit is your mind." - John Doe
*/

// Solution
// var quote = prompt("Enter your favorite quote");
// var author = prompt("Enter the author's name");
// var fullQuote = '"' + quote + '"' + " - " + author;
// console.log(fullQuote);





// let myName = document.createElement("a");
// myName.href = "https://www.google.com";
// myName.textContent = "Click here to visit Google";
// document.body.prepend(myName);
