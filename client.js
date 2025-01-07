// Array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Loop over the employees array and do the following:

// ***Loop over the employees array and do the following:
// use each employee object as the input to the function described below.
// console.log the results of each iteration.
// The log should be in the loop, not the function.
// Loop over each employee in the employees array

// This function will calculate 1 employees bonus!

function calculateIndividualEmployeeBonus(employee) {
  // Your logic here
  console.log('employee', employee);

  //return a new employee object with the following keys:
  /*
[x]The name property should contain the employee's name.
[]The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
[]The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
[]The totalBonus should be the employee's total bonus rounded to the nearest dollar.
  */
let bonusPercentage = 0;
 if(employees.reviewRating <= 2){
bonusPercentage = 0;
  }else if(employees.reviewRating === 3 ){
    bonusPercentage = employee.annualSalary * .04;
    console.log(bonusPercentage);
  }else if(employees.reviewRating === 4){
   bonusPercentage = employee.annualSalary * .06;
   console.log(bonusPercentage);
  }else if(employees.reviewRating === 5){ 
    bonusPercentage = employee.annualSalary * .10;
    console.log(bonusPercentage);
  }
  
  //function awesomeThings(array, userAwesomeLevel, lameness) {
    //const array6Up = array.filter((item) => item.awesomeLevel >= userAwesomeLevel && item.lameness < lameness);
    //return array6Up;

  
const newEmployee = {
  name: employee.name,
  bonusPercentage: bonusPercentage,
  totalCompensation: 0,
  totalBonus: 0
}
console.log(newEmployee);

return newEmployee; //this should have all the newly cacluated bonus info!
}

//loop the employee array
for (let employee of employees) {
  const emp = calculateIndividualEmployeeBonus(employee);
  //console.log('Employee', emp.annualSalary);
  console.log(emp);
  calculateIndividualEmployeeBonus();
}

//function calculateIndividualEmployeeBonus(part, annualSalary) {
  //return (part / annualSalary) * 100;
//}

calculateIndividualEmployeeBonus(employees);


// and call the calculateIndividualEmployeeBonus function for each one

// for(let i= 0; i<employee.length; i++){
//   console.log(employee[i]);
// for(let k=0; k < employees[k].name; k++){
//   console.log(employees[k].name);
// }
// }


// Test cases - these are failing by default but should pass once you've written the function correctly
// You can write more test cases to test your function using the same format
const atticusResult = calculateIndividualEmployeeBonus(employees[0]);
console.log(
  'Atticus Test Results:',
  atticusResult.bonusPercentage === 0.09,
  atticusResult.totalBonus === 4230,
  atticusResult.totalCompensation === 51230
);

const jemResult = calculateIndividualEmployeeBonus(employees[1]);
console.log(
  'Jem Test Results:',
  jemResult.bonusPercentage === 0.06,
  jemResult.totalBonus === 3810,
  jemResult.totalCompensation === 67310
);
