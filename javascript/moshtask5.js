function calculateGrade(marks) {
  let sum = 0;
  let avg;
  for (let arr of marks) {
    avg = (sum += arr) / marks.length;
  }
  if (avg < 60) {
    return "F";
  }
  if (avg < 70) {
    return "D";
  }
  if (avg < 80) {
    return "C";
  }
  if (avg < 90) {
    return "B";
  }
  return "A";
}
const marks = [80, 90, 60, 70, 60];
console.log(calculateGrade(marks));
