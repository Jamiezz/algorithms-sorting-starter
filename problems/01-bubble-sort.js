// Implement Bubble Sort

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let swapped = false
// prior to adding array.length-1 we did get the correct answer at the cost of an infinite loop
  for (let i=0; i<array.length; i++) {
    if (array[i] > array[i+1]) {
      // console.log('We made it to the if statement', array[i], array[i+1])
      // console.log(array)
      swap(array, i, i+1)
      swapped = true
      // console.log(array)
    } else if (i === array.length - 1 && swapped === false){
      // else if we made it to the end of the array
      // and didn't swap anything
      // then return array
      // console.log('in first else if')
      return array
    } else if (i === array.length - 1 && swapped) {
      // else if we get to end
      // and did swap
      // then need to loop again to verify it's sorted
      // so we set index back to beginning of array
      // and loop again

      i = 0
      swapped = false
    }

  }


}

console.log(bubbleSort([1, 4, 3, 2]));

module.exports = {
  bubbleSort,
  swap
};
