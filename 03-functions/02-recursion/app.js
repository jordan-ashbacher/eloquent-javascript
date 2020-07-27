let n;

do {
  n = prompt("Enter a number:");
}
while (!n);

function isEven(n) {
  function find(current) {
    if (current == 0) {
      return (`${n} is even`);
    } else if (current == 1) {
      return (`${n} is odd`);
    } else if (current < 0) {
      return (`Please enter a positive number`);
    } else {
      return find(current -= 2);
    }
  }
  return find(n);
}


console.log(isEven(n));
