// task#1
var inputTask1=prompt("Enter positive integer")
var inputTask1Rnd = Math.round(inputTask1);
var inputTask1floor = Math.floor(inputTask1);
var inputTask1ceil = Math.ceil(inputTask1);
document.write("Number "+ inputTask1 + "<br>" ) ;
document.write("Roundoff value "+ inputTask1Rnd + "<br>") ;
document.write("Flooroff value "+ inputTask1floor +"<br>" ) ;
document.write("Ceiloff value "+ inputTask1ceil + "<br>") ;



// task#2

var inputTask2=prompt("Enter floating point number")
var inputTask2Rnd = Math.round(inputTask2);
var inputTask2floor = Math.floor(inputTask2);
var inputTask2ceil = Math.ceil(inputTask2);
document.write("Number "+ inputTask2 + "<br>" ) ;
document.write("Roundoff value "+ inputTask2Rnd + "<br>") ;
document.write("Flooroff value "+ inputTask2floor +"<br>" ) ;
document.write("Ceiloff value "+ inputTask2ceil + "<br>") ;


// task#3
var inputTask3=prompt("Enter a number")
document.write("Absolute value of number is "+ Math.abs(inputTask3) + "<br>") ;


// task#4

var randomNumber = Math.random()*6;
var dice=Math.ceil(randomNumber);
document.write(  "Random dice value " + dice + "<br>") ;

// task#5

var randomcoin = Math.random()*2;
var coin=Math.ceil(randomcoin);

if( coin === 2){
document.write(  "Coin Value is " + coin + " Head "+ "<br>") ;
}
else{
    document.write(  "Coin Value is " + coin + " Tail "+ "<br>") ;   
}
// task#6
var randomNumberTas6 = Math.random()*100;
var randomNumberTask6 =Math.ceil(randomNumberTas6) ;
document.write(  "Random number is " + randomNumberTask6 +  "<br>") ;  
task#7
 var weight= prompt("write your weight in kilograms");
 var parseWeight=parseInt(weight);
 document.write("Your Weight is "+parseWeight +" Kilograms");

// task#8

var randomNumberTas8 = Math.random()*10;
var randomNumberTask8 =Math.ceil(randomNumberTas8) ;

var inputTask8= prompt("Write Input");

if(inputTask8 === randomNumberTask8){
    alert("Sir Congralution")
}
