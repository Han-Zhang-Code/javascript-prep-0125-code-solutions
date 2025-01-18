function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(2, 2);
console.log('the value of sum is : ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('the value of sum is: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('World');
console.log('the value of greeting is: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('the value of sumTimesFive is: ', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('the value of productDividedByFive is: ', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('the value of difference is: ', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log('the value of circumference is: ', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log('the value of fullName is: ', fullName);

function cube(number) {
  return number ** 3;
}
const cubed = cube(5);
console.log('the value of cubed is: ', cubed);
