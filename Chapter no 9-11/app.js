// // Task No 1

// var city = prompt("Enter your City Name : ");
// if (city == "karachi") {
//     alert("Welcome to city of lights");
// }
// else {
//     alert("Welcome to " + city);
// }

// // Task No 2

// var gender = prompt("Enter your gender : ");
// if (gender == "male") {
//     alert("Good Morning Sir");
// }
// else if (gender == "female") {
//     alert("Good Morning Ma'am.");
// }
// else {
//     alert("You didn't Enter your gender");
// }

// // Task No 3

// var color = prompt("Enter the Signal Color : ");
// if (color == "red") {
//     alert("Must Stop");
// }
// else if (color == "yellow") {
//     alert("Ready to move");
// }
// else if (color == "green") {
//     alert("Move now");
// }
// else {
//     alert("Enter a valid color");
// }

// // Task No 4

// var reminingFuel = +prompt("Enter remaining fuel in car (in litres) : ");
// var currentFuel = 0.25;
// if (reminingFuel < currentFuel) {
//     alert("Please refill the fuel in your car");
// }

// // Task No 5

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // Task No 6



// var eng = +prompt("Enter Marks you obtained in english : ");
// var urdu = +prompt("Enter Marks you obtained in urdu : ");
// var math = +prompt("Enter Marks you obtained in math : ");
// var total = 300;

// document.write("<h1>Marks Sheet</h1><br> Total marks : " + total + "<br> Marks obtained : " + obtained);

// var percentage = ((eng + urdu + math) / total) * 100;
// if (percentage <= 100 && percentage >= 80) {
//     document.write( "<br> Percentage : " + percentage + "% <br> Grade : A-0ne <br> Remarks : Excellent");

// }
// else if (percentage < 80 && percentage >= 70) {
//     document.write( "<br> Percentage : " + percentage + "% <br> Grade : A <br> Remarks : Good");

// }
// else if (percentage < 70 && percentage >= 60) {
//     document.write( "<br> Percentage : " + percentage + "% <br> Grade : B <br> Remarks : you need to improve");

// }
// else{
//     document.write( "<br> Percentage : " + percentage + "% <br> Grade : Fail <br> Remarks : Sorry");
// }

// // Task No 7


// var secretNumber = 2;
// var guessedNumber = +prompt("Guess a number ranging from 1 to 10 : ");
// if(guessedNumber === secretNumber){
//     alert("Bingo! Correct answer");
// }
// else if((guessedNumber+1) === secretNumber) {
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Better Luck Next time");
// }

// Task No 8

var numbers = +prompt("Enter a number to check it is divisible by 3 ");
if(numbers%3 == 0) {
    alert(numbers + " is divisible by 3");
}

// Task No 9

var num = +prompt("Enter a number to Check its even or odd : ");
if(num%2 == 0){
    alert(num + " is an even number");
}
else{
    alert(num + " is an odd number");
}


// Task No 10

var temp = +prompt("Enter temperature to check Weather : ");
if(temp>40){
    alert("It is too hot outside.");
}
else if(temp>30){
    alert("The Weather today is Normal.");
}
else if(temp>20){
    alert("Today’s Weather is cool.");
}
else if(temp>10){
    alert("OMG! Today’s weather is so Cool.");
}

// Task No 11


var num1 = +prompt("Enter first number");

var num2 = +prompt("Enter Second Value");
    
var operator = prompt("Enter operator you Want to perform action");



if(operator == "+"){
    document.write(" the addition of numbers is " + (num1 + num2));
}

else if(operator == "-"){
    document.write(" the subtraction of numbers is " + (num1 - num2));
}

else if(operator == "*"){
    document.write(" the multiplication of numbers is " + (num1 * num2));
}
else if(operator == "/"){
    document.write(" the division of numbers is " + (num1 / num2));
}
else if(operator == "%"){
    document.write(" the module of numbers is " + (num1 % num2));
}
else{
    document.write("Enter Valid operator");
}

