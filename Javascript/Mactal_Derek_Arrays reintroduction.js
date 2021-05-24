// 1 
function countAndPrint(arr , y){
    var count = 0 
    for(i=0; i<arr.length; i++){
        if(arr[i] > y){
            count ++; 
            console.log("# of array values greater than y is: " + count)
        }
    }
}
countAndPrint([1,5,2,3,6,1] , 5) 

//2
function mma(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    
    for(i=0; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    sum / arr.length;
    return "the max is: " + max + "the min is: " + min + "the avg is: " + sum
}

console.log(mma([1,3,4,5]));

//3 
function replaceNegatives(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
console.log( replaceNegatives([-6,-8,5,5]));

//4 
function removeVals(arr, x,y){

    for(i=arr.length; i>arr[y]; i--){
        arr[x] = arr[i];
    }
    return arr;
}
console.log(removeVals([1,2,3,4,5,6,7]), 2,4)
