function range(start, end, step) {
  let numbers = [];
  let total = 0;
  let x = start;
  for(let i = 0; i <= ((end - start) / step); i++) {
    let count = x;
    numbers.push(count);
    total += count
    x += step;
  }
  console.log(numbers);
  console.log(total);
}

range(100, 200, 5)
