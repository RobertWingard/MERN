// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let arr3 = []

    for (let i = 0; i < arr1.length; i++)
        if (arr3.indexOf(arr1[i]) == -1)
            arr3.push(arr1[i])

    for (let i = 0; i < arr2.length; i++) {
        if (arr3.indexOf(arr2[i]) == -1)
            arr3.push(arr2[i])
    }
    return arr3;
}




// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])
// [ 1, 3, 4, 5, 8, 10 ]




mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]