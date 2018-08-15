function highland(arr) {
  let count = 0;
  let xtemp = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1 && xtemp === 0) {
        if ((i > 0 && arr[i - 1][j] !== 1) || i === 0) {
          //   console.log(i, j);
          count++;
        }
        xtemp = arr[i][j];
      } else {
        xtemp = arr[i][j];
      }
    }
  }
  return count;
}

//testing
console.log(highland([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));
console.log(highland([[1, 0, 1], [1, 0, 1], [1, 0, 1]]));
console.log(highland([[1, 0, 1], [0, 1, 0], [1, 0, 1]]));
console.log(highland([[1, 1, 1], [0, 1, 0], [1, 0, 1]]));
console.log(highland([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
