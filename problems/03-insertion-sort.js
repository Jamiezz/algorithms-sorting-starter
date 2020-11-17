// Implement Insertion Sort
// If it is the first element, it is already sorted. return 1;
// Pick next element
// Compare with all elements in the sorted sub-list
// Shift all the elements in the sorted sub-list that is greater than the value to be sorted
// Insert the value
// Repeat until list is sorted

//   procedure insertionSort( A : array of items )
function insertionSort(list) {
  //    int holePosition
  //    int valueToInsert
  let holePosition;
  let valueToInsert;
  //    for i = 1 to length(A) inclusive do:
  for (let i = 1; i < list.length; i++) {
    //       /* select value to be inserted */
    //       valueToInsert = A[i]
    //       holePosition = i
    valueToInsert = list[i];
    holePosition = i;
    //       /*locate hole position for the element to be inserted */

    //       while holePosition > 0 and A[holePosition-1] > valueToInsert do:
    while (holePosition > 0 && list[holePosition - 1] > valueToInsert) {
      //          A[holePosition] = A[holePosition-1]
      list[holePosition] = list[holePosition - 1];
      //          holePosition = holePosition -1
      holePosition = holePosition - 1;
      //       end while
    }

    //       /* insert the number at hole position */
    //       A[holePosition] = valueToInsert
    list[holePosition] = valueToInsert;

    //    end for
  }

  // end procedure
  return list;

}

let testList = [5, 3, 9, 1, 6]
console.log(insertionSort(testList));


module.exports = {
  insertionSort
};
