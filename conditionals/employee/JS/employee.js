/*
    Name exercise: Employee
    Description: Calculation of an employee's total salary
    Author: SamuelMB
    Date: 15/03/2025
*/

let minimumWage = 1423500 ;
let personSalary = 1500000 ; 
let transport;

if (minimumWage * 2 < personSalary) {
    transport = 114000;
} else {
    transport = 0;
};

let health = personSalary * 0.12;
let pension = personSalary * 0.16;
let arl = personSalary * 0.052;
let discount = health + pension + arl;
let totalSalary = personSalary - discount;

if (totalSalary > minimumWage) {
    totalSalary = totalSalary - (totalSalary * 0.4);
}
	console.log("Total salary after deduction:", totalSalary);