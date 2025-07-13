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



// var a = 2;
// var b = a;
// var c = b;
// console.log(a++ , b); 
// console.log(a++, b++); 
// console.log(a++, ++b); 
// console.log(++a, ++b);
// console.log(++a, b++);
// console.log(a++, ++b);
// console.log(a++, c++);

// console.log(a++ , b++, ++b , ++c, c++, a++, b++, c++ , a++, b++, c++);
              
            

// const name = "Ali";
// const age = 25;
// const city = "Karachi";
// console.log(`your name is ${name} and your age is ${age} and your are from ${city}`);





// 10 < 2 || 10 >= 10
// false || true


// 'cat' !== 'dog' && 5 > 3 || 12 / 4 === 3 && 9 < 4 || 8 === 8

// true && true || true && false || true
// true || false || true
//true

// console.log('cat' !== 'dog' && 5 > 3 || 12 / 4 === 3 && 9 < 4 || 8 === 8);
// true && true || true && false || true
// true || false || true
//true    


// console.log(15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6');
// false && true || false && false || false
// false || false || false
//false




// console.log(9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15);

//true && false || true && true || true
//false || true || true
//true


// 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12
// false && true || fasle && false || true
// false || false || true
// true

// 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'
// true && true || false && true || false
// true || false || false
// true

// 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12
// true && true || true && true || false
// true || true || false
// true

// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'
//true && true || true && true || true
// true || true || true
// true


// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100
// true && true || true && false || false
// true || false || false
// true

// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'
// false || true && false || true && true
// false || false || true
// true

// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5
// false || true && true || true && true
// false || true || true
// true


// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8
//false || false && true || false && true
// false || false || false
// false

// 'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'
//true && true || false || false
// true || false || false
// true

// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5
//true && true || true && true || true
// true || true || true
// true

// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'
// false || true || false || true
// true
// 

// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'
// false || true && true || false && true
// false || true || false
// true

// false && 5 > 10 || 7 === '7' && 4 * 5 === 20 || true && false
// false || false && true || false
// false || false || false
// false

// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3
// true || true && true || false
// true || true || false
// true

// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'
// true && true || false || true || false
// true || false || true || false
// true

// 'apple' === 'apple' && 3 + 4 === 7 || 6 * 2 !== 12 && 10 - 5 === 5 || 'Java' !== 'java'
// true || false || true
// true



// 15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10
// false && true || false && true || true
// false || false || true
// true


// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5
// true || true || true
// true

// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'
// true || true || true
// true

// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4
// true || true || true 
// true

// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4
// true || false || false 
// true

// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'
// false || true || false 
// true

// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'
// true || true || false
// true

// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'
// true || true  || true
// true

// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4
// true || true || true 
// true

// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'
// true || false || false 
// true

// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'
// true || false || true 
// true

// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6
// true || false || true
// true

// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12
// true || true || true 
// true

// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16
// true || true || true 
// true

// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'
// true || true || false 
// true

// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16
// true || false || true
// true

// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5
// true || true || true
// true

// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'
// true || true || true
// true

// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'
//  false || true || true
// true

// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO'
// true || false || true
// true

