// Task No 1

var ch = prompt("Enter a number , uppercase letter or lower case : ");
if(ch == "a" || ch == "b" || ch == "c" || ch == "d" || ch == "e" ||ch == "f" ||ch == "g" ||ch == "h" ||ch == "i" ||ch == "j" ||ch == "k" ||ch == "l" ||ch == "m" ||ch == "n" ||ch == "o" ||ch == "p" ||ch == "q" ||ch == "r" ||ch == "s" ||ch == "t" ||ch == "u" || ch == "v" ||ch == "w" ||ch == "x" ||ch == "y" ||ch == "z"){
    alert("Character enter is a lower case letter");
}
else if(ch == "A" || ch == "B" || ch == "C" || ch == "D" || ch == "E" ||ch == "F" ||ch == "G" ||ch == "H" ||ch == "I" ||ch == "J" ||ch == "K" ||ch == "L" ||ch == "M" ||ch == "N" ||ch == "O" ||ch == "P" ||ch == "Q" ||ch == "R" ||ch == "S" ||ch == "T" ||ch == "U" || ch == "V" ||ch == "W" ||ch == "X" ||ch == "Y" ||ch == "Z"){
    alert("Character enter is an Upper case letter");
}
else{
    alert("Character enter is a number");
}

// Task No 2

var int1 = +prompt("Enter first integer to compare : ");
var int2 = +prompt("Enter second integer to compare : ");
if(int1 == int2){
    alert("Both integers are equal.");
}
else if(int1>int2){
    alert("First integer is greater than Second integer.");
}
else{
    alert("Second integer is greater than first integer.");
}

// Task NO 3

var num = +prompt("Enter a number to Check it is positive negative or zero : ");

//incomplete


// Task No 4

var char = prompt("Enter a character to check it is vowel : ");
if(ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U"){
    alert("True")
}
else{
    alert("False");
}

// Task No 5

var password = 1122;
var check = +prompt("Please enter your password");
if(password == check){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// Task No 7

var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day";
    alert(greeting);
}
else{
    greeting = "Good evening";
    alert(greeting);
}  


// Task No 8

var time = +prompt("Enter time in 24 hours format : ");
if(time >= 00 && time < 12 ){
    alert("Good morning!");
}
else if(time >= 12 && time <17){
    alert("Good afternoon!");
}
else if(time >= 17 && time < 21){
    alert("Good evening!");
}
else if(time >= 21 && time <= 24){
    alert("Good night!");
}
else{
    alert("Enter a valid time!");
}
