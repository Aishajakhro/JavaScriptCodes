// Task No 1


// Task No 2

// Task No 3

for(var i = 1 ; i <= 10 ; i++){
    document.write(i + "<br>");
}

// Task No 4

var num = +prompt("Enter a number to show its multiplication table ");
var length = +prompt("Enter length multiplication table");

document.write("<br> Multiplication table of " + num + "<br> Length " + length + "<br><br>");

for( var i = 1 ; i <= length ; i++){
    document.write(num + " x " + i + " = " + (i*num) + "<br>");
}

// Task No 5

var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];
for(var i = 0 ; i< fruits.length ; i++){
    document.write("<br>" + fruits[i]);
}
for(var i = 0 ; i< fruits.length ; i++){
    document.write("<br>" + "Element at index " + i + " is " +  fruits[i]);
}

// Task No 6

document.write("<br><h4>Counting</h4>");
for(var i =1 ; i<=15 ; i++){
    document.write(i + " , ");
}
document.write("<br><h4>Reverse counting</h4>");
for(var j = 10 ; j >=1 ; j--){
    document.write(j + " , ");

}
document.write("<br><h4>Even</h4>");
for(var k = 0 ; k <=20 ; k++){
    if(k%2 == 0){
        document.write(k + " , ");
    }
}
document.write("<br><h4>Odd</h4>");
for(var l = 0 ; l <=20 ; l++){
    if(l%2 != 0){
        document.write(l + " , ");
    }
}
document.write("<br><h4>Series</h4>");
for(var k = 1 ; k <=20 ; k++){
    if(k%2 == 0){
        document.write(k + "k , ");
    }
}

// Task No 7
