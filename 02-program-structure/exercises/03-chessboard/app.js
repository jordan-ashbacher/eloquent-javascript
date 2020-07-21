let height;
let width;
let board = "";


do {
  height = prompt("Enter height:");
  width = prompt("Enter width:")
}
while (!height);
for (i = 0; i < height; i++) {
  for (j = 0; j < width; j++) {
    if ((i+j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
