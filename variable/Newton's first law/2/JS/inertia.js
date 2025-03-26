/*
	Name exercise: Inertia
	Description: Calculate inertia as an object's resistance to change in motion
	Autor: Samuel MB
	Date: March 20th 2025
*/

let force= prompt("enter the applied force:");
let acceleration= prompt("enter acceleration:");
let mass= force/acceleration;
let inertia= mass;

console.log("The value of inertia is:"+inertia);