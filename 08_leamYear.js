var leap = function leapYear(year){
if (year=="string" || isNaN(year)) {
    console.log(`Please Provide Valid Input`);
} else {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
    
}

}
leap(2020);
leap(1999);
leap(1600);
leap(NaN);
leap(2022);
leap(1945);
leap(null);

leap();

leap(1750);
leap("Twenty Twenty");