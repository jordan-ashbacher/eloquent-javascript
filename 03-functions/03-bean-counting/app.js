function countBs(s) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    letter = string[i];
    if (letter == "B") {
      count += 1;
    }
  }
  console.log(count);
}

let string;

do {
  string = prompt("Enter a word or phrase:")
}
while (!string);

countBs(string)
