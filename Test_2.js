function findNumber(x, arr){
    count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            count = i + 1;
        }
    }
    return count;
}