/* 
	Name exercise: Gravitational potential energy
	Description: Caculation of gravitational potential energy 
	Autor: Samuel MB
	Date: March 23th 2025
*/

let mass= prompt("Enter the mass:");
let height= prompt("Enter the height");
let gravity= 9.81;
let potentialEnergy;
let counter=0;
let add=0;

while(mass>0 && height>0){
	potentialEnergy= mass*gravity*height;
	add=add+potentialEnergy;
	counter++;
	console.log("The gravitational potential energy is:"+potentialEnergy, "J");
	console.log("");
	mass= prompt("Enter the mass:");
	height= prompt("Enter the height");
}

console.log("The total addition of of all the calculated potential energies is:"+add);
console.log("The total of calculations made were:"+counter);

	