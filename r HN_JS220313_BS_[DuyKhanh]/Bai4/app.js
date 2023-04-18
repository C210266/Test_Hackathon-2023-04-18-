// Bai4

// Cach 1
let arr = [3,25,38,49,13];
// console.log(arr.sort((a,b) =>a-b));

// Cach2

// Selection sort

for(let i = 0; i < arr.length-1; i++){
    let min = i;
    for(j = i+ 1; j < arr.length  ;j++){
        if(arr[j]<arr[min]){
            min =j
        }
       [arr[i], arr[min]] = [arr[min],arr[i]];
    }
}
console.log(arr);
