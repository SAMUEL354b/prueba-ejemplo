/* 
	Name exercise: Full payment
	Description: Calculate and print a person's total payment with discounts
	Autor: Samuel MB
	Date: March 20th 2025
*/

let daysWorked= prompt("Enter the days worked:"));
let valueOfTheDay= 50000;
let salary= daysWorked*valueOfTheDay;
let health= salary*0.12;
let pension= salary*0.16;
let arl= salary*0.052;
let discounts= health+pension+arl;
let netSalary= salary-discounts;


console.log("Salario:"+salary);
console.log("Salud:"+health);
console.log("Pension:"+pension);
console.log("arl:"+arl);
console.log("Descuentos:"+discounts);
console.log("Salario neto:" +netSalary);
