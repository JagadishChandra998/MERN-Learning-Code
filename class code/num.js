// let oddNum =[];
// for(let i=51;i<=99;i++){
//     if (i % 2 !=0){
//         oddNum.push(i);
//     }
// }
// console.log(oddNum);

// let num = 3;
// let factorial = 1;
// for (let i = num; i >= 1; i--) {
//     factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(n){
//     if(n===0 || n===1){
//         return 1;
//     }
//     return n* factorial(n-1);
// }
// console.log(factorial(4))

function fibonacci(n){
    if(n ===0 || n===1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci (n-2);
}
