var voteEligibility = function (age){
if (age<=0 || age>120) {
    console.log(`Your age ${age} Is invalid`);
    
} else {
    if(age<18){
        console.log(`Your age is ${age} and you are not eligible for vote`);

    }else{
        console.log(`Your age is ${age} and you are eligible for vote`);
    }
}
}
voteEligibility(45);
voteEligibility(16);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility();
voteEligibility(null);