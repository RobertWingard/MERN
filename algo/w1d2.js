// bubbleSort()
/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/


const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr){ 
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length - i - 1; j++ ){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j +1] = temp
            } 
        }
    }
    return arr;
}


console.log(nums1);
bubbleSort(nums1);
console.log(nums1)

console.log(nums2);
bubbleSort(nums2);
console.log(nums2)

console.log(nums3);
bubbleSort(nums3);
console.log(nums3)

