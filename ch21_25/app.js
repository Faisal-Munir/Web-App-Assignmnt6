
// Task#1

 var firstname=prompt("Enter your First Name")
 var secondname=prompt("Enter your Second Name")

 var fullname=firstname+secondname;

alert("Welcome "+ fullname);


// Task#2

var mobile_model=prompt("Enter your Favourite Mobile")
var mobile_length=mobile_model.length;
document.write("Your Favourite "+ mobile_model + " has string length :" + mobile_length )

// Task#3
var str="Pakistani"

var num = str.indexOf('n');
document.write("The String is "+ str + "<br>")
document.write("The index of 'n' is "+ num);


// Task#4

 var str1 = "Hello World";
 var segIndex = str1.lastIndexOf("l");

 document.write("String Is " + str1 +"<br>");
 document.write("The index of 'l' is "+ segIndex);


// Task#5

var str2="Pakistani";
var Char1 = str2.charAt(3);
  document.write("String Is " + str2 +"<br>");
  document.write("The index 3 has character: "+ Char1);

//Task#6

var fullname=firstname.concat(secondname);
alert("Welcome "+ fullname);

// Task#7

var str3="Hyderabad";
var aftrRep = str3.replace("Hyder", "Islam");
   document.write("City is :" + str3 +"<br>");
  document.write("After Replacement: "+ aftrRep);

// Task#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var aferRep1 = message.replace(/and/g, "&");
    document.write("String is :" + message +"<br>");
   document.write("After Replacement: "+ aferRep1);


//  Task#9

var str4="472"
document.write("String: "+ str4 +"<br>");
var num4=parseInt(str4);
document.write("Integer: "+ num4 );


//  Task#10

var userInput=prompt("write any word");
document.write("User Input "+ userInput +"<br>");

var userCapital=userInput.toUpperCase();
document.write("Capitalized Input "+ userCapital +"<br>");

//  Task#11

var userInput1=prompt("write any word");
document.write("User Input "+ userInput1 +"<br>");

var inter1=userInput1[0];
var int1=inter1.toUpperCase();

var inter2=userInput1.slice(1);
var int2=inter2.toLowerCase();

document.write("Titalized Input "+ int1+int2 +"<br>");

//  Task#12

var num5=35.36;
var num5string= num5.toString();
document.write("Titalized Input "+ num5string +"<br>");
var num6="";
var y=0;
for(var i=0; i<5 ;i++){
    if(num5string[i]==="."){

    }
   else{
       num6 +=num5string[i];
   }

}

document.write("Titalized Input "+ num6 +"<br>");

//  Task#13
var user13=prompt("write a user name");

for(var i=0; i<user13.length;i++){
    if(user13[i] === "!" ||  user13[i] === "," || user13[i] === "." || user13[i] === "@"){
        alert("write a valid user name");
        break;
    }
}


//  Task#14

var  bake= ["cake", "apple pie", "cookie", "chips", "patties"];
var bakein=prompt("Welcome to ABC bakkery. What do you want to order Sir/Ma'am");


var bakelowercase=bakein.toLocaleLowerCase();


    if(bakelowercase === "cake" || bakelowercase === "apple pie" || bakelowercase === "cookie" || bakelowercase === "chips" || bakelowercase === "patties")
    {
        alert(bakelowercase + " is present in our bakkery");  
    }

    else{
        alert("We are Sorry "+ bakelowercase + " is not present in our bakkery");  
    }

//  Task#15
 var password=prompt("Write a Password");
 var n = password.charCodeAt(0);
 
 if(n>=48 && n<=57){
    alert("please enter a  valid password")
}

 if(password.length >6){
     alert("please enter a valid password")
 }

  for(var i=0; i<password.length;i++){
    var n1 = password.charCodeAt(i); 
    if((n1>=48 && n1<=57)||(n1>=65 && n1<=90)||(n1>=97 && n1<=122)){
        
    } 
    else{
        alert("enter a valid password")   
    }

  }


 var str = "HELLO WORLD";

document.write(n)

Task#16
var university = "University of Karachi";

var res = university.split(" ");

document.write(res);

// Task#17

var userInput=prompt("write input");

document.write(userInput + "<br>");

var userInput_length=userInput.length;

document.write("Last Character of user Input "+userInput[userInput_length-1] + "<br>");


// Task#18

var input="The quick brown fox jumps over the lazy dog the the ";
var input1 = input.split(" ");
var input1_length=input1.length;
var count=0;
document.write(input1_length + "<br>");
for(var i=0;i<input1_length ;i++){
if(input1[i] === "the" || input1[i] === "The"){
    count++;
}

}

console.log("The Occurences of the is "+ count + "<br>");









