/* 
	Name exercise: Multiplication tables
	Description: Multiplication tables from 1 to 5 and multiplication up to 5, if the 	results are even print "buzz" and if they are odd print "bass"
	Autor: Samuel MB
	Date: March 23th 2025

*/

let product;
let counterOne = 1;
let counterTwo;
let odd = 0;
let even = 0;
let bassOrBuzz;


for(counterOne=1; counterOne<=5; counterOne++){
	for(counterTwo=1; counterTwo<=5; counterTwo++){
		product=counterOne*counterTwo;
		if(product%2==0){
			bassOrBuzz= "Buzz";
			even++;
		}
		else{
			bassOrBuzz= "Bass";
			odd++;
		}
		console.log(counterOne +" * " +counterTwo +" = " +product +" , " 			+bassOrBuzz);
	}
}
console.log("The number of even numbers is:"+ even);
console.log("The number of odd numbers is:"+odd);
	
	
