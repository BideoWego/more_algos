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

console.log(ease([2, 2, 0, 4, 0, 8]));
console.log(ease([0, 2, 2, 2, 0, 6, 6, 0, 0, 8]));
