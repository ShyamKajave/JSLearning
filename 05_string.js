// // var greet = "Good Morning";
// // var lengthGreet= greet.length;
// // console.log(greet,'Length of String is:', lengthGreet);

// // var charAt0 = greet.charAt(0);
// // console.log(`${greet} - Char at 0th index is ${charAt0}`);

// // var charAtLastIndex = greet.charAt(lengthGreet-1);
// // console.log(` Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);

// var greet = "Good Morning";
// var lengthGreet=greet.length;
// console.log(greet,'Length of String', lengthGreet);

// var charAt0= greet.charAt(0);
// console.log(`${greet} - Chart At 0th Index is  ${charAt0}`);

// var charAtLastIndex = greet.charAt(lengthGreet-5);
// console.log(`${greet} - Last Char of Index is ${charAtLastIndex} of index ${lengthGreet}`);

// console.log(`------------------------------------------------------------------------------`);

// var firstName = 'Shyam';
// var lastName = ' Kajave';
// var result = firstName + lastName;
// console.log(`${result} ${firstName} ${lastName}`);
// var result1= firstName.concat(lastName);
// console.log(`This Is my full name--- ${result1}`);

// console.log(`------------------------------------------------------------------------------`);

// var result=greet.indexOf('M')
// console.log(`Index Of ${result}`);

// console.log(`------------------------------------------------------------------------------`);

// var result = greet.includes('Morning');
// console.log(`${result}`);

// console.log(`------------------------------------------------------------------------------`);

// var result=greet.split(' ');
// var words = result.length;
// console.log(words);

// console.log(`------------------------------------------------------------------------------`);

// var trim='    Good Morning    ';
// var result=trim.trim();
// var length=result.length;
// console.log(`${result} ${length} `);
var greet = "Good Morning Virat Dude";

var lengthGreet= greet.length;

console.log(greet,'Length of String is:', lengthGreet);

 

console.log(`------------------------------------`);

var charAt0 = greet.charAt(0);

console.log(`${greet} - Char at 0th index is ${charAt0}`);

 

var charAtLastIndex = greet.charAt(lengthGreet-1);

console.log(` Last Char is ${charAtLastIndex} of Index is ${lengthGreet}`);

console.log(`------------------------------------`);

 

var firstName = "Gajanan";

var lastName = " Kharat";

var result = firstName + lastName;

console.log(`concatenation String is  ${result}`);

var result = firstName.concat(lastName);

console.log(`My Full name is ${result}`);

 

console.log(`------------------------------------`);

var result = greet.indexOf('M');

console.log(`Index of char 'M' ${result}`);

var result = greet.indexOf('Dude');

console.log(`Index of sub string 'Dude' is : ${result}`);

 

console.log(`------------------------------------`);

var result = greet.includes('Virat');

console.log(`Result is ${result}`);

 

console.log(`------------------------------------`);

var result = greet.split(' ');

var words = result.length;

console.log(`Total number of words are : ${words}`);

 

console.log(`------------------------------------`);

var greet = "      Good Morning      ";

var result = greet.trim();

console.log(`Before Trim String length : ${greet.length}, After Trim string is ${result} and it's length is ${result.length}`);

var resultTrimEnd = greet.trimEnd();

var trimEndLength = resultTrimEnd.length; 

var endSpaces = greet.length - trimEndLength;

console.log(` End Spaces is : ${endSpaces} `);

 

console.log(`------------------------------------`);

var greet = "Good Morning Virat Dude";

var result = greet.replace(' ', '-');

console.log(`After replace ' ' with '-' string is : ${result}`);

var result = greet.replace('o', 'O');

console.log(`Result string is : ${result}`);

 

console.log(`------------------------------------`);

var result = greet.slice(5, 12);

console.log(`Slice from index 5 till 12 is : ${result}`);












