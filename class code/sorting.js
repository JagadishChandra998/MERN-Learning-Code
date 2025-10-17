// function main(){
//     let arr =[1,6,8,4,5,6,2,5,110]
//     arr.sort((a,b) =>a-b);

//     process.stdout.write("sort");
//     arr.forEach()

// }


// function sort(arr,n){
//     var i=0;
//     while(i<n){ 
//         var correct =arr[i] -1;
//         if(arr[correct] !=arr[i]){
//             swap(arr,i,correct);
//         }
//         else{
//             i++
//         }
//     }
// }

// function swap(arr,i,correct){
//     var temp =arr[i];
//     arr[i] =arr[correct]
//     arr[correct]= temp;
// }
// var arr =[2,6,1,8,4,7,9]
// var n=7

// sort(arr,n);
// for(var i=0;i<n;i++){
//     console.log(arr[i]);
// }


function rotate(arr, d) {
    let n = arr.length;
    for (i = 0; i < d; i++) {
        let last = arr[n - 1];
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1]
            console.log(arr)
        }
        arr[0] = last;
    }
}
let arr = [1, 2, 3, 4, 5, 6]
let d=2;
rotate (arr,d);

