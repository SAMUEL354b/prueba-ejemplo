/*	
	Name exercise: Weapon recoil 	
	Description: Calculation of the recoil of a weapon after firing.
	Autor: Samuel MB
	Date: March 22th 2025
*/

let weaponMass= prompt("Enter the mass of the weapon:"));
let bulletMass= prompt("Enter the mass of the bullet:"));
let bulletVelocity= prompt("Enter the bullet speed:"));
let weaponRecoilVelocity= (bulletMass*bulletVelocity)/weaponMass;

console.log("The recoil speed of the weapon is:"+ weaponRecoilVelocity);