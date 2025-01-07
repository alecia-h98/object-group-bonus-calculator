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

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // Your logic here
}

// Loop over each employee in the employees array
// and call the calculateIndividualEmployeeBonus function for each one

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
