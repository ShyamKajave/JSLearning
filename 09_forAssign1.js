console.log(`5 to 15 numbers increment by 1`);
var result = "";
for (let index = 5; index <= 15; index++) {
  result = result.concat(index).concat("  ");
}
console.log(result);

console.log(`---------------------------------------------`);
console.log(`50 to 40 numbers decrement by 1`);
var result = "";
for (let index = 50; index >= 40; index--) {
  result = result.concat(index).concat("  ");
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`First 15 ODD numbers`);
var result = "";
for (let index = 1; index <= 30; index = index + 2) {
  result = result.concat(index).concat("  ");
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`First 10 Even numbers`);
var result = "";
for (let index = 2; index <= 20; index = index + 2) {
  result = result.concat(index).concat("  ");
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`Table of 5`);
var result = "";

for (let index = 5; index <= 50; index = index + 5) {
  result = result.concat(index).concat("  ");
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`Table of 10`);
var result = "";
for (let index = 10; index <= 100; index = index + 10) {
  result = result.concat(index).concat("  ");
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`Table of 10 reverse order`);
var result = "";

for (let index = 100; index >= 10; index = index - 10) {
  result = result.concat(index).concat("  ");
}
console.log(result);
