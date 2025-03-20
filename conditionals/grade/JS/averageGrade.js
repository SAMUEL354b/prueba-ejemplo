/*
    Name exercise: averageGrade
    Description: calculate the final grade   
    Author: SamuelMB
    Date: 19/03/2025
*/

let grade1 = 4;
let grade2 = 3;
let grade3 = 3.5;

let averageGrade = (grade1 * 0.20 + grade2 * 0.35 + grade3 * 0.45);

if (averageGrade > 4.5) {
    console.log('top grade');
} else if (averageGrade >= 3.5 && averageGrade < 4.5) {
    console.log('good grade');
} else if (averageGrade >= 3 && averageGrade < 3.5) {
    console.log('medium grade');
} else {
    console.log('bad grade');
}
