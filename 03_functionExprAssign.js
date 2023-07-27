var square = function (num){
var square1=num * num;
console.log(`square of this  number: ${square1}`);
}
square(5);
square(6);
square(25);
square(100);
square(63.63);
square(59);
console.log(`Type of function : ${typeof square}`);
console.log(`-------------------------------------------------`);




console.log(`-------------------------------------------------`);

var areaOfRectangle=function (length, height){
    var areaOfRectangle1= length * height;
        console.log(`Area of Rectangle is : ${areaOfRectangle1} `);
}
areaOfRectangle(499,917);

console.log(`-------------------------------------------------`);

var swapValues=function swap(var1, var2){
    console.log(`Before swapping Name 1 : ${var1} and Name 2: ${var2}`);
    var temp= var1;
    var1=var2;
    var2=temp;
    console.log(`After Swapping Name 1: ${var1} and Name 2: ${var2}`);
}
swapValues('Virat', 'anushka');
swapValues(1000,2000);


console.log(`-------------------------------------------------`);

var sentence = function(){
var str = ('JS is most populer language of internet')
var sentence1 = str.split(' ');
var totalChar = str.length;
console.log(`1. Total number of char. are : ${totalChar}`); 
var index = str.charAt(6);
console.log(`2. Character at 6 index is: ${index}`);
var index2 = str.charAt(11);
console.log(`3.Character at 11 index is: ${index2} `);

// var length2 = str.charAt(totalChar-1);
// console.log(`4.last char. of string is: ${length2}`);

var fchar = str.charAt(0);
console.log(`5.First Char. of string is: ${fchar}`);

var tword = str.split(' ');
var tword1 = tword.length;
var tsquare = tword1 * tword1;
console.log(`6. Total Number of Words are: ${tword1} and its square is: ${tsquare}`);

}
sentence();





