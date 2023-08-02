console.log(`5 to 15 numbers increment by 1`);
var i = 5;
var result = "";
while (i <= 15) {
  result = result.concat(i).concat(" ");
  i = i + 1;
}
console.log(result);

console.log(`--------------------------------------`);
console.log(`50 to 40 numbers decrement by 1`);

var i = 50;
var result = "";
while (i >= 40) {
  result = result.concat(i).concat(" ");
  i = i - 1;
}
console.log(result);

console.log(`--------------------------------------`);

console.log(`First 15 ODD numbers`);

var i = 1;
var result = "";
while (i <= 30) {
  result = result.concat(i).concat(" ");
  i = i + 2;
}
console.log(result);

console.log(`---------------------------------------------`);
console.log(`First 10 Even numbers`);

var i = 2;
var result = "";
while (i <= 20) {
  result = result.concat(i).concat(" ");
  i = i + 2;
}
console.log(result);
console.log(`---------------------------------------------`);
console.log(`Table of 5`);

var i = 5;
var result = "";
while (i <= 50) {
  result = result.concat(i).concat(" ");
  i = i + 5;
}
console.log(result);

console.log(`---------------------------------------------`);
console.log(`Table of 10`);
var i = 10;
var result = "";
while (i <= 100) {
  result = result.concat(i).concat(" ");
  i = i + 10;
}
console.log(result);

console.log(`---------------------------------------------`);
console.log(`Table of 10 reverse order`);

var i = 100;
var result = "";
while (i >= 10) {
  result = result.concat(i).concat(" ");
  i = i - 10;
}
console.log(result);
