const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below
console.log("map");

const numbersMultipiedBy2ForEach = numbers.map((number) => {
  return number * 2;
});

const numbersDividiedBy2ForEach = numbers.map((number) => {
  return number / 2;
});

const numbersMultipiedByThemselves = numbers.map((number) => {
  return number * number;
});

console.log(numbersMultipiedBy2ForEach);
console.log(numbersDividiedBy2ForEach);
console.log(numbersMultipiedByThemselves);
