// Implement Quick Sort
//   procedure quickSort(left, right)
function quickSort(array) {
  // your code here
  //   if the length of the array is 0 or 1, return the array
  if (array.length === 0 || array.length === 1) return array;
  //   set the pivot to the first element of the array
  let pivot = array[0];
  //   remove the first element of the array
  array.shift();
  //   put all values less than the pivot value into an array called left
  let left = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
  }
  //   put all values greater than the pivot value into an array called right
  let right = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    }
  }
  //   call quick sort on left and assign the return value to leftSorted
  let leftSorted = quickSort(left)
  //   call quick sort on right and assign the return value to rightSorted
  let rightSorted = quickSort(right)
  //   return the concatenation of leftSorted, the pivot value, and rightSorted
  return leftSorted.concat(pivot).concat(rightSorted)
  //return [...leftSorted, ...rightSorted]
  // end procedure
}


module.exports = {
  quickSort
};
