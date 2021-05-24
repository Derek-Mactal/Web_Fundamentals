//Sigma given a number, returns the sum of all positive integers up to the given number
function sigma(num){
    var sum = 0;
    for(i=0; i<=num; i++){
        sum += i;
    }
    return sum;
}
console.log(sigma(3));

//Factorial function that takes number, 
function factorial(num){
    var product = 1;
    for(i=1; i<=num; i++){
        product *= i;
    }
    return product;
}
console.log(factorial(7))

//Fibonacci function 
function fibonacci(num){
    var newArr = [];
    newArr[0] = 0;
    newArr[1] = 1;
    for(i=2; i<=num; i++){
        newArr[i] = newArr[i-2] + newArr[i-1]; 
    }
    return newArr;

}
console.log(fibonacci(9));
//Return Second to last element of array 

function secondLast(arr){
    if(arr.length <= 1){
        return "null";
    }
    return arr[arr.length-2];
}
console.log(secondLast([1,2,3,4]))

//return the element that is "n" times from the arrays end 
function returnNth(arr,num){
    if(num >= arr.length){
        return "null";
    }
    return arr[arr.length-num];
}
console.log(returnNth([3,4,5,6] , 4))

//return second largest element of array, if too short return null
function secondLargest(arr){
    var max = arr[0];
    var sec = arr[0]; 
    for(i=0; i<arr.length; i++){
        if(arr.length<2){
            return null;
        }
        else if(max < arr[i]){
            sec = max;
            max = arr[i]; 
        }
        else if(arr[i]>sec && arr[i]<max){
            sec = arr[i];
        }

    }
    return sec;
}

console.log(secondLargest([1,2,3,4,5,6,7]));


//
function double(arr){
    var next = arr[0]
    for(i=0; i<6; i++){
        next = arr[i+1];
        arr[i+1] = arr[i]
        next = arr[i+2];
        next = arr[i+3];
    }
    return arr;
}
console.log(double([1,2,3]));