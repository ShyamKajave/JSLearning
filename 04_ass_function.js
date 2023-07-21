function function1 (){
console.log('Without passing arg and return value');
console.log('India');
}
function1();
function function2(){
console.log('Bharat');
}
function2();

console.log('-----------------------------------------------------------------------');

function personalDetails(fname, lname, cname){
console.log('Aruguments and log on console inside a function');
console.log('First Name:', fname, 'Lastname:', lname, 'College name:',cname);
}
personalDetails('Shyam Kajave','Kajave','Tmv Pune');

console.log('-----------------------------------------------------------------------');

function swapValues(value1 , value2){

console.log('Before Swapping', 'Value 1:', value1, 'Value 2:', value2);
var temp = value1;

value1=value2;
value2=temp;
console.log('After Swapping', 'Value 1:', value1,'Value 2:',value2);

}
swapValues('Virat' , 'Anushka');
swapValues(1000,2000);

console.log('----------------------------------------------------------------------');

function addThreeValues(arg1, arg2, arg3){
console.log('Addition Of Three Values:',arg1,arg2,arg3);

}
addThreeValues(10 , 23 , 600, 40);
addThreeValues('Hello', 'Good', 'Morning');

console.log('-----------------------------------------------------------------------');

function bankDetails(v1,v2,v3,v4){

    console.log('Bank Name:',v1,'Account Number:',v2,'Location:', v3,'Pin Code:',v4);

}
bankDetails('CITI Bank', 123456789 , 'Pune' , 431020);
bankDetails('AXIS Bank', 987456123 , 'Mumbai' , 441202);
bankDetails('CITI Bank', 123456789 , 'Pune' , 631202, 'Open');


