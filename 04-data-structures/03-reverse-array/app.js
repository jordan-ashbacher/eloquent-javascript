let y = [];

function reverseArray(x) {
  for (let i of x) {
    y.unshift(i);
  }
  console.log(y);
}

z = [1, 2, 3, 4, 5];
reverseArray(z);
