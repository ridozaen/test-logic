function oneSwap(arr) {
  let newArr = arr.slice(0);
  newArr.sort();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) {
      count++;
    }
  }
  return count <= 2;
}

console.log(oneSwap([1, 5, 3, 3, 7])); //true
console.log(oneSwap([1, 3, 5, 3, 4])); // false
console.log(oneSwap([1, 3, 5])); //true
