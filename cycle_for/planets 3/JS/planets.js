/*
	Name exercise: Weight on the planets
 	Description: Weight calculation on different planets
	Autor: Samuel MB
	Date: march 24th 2025
*/

let addition=0;
let iteration;
let number=5;
let weight;
let mass= prompt("Enter the mass:");
let gravity;

for(iteration=1; iteration<number; iteration++){
	if(iteration==1){
	let gravity= 9.8;
	weight=mass*gravity;
	console.log("The weight of the object in the earth is:"+weight, "N");
	}
	else if(iteration==2){
	let gravity= 3.7;
	weight= mass*gravity;
	console.log("The weight of the object in mars is:"+weight, "N");
	}
	else if(iteration==3){
	let gravity= 24.8;
	weight= mass*gravity;
	console.log("The weight of the object in jupiter is:"+weight, "N");
	}
	else if(iteration==4){
	let gravity= 1.6;
	weight= mass*gravity;
	console.log("The weight of the object in the moon is:"+weight, "N");
	}
}