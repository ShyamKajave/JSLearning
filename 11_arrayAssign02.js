console.log(`---------------------------------------------------------------------------------`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Length of given Array is: ${arrayNumbers.length}`);
console.log(`---------------------------------------------------------------------------------`);
let lastNumber = arrayNumbers.length-1;
console.log(`First number is: [${arrayNumbers[0]}] and Last number is: [${arrayNumbers[lastNumber]}]`);
console.log(`---------------------------------------------------------------------------------`);
let lastNumber3= arrayNumbers.length-3;
console.log(`The third last number is: [${arrayNumbers[lastNumber3]}]`);
console.log(`---------------------------------------------------------------------------------`);
console.log(`The Odd numbers are:`);
for (let index = 0; index<arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(`${element}`);
    }
    
}
console.log(`---------------------------------------------------------------------------------`);
console.log(`The even numbers are:`);
for (let index = 0; index<arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!==0) {
        console.log(` ${element}`);
    }
    
}
console.log(`---------------------------------------------------------------------------------`);


let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   
    if (index%2!==0) {
        let element = arrayNumbers[index];
        sum = element+sum;
        console.log(`The Odd position number is: ${element}`);
      
    }

    console.log(`Addition of all this Odd numbers is: [${sum}]`);
}

console.log(`---------------------------------------------------------------------------------`);

let Addition = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2==0) {
        let sum = arrayNumbers[index];
        Addition= sum+Addition;
        console.log(`The Even position number is: ${sum}`);

    }
    console.log(`Addition of all this Even numbers is: [${Addition}]`);
}
console.log(`---------------------------------------------------------------------------------`);

let allsum= 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    allsum = allsum+element;
    
    
}
console.log(`The sum of all numbers are: ${allsum}`);
console.log(`---------------------------------------------------------------------------------`);


for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
         
        console.log(`Number multiple by 5 are:[${element}]`);
    }
    
}
console.log(`---------------------------------------------------------------------------------`);

let inclu=arrayNumbers.includes(115);
console.log(`Is 115 available in given array: ${inclu}`);

console.log(`---------------------------------------------------------------------------------`);

arrayNumbers.splice(3,0, 55,66);
console.log(`Adding two 55 and 66 at index 3: [${arrayNumbers}]`);

console.log(`---------------------------------------------------------------------------------`);

arrayNumbers.splice(4,3);
console.log(`Remove 3 elements from 4th index: [${arrayNumbers}]`);

console.log(`---------------------------------------------------------------------------------`);