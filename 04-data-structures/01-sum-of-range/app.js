
function range(start, end) {
  let numbers = [];
  let total = 0;
  for(let i = start; i < (end + 1); i++) {
    let count = start;
    numbers.push(count);
    total += count
    start ++;
  }
  console.log(numbers);
  console.log(total);
}

// let start;
// let end;
//
// do {
//   start = prompt("Enter the start of the range:")
//   end = prompt("Enter the end of the range: ")
// }
// while (!start && !end)

range(1, 10)
