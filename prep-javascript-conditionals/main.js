/* Your JS goes in this file */
function isAdult(age) {
  if (age >= 18) return true;
  else return false;
}
const isAdultResult = isAdult(18);
console.log('output for isAdultResult', isAdultResult);

function didStudentPass(score) {
  if (score >= 70) return true;
  else return false;
}
const didStudentPassResult = didStudentPass(18);
console.log('output for didStudentPassResult', didStudentPassResult);

function gradeCalculator(score) {
  if (score < 60) return 'F';
  if (score < 70) return 'D';
  if (score < 80) return 'C';
  if (score < 90) return 'B';
  if (score < 100) return 'A';
  if (score > 100) return 'A++';
  else return 'invalid ';
}
const gradeCalculatorResult = gradeCalculator(18);
console.log('output for gradeCalculatorResult', gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') return 'it is hot today';
  if (season === 'spring') return 'the flowers are blooming';
  if (season === 'autumn') return 'the leaves are changing colors';
  if (season === 'winter') return 'it is cold today';
  else return 'please enter a valid season ';
}
const seasonMessengerResult = seasonMessenger(`18`);
console.log('output for seasonMessengerResult', seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday')
    return 'have a good weekend';
  else return 'It is a weekday! ';
}
const dayDetectorResult = dayDetector(`18`);
console.log('output for dayDetectorResult', dayDetectorResult);
