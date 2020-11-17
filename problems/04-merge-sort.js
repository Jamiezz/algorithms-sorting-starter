// Implement Merge Sort
function merge(a, b) {
  // procedure merge( a as array, b as array )
  //    var result as array
  let result = []
  //    while ( a and b have elements )
  while (a.length > 0 && b.length > 0) {
    //       if ( a[0] > b[0] )
    if (a[0] > b[0]) {
      //          add b[0] to the end of result
      result.push(b[0])
      //          remove b[0] from b
      b.shift()
      //       else
    } else {

      //          add a[0] to the end of result
      result.push(a[0])
      //          remove a[0] from a
      a.shift()
      //       end if
    }
    //    end while
  }
  //    while ( a has elements )
  while (a.length > 0) {
    //       add a[0] to the end of result
    result.push(a[0])
    //       remove a[0] from a
    a.shift()
    //    end while
  }
  //    while ( b has elements )
  while (b.length > 0) {
    //       add a[0] to the end of result
    result.push(b[0])
    //       remove a[0] from a
    b.shift()
    //    end while
  }
  //       add b[0] to the end of result
  //       remove b[0] from b
  //    end while
  return result
  //    return result
  // end procedure
}

function mergeSort(array) {
  // procedure mergesort( a as array )
  //    if ( n == 1 ) return a
  if (array.length <= 1) return array
  //    /* Split the array into two */
  //    var l1 as array = a[0] ... a[n/2]
  let l1 = []
  for (let i = 0; i < (Math.floor(array.length / 2)); i++) {
    l1.push(array[i])
  }
  let l2 = []
  for (let i = Math.floor(array.length / 2); i < array.length; i++) {
    //    var l2 as array = a[n/2+1] ... a[n]
    l2.push(array[i])
  }

  l1 = mergeSort(l1)
  l2 = mergeSort(l2)

  return merge(l1, l2)
  // end procedure
}

module.exports = {
  merge,
  mergeSort
};
