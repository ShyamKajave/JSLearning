

function vowelcount(str){
    let count=0;
    let index=0;
    while (index<str.length) {
        var words=str.charAt(index);
        if (words=="a"||words=="e"||words=="i"||words=="o"||words=="u"||words=="A"||words=="E"||words=="I"||words=="O"||words=="U")
         {
            console.log(words);
            count++;   
        }
        index++;  
    }
    console.log(`Total vivels is : ${count}`);

}
vowelcount("I am very good IT developer");
console.log(`----------------------------------------`);

function cube(num){
    let totalSum = 0;
for (let index = 0; index <=5; index++) {
    totalSum =totalSum+ index * index * index ;
    
    
}
console.log(`Total sum of cube of given number is: ${totalSum}`);  

}
cube(1);
cube(2);
cube(3);
cube(4);
cube(5);

console.log(`--------------------------`);

function oddPositionchar(str){
    result="";
    for (let index = 0; index < str.length; index++) {
         let char = str.charAt(index);
        if (index%2!==0 && char!==" ") {
           result =result.concat(char).concat(" ");
        }
     
    }
    console.log(`${result}`);
}
oddPositionchar("Hard work always pay back");
oddPositionchar("Soon i will be Angular IT champ");

