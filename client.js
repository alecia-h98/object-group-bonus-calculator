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
    //Those who have a rating of a 2 or below should not receive a bonus
    return employeeBonus;
  }
  if (employee.reviewRating > 2) {
    //Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income
    // .04
    employeeBonus.bonusPercentage += 4 / 100;
  }
  if (employee.reviewRating > 3) {
    //Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income
    // .04 + .02 = .06
    employeeBonus.bonusPercentage += 2 / 100;
  }
  if (employee.reviewRating > 4) {
    //Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income
    employeeBonus.bonusPercentage += 4 / 100;
  }
  if (employee.employeeNumber.length < 5) {
    //If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
    //and should receive an additional 5%
    employeeBonus.bonusPercentage += 5 / 100;
  }
  if (employee.annualSalary > 65000) {
    //However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
    employeeBonus.bonusPercentage -= 1 / 100;
  }

  //No bonus can be above 13% or below 0% total
  if (employeeBonus.bonusPercentage > 13 / 100) {
    employeeBonus.bonusPercentage = 13 / 100;
  } else if (employeeBonus.bonusPercentage < 0) {
    employeeBonus.bonusPercentage = 0;
  }

  employeeBonus.totalBonus = employee.annualSalary * employeeBonus.bonusPercentage;
  employeeBonus.totalBonus -= employeeBonus.totalBonus % 1;
  employeeBonus.totalCompensation += employeeBonus.totalBonus;

  return employeeBonus;
}

//loop over employees array
for (let i = 0; i < employees.length; i++) {
  //employee base information -> no bonus
  console.log('employee info:', employees[i]);

  //employee w/ bonus calulated
  const employeeInfo = calculateIndividualEmployeeBonus(employees[i]);
  console.log('employee bonus Info', employeeInfo);
}
