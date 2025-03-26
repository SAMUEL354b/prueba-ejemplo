/* 	
	Name exercise: Motion simulation
	Description: Motion simulation 
	Autor: Samuel MB
	Date: March 24th 2025
*/

let force=parseFloat(prompt("Enter the force:"));
let mass=parseFloat(prompt("Enter the mass:"));
let velocity;
let time=1;
let distanceTotal;
let add=0;
let acceleration;

while(force!==0 && mass!==0){
	acceleration= force/mass;
	velocity= (force/mass)*time;
	distanceTotal=velocity*time;
	time=time+(distanceTotal/velocity);
 	add=add+distanceTotal;
	console.log("The acceleration is:"+acceleration);
	console.log("The velocity is:"+velocity);
	console.log("The distance total is:"+distanceTotal);
	console.log("The time is:"+time);
	console.log("__________________");
	force=parseFloat(prompt("Enter the force:"));
	mass=parseFloat(prompt("Enter the mass:"));
	
}

	console.log("The addition of total distances is:"+add);

	