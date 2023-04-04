function countNumbers(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "a" || arr[i] == "o" || arr[i] == "e" || arr[i] == "u" || arr[i] == "i"){
            count++;
        }
    }
    if(count > 0){
        return count;
    }
    else {
        return false;
    }
}

console.log(countNumbers("eretyrutiyolikujhyn"));