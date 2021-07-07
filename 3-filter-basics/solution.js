const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

// Your code below

const higherGrades = grades.filter((number) => {
  return number < 3;
});

const lowerGrades = grades.filter((number) => {
  return number >= 3;
});
console.log(higherGrades);
console.log(lowerGrades);
