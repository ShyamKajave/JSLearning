console.log(`*******Male Marriage Eligibility**********`);

function maleMarriageEligibility(gender, age, boyName){
 
   var result = age>=21 ? "You are eligible for marriage" : "Not eligible for marriage";
    console.log(`${boyName} is ${result}`);
    return result1;
}
var result1 = maleMarriageEligibility("Male", 25, "Billgates");
var result1= maleMarriageEligibility("Male", 17 , "Stew Jobs");

console.log(`*******Female Marriage Eligibility**********`);

function femaleMarriageEligibility(gender, age, girlName){
   var result =  age>=18 ? "You are eligible for Marriage" : "you are not eligible for marriage";
    console.log(`Hey ${girlName} is ${result} `);
    return result2;


}
var result2=femaleMarriageEligibility("Female", 16, "Jenifer");
var result2=femaleMarriageEligibility("Female", 27, "Malinda Gates");

