/* 
	Name exercise: Multiplication tables
	Description: Multiplication tables from 1 to 5 and multiplication up to 5
	Autor: Samuel MB
	Date: March 23th 2025

*/

let product;
let counterOne = 1;
let counterTwo;
let odd = 0;
let even = 0;
let bassOrBuzz;

while (counterOne <= 5) {
    counterTwo = 1; 

    while (counterTwo <= 5) {
        product = counterOne * counterTwo;
        
        if (product % 2 == 0) {
            bassOrBuzz = "buzz";
            even = even + 1;
        } else {
            bassOrBuzz = "bass";
            odd = odd + 1;
        }

        console.log(counterOne + " * " + counterTwo + " = " + product + ", " + bassOrBuzz);
        counterTwo++;
    }

    counterOne++;
}

console.log("The number of even numbers is:"+ even);
console.log("The number of odd numbers is:"+odd);




		


