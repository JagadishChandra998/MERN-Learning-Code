// largest number

// function largest(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

//  const arr = [1, 2, 3, 4, 58, 9, 6, 7, 5, 588, 99];
//  console.log (largest(arr));

// smallest number

// function smallest(arr){
//     let small=arr[0];
//     for(let i=1;i<=arr.length;i++){
//         if(arr[i] < small){
//             small =arr[i];
//         }
//     }
//     return small;
// }
//  const arr = [ 2, 3, 4, 58, 9, 6, 7, 5, 588,1, 99];
//  console.log (smallest(arr));


// second largest number   method 1

// function secondLargest(arr) {
//     let max = -1;
//     let secondmax = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (secondmax < arr[i] && arr[i] !== max) {
//             secondmax = arr[i];
//         }
//     }
//     return secondmax;
// }
// const arr = [2, 3, 4, 58, 9, 6, 7, 5, 588, 1, 99];
// console.log(secondLargest(arr));


// second largest number   method 2

// const arr =[1,2,3,4,5,6,7]
// for(let i=arr.length;i>=arr[0];i--){
//     console.log (i);
// }

// reverseArray    method 1

// function reverseArr(arr) {
//     let left = 0; right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//     }
//     left++;
//     right--;
// }
// const arr = [1, 2, 3, 4, 5, 6, 7]
// reverseArr(arr)
// console.log(arr.join(""))


// reverseArray    method 2

// function reverseArr(arr) {
//     let n = arr.length;
//     for (let i = 0; i < arr.length/2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[n - i - 1];
//         arr[n - i - 1] = temp;
//     }
//     return arr;
// }
// const arr = [1, 2, 3, 4, 5, 6,7]
// reverseArr(arr)
// console.log(arr.join(""))
