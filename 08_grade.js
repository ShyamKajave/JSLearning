function gradeCalculation(marks) {
    if (marks<0 || marks>100 || marks == "string" || isNaN(marks) ) {
        console.log(`Please provide the valid marks`);
    }else{
        if (marks>=90) {
            console.log(`Funtastic Marks: ${marks} your grade is A+`);
        }else{
            if (marks>=75) {
                console.log(`Exllent marks: ${marks} your grade is A`);
            }else{
                if (marks>50 && marks<75) {
                    console.log(`Good marks: ${marks} your grade is B`);
                }else{
                    if (marks>=35 && marks<50) {
                        console.log(`Marks is: ${marks} your grade is C, Need Improment`);
                    }else{
                        if (marks>0 && marks<35) {
                            console.log(`Your marks is: ${marks} and you are fail`);
                        }
                    }
                }
            }
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation();
gradeCalculation(null);