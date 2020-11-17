// Implement Selection Sort

// Implement swap without looking at bubble sort
// Set min to location 0
// Then search for minimum element in list
// Swap with value at min location
// Increment min to point to next element
// Repeat until sorted

function swap(arr, index1, index2) {
  [ arr[index2], arr[index1] ] = [ arr[index1], arr[index2] ]
}

function selectionSort(list) {
  let min = 0;
  for (let i = 0; i < list.length - 1; i++) {
    if(list[i] < list[min]) {
      swap(list, min, i);
      min = i + 1;
    }
  }

}

let testArr = [1, 4, 3, 2]

module.exports = {
  selectionSort,
  swap
};
