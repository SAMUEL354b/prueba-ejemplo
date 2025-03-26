/*
	Name exercise: Friction Force 
	Description: Calculation of the friction force
	Autor: Samuel MB
	Date:March 23th 2025
*/

let gravity=9.8;
let number= prompt("Enter the number of calculations you want to perform");
let frictionCoeficient= prompt("Enter the coeficient of friction:");
let mass;
let iteration;
let normalForce;
let frictionForce;


for(iteration=1; iteration<=number; iteration++){
	mass= prompt("Enter the mass:");
	if(mass>0){
	normalForce=mass*gravity;
	frictionForce= frictionCoeficient*normalForce;
	console.log("The friction force is:", +frictionForce, "N");
	console.log("")
	}
	else{
	console.log("ERROR: You entered a value less than 0, please enter a valid value");
	} 
}
	