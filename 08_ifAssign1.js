console.log(`----------------------1-------------------------`);
function number (num1){
if(num1%2==0){
    console.log(`The number ${num1} is Even`);

} else{
    console.log(`The number is ${num1} is ODD`);
}
}
number(45);
number(70);
number(67);
number(98);

console.log(`----------------------2-------------------------`);

function vote (age){
    if (age>=18){
    console.log(`Your age is ${age} and now you are eligible for voting`);
    } else{
        console.log(`Your age is ${age} and you are not eligible for voting`);
        
    }


}
vote(18);
vote(20);
vote(16);
vote(40);

console.log(`----------------------3-------------------------`);

function str (str1){

if (str.length > 10) {
    console.log(`The given String ${str1} have 10 Char.`);
    
} else {
    console.log(`The Given string ${str1} not have 10 char.`);
}
}
str("Javascript");

console.log(`----------------------4-------------------------`);
// if (str2.startsWith("Java")) {
//     console.log(`yes`);
    
// } else {
//     console.log(`no`);
// }

function str(str2) {
if (str2.startsWith("Java")) {
    console.log(`The Given String ${str2} is start with Java`);
    
} else {
    console.log(`The Given string ${str2} not Start with java`);
    
}

}
str("JavaScript Language");
console.log(`-----------------------------------------------`);
