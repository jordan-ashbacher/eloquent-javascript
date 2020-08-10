// FIRST SOLUTION

// function range(start, end, step) {
//   let numbers = [];
//   let total = 0;
//   let x = start;
//   for(let i = 0; i <= ((end - start) / step); i++) {
//     let count = x;
//     numbers.push(count);
//     total += count
//     x += step;
//   }
//   console.log(numbers);
//   console.log(total);
// }
//
// range(100, 200, 5)


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
