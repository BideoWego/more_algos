/*
Ease the array

https://practice.geeksforgeeks.org/problems/ease-the-array/0

Input : arr[] = {2, 2, 0, 4, 0, 8}
Output : 4 4 8 0 0 0

Input : arr[] = {0, 2, 2, 2, 0, 6, 6, 0, 0, 8}
Output :  4 2 12 8 0 0 0 0 0 0
*/

function ease(array) {
  let numZeros = 0;
  const eased = [];

  for (let i = 0; i < array.length; i++) {
    const a = array[i];
    const b = array[i + 1];
    if (a === 0) {
      numZeros++;
    } else if (a === b) {
      eased.push(a * 2);
      array[i + 1] = 0;
    } else {
      eased.push(a);
    }
  }

  while (numZeros) {
    eased.push(0);
    numZeros--;
  }

  return eased;
}

function easeInPlace(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const a = array[i];
    const b = array[i + 1];
    if (a === b) {
      array[i] = a * 2;
      array[i + 1] = 0;
    }
  }

  for (let i = 0, j = 0; i < array.length; i++) {
    const a = array[i];
    if (a !== 0) {
      const b = array[j];
      array[j] = a;
      array[i] = b;
      j++;
    }
  }
  return array;
}

console.log(ease([2, 2, 0, 4, 0, 8]));
console.log(ease([0, 2, 2, 2, 0, 6, 6, 0, 0, 8]));
console.log();
console.log(easeInPlace([2, 2, 0, 4, 0, 8]));
console.log(easeInPlace([0, 2, 2, 2, 0, 6, 6, 0, 0, 8]));
console.log();
console.log(easeInPlace([2, 2, 0, 4, 4]));
console.log(easeInPlace([0, 1, 2, 2, 0]));
