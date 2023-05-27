const curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

const newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

function updateInventory(arr1, arr2) {
  const arr1Mapped = arr1.map(it => it[1]);

  for (let i = 0; i < arr2.length; i++) {
    const [quantity, name] = arr2[i];

    const itemIndex = arr1Mapped.indexOf(name);

    if (itemIndex !== -1) {
      arr1[itemIndex][0] += quantity;
    } else {
      arr1.push([quantity, name]);
    }
  }

  return arr1;
}

const result = updateInventory(curInv, newInv);
console.log(result);
