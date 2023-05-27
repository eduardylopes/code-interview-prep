/*
  Return the number of total permutations of the provided 
  string that don't have repeated consecutive letters. 
  Assume that all characters in the provided string are each unique.

  For example, aab should return 2 because it has 6 total 
  permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) 
  don't have the same letter (in this case a) repeating.
*/

function swap(index1, index2, arr) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function checkRepeats(str) {
  const exp = /(\w)\1+/g;
  return exp.test(str);
}

function generate(n, arr, result) {
  if (n === 1) {
    const str = arr.join('');
    const itRepeats = checkRepeats(str);

    if (!itRepeats) result.push(str);
  }

  for (let i = 0; i < n; i++) {
    generate(n - 1, arr, result);
    n % 2 === 0 ? swap(i, n - 1, arr) : swap(0, n - 1, arr);
  }

  return result;
}

function permAlone(str) {
  const arr = str.split('');
  const result = [];

  return generate(arr.length, arr, result).length;
}

const result = permAlone('foo');
console.log(result);
