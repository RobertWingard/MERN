// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) { }

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) { 
    var arrLeft = 0;
    var arrRight = 0;
    var finalArr = [];
    while (arrLeft < arr1.length && arrRight < arr2.length){
        if (arr1[arrLeft] < arr2[arrRight]){
            finalArr.push(arr1[arrLeft]);
            arrLeft++;
        } else {
            finalArr.push(arr2[arrRight]);
            arrRight++;
        }
    }

    for (arrLeft; arrLeft < arr1.length; arrLeft++ ){
        finalArr.push(arr1[arrLeft]);
    }

    for (arrRight; arrRight < arr2.length; arrRight++ ){
        finalArr.push(arr2[arrRight]);
    }

    return console.log(finalArr);
}
mergeSortedArrays(arrLeft, arrRight)
mergeSortedArrays(mergeArr2, mergeArr1)
mergeSortedArrays(mergeArrA, mergeArrB)