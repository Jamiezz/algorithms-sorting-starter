// Implement Selection Sort

// Implement swap without looking at bubble sort
// [check!] Set min to location 0 (assume its minimum)
// []Then search for minimum element in list
// Swap with value at min location
// Increment min to point to next element
// Repeat until sorted

function swap(arr, index1, index2) {
  [ arr[index2], arr[index1] ] = [ arr[index1], arr[index2] ]
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let minIdx = i;
    for (let j = i+1 ; j < list.length; j++) {
      if(list[j] < list[minIdx]) {
        minIdx = j
      }

    }
    swap(list, i, minIdx)
  }
  return list
}

let testArr = [1, 4, 3, 2]

              // i
                    //  j
              //minIdx=3
//let testArr = [1, 2, 3, 4]


module.exports = {
  selectionSort,
  swap
};
