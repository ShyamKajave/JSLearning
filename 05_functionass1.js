console.log(`*****************1*****************`);

var str = function (value){
console.log(`Length Of The String "${value }" is: ${value.length}`);
console.log(`-------------------------`);
var square = value.length*value.length;
console.log(`And is Length Square is: ${square}`);
console.log(`-------------------------`);


}
str('Javascript');
str('Google Chrome');
str('Developer Smart');





console.log(`***************2*******************`);

var str = function (){
var str1 = 'I am anguler developer';
var str2 = str1.length;
console.log(` The length of the string is: ${str2}`); 
var str3 = str1.split(' ');
var str4 = str3.length;
var str5 = str2/str4;
console.log(`Now this devided by total No of words and result is:  ${str5}`);
var str6 = str2*str4;
console.log(`Now this multiply by total No of words and result is:  ${str6}`);

}
str();

console.log(`**********************************`);

