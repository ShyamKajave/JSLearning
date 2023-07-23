function stringBasics(){
console.log(`My dream company is "TCS"`);
}
stringBasics(); 

console.log('-----------------------------------');

var hobby1= 'Cooking';
var hobby2= 'Cricket';
var hobby3= 'Gaming';

console.log(`My Hobbies are: ${hobby1} ${hobby2} ${hobby3}`);
var r1=hobby1.length;
var r2=hobby2.length;
var r3=hobby3.length;
var totalChar=r1+r2+r3;

console.log(`Addition of all char in all my hobbies are: ${totalChar} `);


console.log('-----------------------------------');

function stringHansOn(){
    var str = "     Hey you are doing good,  keep it up      ";
    console.log('-----------------------------------');
    console.log(`1. Given String is: "${str}"`);
    console.log('-----------------------------------');
    var len=str.length;
    console.log(`2. Length Of given String is: "${len}"`);
    console.log('-----------------------------------');  
    var afterTrim=str.trim();
    var rlength=afterTrim.length;
    console.log(`3. String after removing spaces is: "${afterTrim}" and now the length is now: "${rlength}"`);
    console.log('-----------------------------------'); 
    var extras = len-rlength;
    console.log(`4. Extra spaces Count is: "${extras}"`);

    console.log('-----------------------------------');

   var fChar = afterTrim.charAt(0);
    var lChar= afterTrim.charAt(rlength-1);
    console.log(`5 . After Trim First Char is: "${fChar}" and Last Char is: "${lChar}"`);

    console.log('-----------------------------------');

    var totalWords= afterTrim.split(' ');
    var countWords = totalWords.length;
    console.log(`6. After trim the word Count is:"${countWords}" `);

    console.log('-----------------------------------');

    var indexword = afterTrim.indexOf('good');
    console.log(`7. Index Of word good is: "${indexword}"`);

    console.log('-----------------------------------');

    var sliceAfter=afterTrim.slice(22);
    console.log(`8. String after 22 is: "${sliceAfter}"`);

    console.log('-----------------------------------');

    var wordEndsWith= afterTrim.endsWith('up');
    console.log(`9. Is String Ends With Word up: "${wordEndsWith}"`);

    console.log('-----------------------------------');

    var startWord=afterTrim.startsWith('Hey');
    console.log(`10. Is string start with word Hey: "${startWord}" `);


}
stringHansOn();