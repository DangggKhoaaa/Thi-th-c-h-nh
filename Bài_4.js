function swap(arr){
    let newArr = [];
    let temp;
    let first = 0;
    let last = arr.length - 1;
    while(first < last){
        temp = first;
        first = last;
        last = temp;
        first++;
        last--;
        }
        return
    }
console.log(swap([1,2,4,5]))