// Task No 1

var a = 3;
var b = 5;
var c = a+b;
document.write("Sum of " + a + " and " + b +" is " + c + "<br>")

// Task No 2


var a = 3;
var b = 5;
var c = a-b;
document.write("Sub of " + a + " and " + b +" is " + c + "<br>")


var a = 3;
var b = 5;
var c = a*b;
document.write("Multiply of " + a + " and " + b +" is " + c + "<br>")


var a = 3;
var b = 5;
var c = a/b;
document.write("Divide of " + a + " and " + b +" is " + c + " <br>")


var a = 3;
var b = 5;
var c = a%b;
document.write("Module of " + a + " and " + b +" is " + c + "<br>")


// Task No 3 

var a;
 document.write("Value after variable declaration is: ??. <br>");
 a = 5;
 document.write("Initial Value : " + a + "<br>");
 a = ++a ;
 document.write("Value after increament is : " + a + "<br>");
 a += 7 ;
 document.write("Variable value after addition is : " + a + "<br>");
 a = --a;
 document.write("Value after decreament is : " + a + "<br>");
 a = a%3;
 document.write("The reminder is : " + a + "<br>");

 // Task No 4

 var ticketCost = 600;
 document.write("Total cost to buy 5 tickets to a movie is " + (ticketCost*5) + "PKR <br>");

 // Task No 5
 var table = 4;
 for(var i =1 ; i <= 10 ; i++){
     document.write(table + " x " + i + " = " + (i*table) + "<br>");
 }

 // Task No 6

 var temp1 = 25;
 var temp2 = 70;

 c = (temp2 - 32) * 5/9;
 f = (temp1 *9/5) + 32;

 document.write(temp1 + "<sup>0</sup>C is " + f + "<sup>0</sup>F <br>");

 document.write(temp2 + "<sup>0</sup>F is " + c + "<sup>0</sup>C <br>");



// Task No 7 

var item1 = 650;
var item2 = 100;
var charges = 100;
var quantity1 = 3;
var quantity2 = 7;

var totalCost = (650*3) + (100*7) + 100;

document.write("<h1>Shopping Cart</h1> <br> Price of item 1 is " + item1 + "<br> Quantity of item 1 is "+ quantity1 + "<br> Price of item 2 is " + item2 + "<br> Quantity of item 2 is " + quantity2 + "<br> Shipping Charges " + charges + "<br> Total cost of your order is " + totalCost + "<br>");

// Task N0 8

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks/totalMarks) * 100 ;

document.write("<h1>Marks Sheet</h1><br> Total marks : " + totalMarks + "<br> Marks obtained : " + obtainedMarks + "<br> Percentage : " + percentage + "<br>");

// Task no 9

var dollars = 10;
var riyal = 25;

var rupees = (dollars*104.80) + (riyal*28);

document.write("<h1>Currency in PKR</h1><br> Total Currency in PKR : " + rupees);

// Task No 10

var a = 5;

var b = ((a+5)*10)/2;

document.write("<br> Result is : " + b);

// Task no 11

var currentYear = 2020;
var birthYear = 2000;
var age = currentYear - birthYear;

document.write("<br><h1>Age Calculator</h1><br>Current Year : " + currentYear + "<br>Birth Year : " + birthYear + "<br> Your age is : " + age);

// Task No 12

var radius = 20;
var circumference = 2 * 3.142 * radius ;
var area = 3.142 * (radius*radius);

document.write("<br><h1>The geometrizer</h1><br> Radius of a circle: " + radius + "<br>The circumference is : " + circumference + "<br>The area is : " + area +"<br>");

// Task No 13

var snack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var amountPerDay = 3;
var need = (maxAge - currentAge) * 3;

document.write("<br><h1>The Lifetime Supply calculator</h1><br> Favourite Snack : " + snack + "<br>Current age : " + currentAge + "<br>Estimated Maximum Age : " + maxAge + "<br> Amount of snacks per day : " + amountPerDay + "<br>You will need " + need + " chocolate chip to last you until the ripe old age of " + maxAge);

