console.log(`*********************1***********************`);
var greaterNumber = function(num1 , num2){

    var result = num1 > num2 ?   "Greater No is 10"  : "Greate no is -10" ;
    console.log(`${result}`);

    // var gn = num1 >num2;
    // console.log(`Greater Number is ${gn}`);

}
greaterNumber(10 , -10);

var greaterNumber = function(num1 , num2){

    var result = num1 > num2 ?   "Greater No is 800"  : "Greate no is 899" ;
    console.log(`${result}`);

    // var gn = num1 >num2;
    // console.log(`Greater Number is ${gn}`);

}
greaterNumber(800 , 899);

console.log(`*********************2*************************`);

// var num1= 29;

// var result = num1%2==0 ? "Number 29 is Even Number" : "Number 29 Is Odd Number";
// console.log(`${result}`);

// var num1= 44;

// var result = num1%2==0 ? "Number 44 is Even Number" : "Number 44 Is Odd Number";
// console.log(`${result}`);

// var num1= 0;

// var result = num1%2==0 ? "Number 0 is Even Number" : "Number 0 Is Odd Number";
// console.log(`${result}`);

// var num1= 101;

// var result = num1%2==0 ? "Number 101 is Even Number" : "Number 101 Is Odd Number";
// console.log(`${result}`);

var hi = function(num1){
var hi1 = num1%2==0 ? "Even" :  "ODD";
var hi2 = num1%2==0 ? "True" : "False";

console.log(`The Given Number ${num1} is ${hi1} and is ${hi2}`);



}
hi(29);
hi(44);
hi(0);
hi(101);

console.log(`*********************3*************************`);

var wordlength = function(word){
    var even = word.length%2==0 ? "EVEN" : "ODD";
console.log(`String is ${word} and its length is ${word.length} and it is ${even} `);

}
wordlength("Javascript");
wordlength("Developer");
wordlength("Google");
