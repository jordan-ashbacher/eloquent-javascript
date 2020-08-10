function reverseArrayInPlace(x) {
  for (let i = 0; i < (Math.floor(x.length / 2)); i++) {
    j = x[i];
    x[i] = x[x.length - 1 - i];
    x[x.length - 1 - i] = j;
  }
  return x;
}

let z = ['a', 'b', 'c'];
reverseArrayInPlace(z);
console.log(z);
