// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const length = A.length;
  const remain = K % length;
  let newArr = A.slice(0);

  for (let j = 0; j < remain; j++) {
    temp = [];
    for (let i = 0; i < length; i++) {
      if (i + 1 === length) {
        temp[0] = newArr[i];
      } else {
        temp[i + 1] = newArr[i];
      }
    }
    newArr = temp;
  }
  return newArr;
}

console.log(solution([3, 8, 9, 7, 6], 9));
