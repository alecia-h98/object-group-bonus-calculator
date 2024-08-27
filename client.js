// array of employee objects
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
  // your logic here
  let employeeBonus = {
    // creating employeeBonus object to later return.
    name: employee.name,
    bonusPercentage: 0,
    totalBonus: 0,
    totalCompensation: Number(employee.annualSalary),
  };
  if (employee.reviewRating <= 2) {
    return employeeBonus;
  }
  if (employee.reviewRating > 2) {
    employeeBonus.bonusPercentage += 4 / 100;
  }
  if (employee.reviewRating > 3) {
    employeeBonus.bonusPercentage += 2 / 100;
  }
  if (employee.reviewRating > 4) {
    employeeBonus.bonusPercentage += 4 / 100;
  }
  if (employee.employeeNumber.length < 5) {
    employeeBonus.bonusPercentage += 5 / 100;
  }
  if (employee.annualSalary > 65000) {
    employeeBonus.bonusPercentage -= 1 / 100;
  }

  if (employeeBonus.bonusPercentage > 13 / 100) {
    employeeBonus.bonusPercentage = 13 / 100;
  } else if (employeeBonus.bonusPercentage < 0) {
    employeeBonus.bonusPercentage = 0;
  }

  employeeBonus.totalBonus = employee.annualSalary * employeeBonus.bonusPercentage;
  employeeBonus.totalBonus -= employeeBonus.totalBonus % 1;
  employeeBonus.totalCompensation += employeeBonus.totalBonus;
  // if (employee.reviewRating === 3) {
  //   bonusObj.bonusPercentage = 4;
  // }
  // if (employee.reviewRating === 4) {
  //   bonusObj.bonusPercentage = 6;
  // }
  // if (employee.reviewRating === 5) {
  //   bonusObj.bonusPercentage = 10;
  // }
  // return new object with bonus results
  return employeeBonus;
}
for (let i = 0; i < employees.length; i++) {
  console.log('employee info:', employees[i]);
  const employeeInfo = calculateIndividualEmployeeBonus(employees[i]);
  console.log('employee bonus Info', employeeInfo);
}
