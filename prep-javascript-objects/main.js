const person = {
  firstName: 'Yuhan Zhang',
  lastName: 'Zhang',
  hobby: 'Gaming',
};

const fullName = `${person.firstName} ${person.lastName}`;
console.log("The person's name is: ", fullName);

person.job = 'Project Manager';
console.log("The person's current job is: ", person.job);

person[previousJob] = 'Software Development Engineer';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
