function countChar(string, character) {
  let count = 0;
  for (i = 0; i < string.length; i++) {
    letter = string[i];
    if (letter == character) {
      count += 1;
    }
  }
  console.log(count);
}

let string;
let character

do {
  string = prompt("Enter a word or phrase:")
  character = prompt("Enter the character you'd like to count: ")
}
while (!string && !character)

countChar(string, character)
