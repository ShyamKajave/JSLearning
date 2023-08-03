console.log(`-------------------------------------------------------------`);
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
let fruits=arrayFruits[0];
console.log(`The first element in given array is: ${fruits}`);
let fruitss=arrayFruits.length;
let fruit = arrayFruits[fruitss-1];
console.log(`The last element in given array is: ${fruit}`);

console.log(`-------------------------------------------------------------`);

arrayFruits.unshift("Papaya");
console.log(`Adding Papaya before Banana: [${arrayFruits}]`);

console.log(`-------------------------------------------------------------`);

arrayFruits.splice(4, 1);
console.log(`Removing Mango from given array: [${arrayFruits}]`);

console.log(`-------------------------------------------------------------`);

arrayFruits.push("Pineapple");
console.log(`Adding Pineapple at last: [${arrayFruits}]`);

console.log(`-------------------------------------------------------------`);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`Adding Dragon fruit befor Water Melon: [${arrayFruits}]`);

console.log(`-------------------------------------------------------------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replacing Orange with Kiwi: [${arrayFruits}]`);

console.log(`-------------------------------------------------------------`);

console.log(`Log the element from 1 to 4 index: [${arrayFruits.slice(1,4)}]`);
console.log(`-------------------------------------------------------------`);

console.log(`Last 3 elements using length property`);
for (let index = arrayFruits.length-1; index>=4; index--) {
    
    console.log(` [${arrayFruits[index]}]`);
    
}




