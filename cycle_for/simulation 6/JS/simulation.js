/*
	Name exercise: Simulation 
	Description: Simulation of an object on an inclined plane
	Autor: Samuel MB
	Date: March 23th 2024
*/

let mass= prompt("Enter the mass:");
let gravity=9.8;
let tethaNumber;
let numberRange=5;
let iteration;
let pararelForce;

for(iteration=1; iteration<=numberRange; iteration++){
	tethaNumber= prompt("Enter the tetha Number:");
	pararelForce= mass*gravity*Math.sin(tethaNumber);
	console.log("The paralelForce is:", +pararelForce, "N");
}

	

