// Task No 1

var a = 10;

document.write("Result : <br> The value of a is : " +a +"<hr>");

document.write("<br>The value of ++a is : " + ++a +"<br>Now the value of a is :" +a + "<br>");

document.write("<br>The value of a++ is : " + a++ + "<br>Now the value of a is : " + a + "<br>");

document.write("<br>The value of --a is : " + --a +"<br>Now the value of a is :" +a + "<br>");

document.write("<br>The value of a-- is : " + a-- + "<br>Now the value of a is : " + a + "<br>");

// Task No 2

var a = 2;
var b = 1;
document.write("<br><br> a is : " + a + "<br>b is : " + b );
var result = --a - --b + ++b + b-- ;
// --a = 1
// --a - --b = 1
// --a - --b + ++b = 2
// --a - --b + ++b + b-- = 3
document.write("<br>result is : " + result + "<br>");

// Task No 3

var name = prompt("Enter Your Name");
alert("Welcome To Our Web page");

// Task No 4 
//is empty Or no question

// Task No 5

var number = +prompt("Enter a number to display its Table");

for(var i =1 ; i <=10 ; i++){
     document.write("<br>" + number + " x " + i + " = " + (number*i));
}


// Task No 6

var eng = +prompt("Enter Marks you obtained in english : ");
var urdu = +prompt("Enter Marks you obtained in urdu : ");
var math = +prompt("Enter Marks you obtained in math : ");
var subTotal = 100;
var total = 300;
var engPer = (eng/subTotal) * 100 ;
var urduPer = (urdu/subTotal) * 100 ;
var mathPer = (math/subTotal) * 100 ;
var totalobtained = eng + urdu + math;
var totalPer = (totalobtained/total) * 100;

document.write(" <table><tr><td>Subject &nbsp;</td><td>Total Marks &nbsp;</td><td>Obtained Marks &nbsp;</td><td>Percentage &nbsp;</td></tr><tr><td>English</td><td>" + subTotal + "</td><td> " + eng + "</td><td>" + engPer + "%</td></tr><tr><td>Math</td><td>" + subTotal + "</td><td>" + math + "</td><td> " + mathPer + "%</td></tr><tr><td>Urdu</td><td>" + subTotal + "</td><td>" + urdu + "</td><td>" + urduPer + "%</td></tr><tr><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + total +"</td><td>" + totalobtained + "</td><td>" + totalPer + "%</td></tr></table>");


