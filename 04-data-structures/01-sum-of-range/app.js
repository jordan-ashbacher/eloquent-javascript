// FIRST SOLUTION

// function range(start, end) {
//   let numbers = [];
//   let total = 0;
//   for(let i = start; i < (end + 1); i++) {
//     let count = start;
//     numbers.push(count);
//     total += count
//     start ++;
//   }
//   console.log(numbers);
//   console.log(total);
// }

function range(start, end, step) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i+=step) array.push(i);
  } else {
    for (let i = start; i >= end; i+=step) array.push(i);
  }
  return array
}

function sum(array) {
  total = 0;
  for (let value of array) {
    total += value;
  }
  return total
}

console.log(range(1, 10, 5));
console.log(sum(range(1, 10, 5)));
