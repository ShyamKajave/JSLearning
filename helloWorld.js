var salary = 54000;
console.log('salary==', salary, 'type of==',typeof salary);
console.log('=======================================');
var salary = null;
console.log(typeof salary);
salary = 40000.50; // 
var typeOfSalary = typeof salary;
console.log('salary=>', salary, 'typeof salary =>', typeOfSalary);
salary = "Forty Thousand";
var salaryTypeOf = typeof salary;
console.log('salary=>', salary, 'typeof=>', salaryTypeOf);

var a=100;
var b=200;

console.log('before swapping a=', a, 'b=',b);
var temp=a;
a=b;
b=temp;
console.log('after swapping a=', a, 'b=',b);