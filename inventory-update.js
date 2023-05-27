/*
  Compare and update the inventory stored in a 2D array against 
  a second 2D array of a fresh delivery. Update the current existing 
  inventory item quantities (in arr1). If an item cannot be found, 
  add the new item and quantity into the inventory array. 
  The returned inventory array should be in alphabetical order by item.
*/

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

  for (const item of arr2) {
    const [quantity, name] = item;

    const itemIndex = arr1Mapped.indexOf(name);

    if (itemIndex !== -1) {
      arr1[itemIndex][0] += quantity;
    } else {
      arr1.push([quantity, name]);
    }
  }

  return arr1.sort((a, b) => a[1].localeCompare(b[1]));
}

const result = updateInventory(curInv, newInv);
console.log(result);
