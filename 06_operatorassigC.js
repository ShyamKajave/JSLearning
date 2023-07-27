var tcs = function(gradeScore, hscScore, sscScore, candidateName){
 
   var result =  gradeScore>=70 || hscScore>= 80 ||sscScore>90 ? "You are eligible for TCS interview" : "Unfortunately yor are not eligible for interview";
    console.log(`Congrates ${candidateName} ${result} `);


}
tcs(80, 86, 90, "Shyam Kajave");
tcs(70, 65, 55, "Virat Kohli");
tcs(60, 79, 88, "M S Dhoni");
