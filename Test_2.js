function findLocation(x, arr){
    // count = 0;
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == x){
    //         count = i + 1;
    //     }
    // }
    // return count;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
           return i;
        }
    }
    return -1;
}
console.log(findLocation(7,[1,3,5,7,9]));

function findNumber(x, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            return x + " có trong mảng đã cho";
        }
    }
}

console.log(findNumber(7,[1,3,5,7,9]));