function reverseArrayInPlace(x) {
  for (let i = 0; i < (Math.floor(x.length / 2)); i++) {
    j = x[i];
    y = x[x.length - 1 - i];
    x[i] = y;
    x[x.length - 1 - i] = j;
  }
  console.log(x);
}

z = [10, 11, 12, 13, 14, 15];
reverseArrayInPlace(z);
