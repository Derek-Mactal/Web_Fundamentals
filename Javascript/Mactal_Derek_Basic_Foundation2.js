//1
function makeItBig(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
var newArr = makeItBig([-2, -1, 0, 1, 2, 3, 4]);
console.log(newArr);
//2

function lowHigh(arr) {
    var min = [0];
    var Max = [0];
    for (i = 0; 1 < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > Max) {
            Max = arr[i];
        }
    }
    console.log("low is" + min);
    return Max;
}
Max = lowHigh([2, 6, 7, -2, 0])
console.log(Max);

//3 
function arrValue(arr) {
    console.log("second to last value is:" + arr[arr.length - 2]);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            odd = arr[i];
            return odd;
        }

    }
}
var odd = arrvalue([4, 6, 8, 7, 1]);
console.log(odd);

//4
function double(arr) {
    var arrNew = [];
    for (i = 0; i < arr.length; i++) {
        var newVal = arr[i] * 2;
        arrNew.push(newVal);
    }
    return arrNew;
}
arrNew = double([4, 8, 16]);
console.log("New Array is..." + arrNew);

//5 
function replaceLast(arr) {
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length] = count;
    return arr;
}
var arr = replaceLast([3, 0, 6, 5, 2, -4, 4, 4]);
console.log("New array is..." + arr);

//6
function eveodd(arr) {
    var oddcount = 0;
    var evencount = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            oddcount++;
            if (oddcount >= 3) {
                console.log("Thats odd!");
            }
        }
        if (arr[i] % 2 == 0) {
            evencount++;
            if (evencount >= 3) {
                console.log("Even more so!");
            }
        }
    }
}
eveodd([1, 3, 5, 6, 8, 10]);
//7
//given an array, add 1 to every odd index of said array, after console.log each value and return arr
function addingOdd(arr) {
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr[i]++;
        }
    }
    console.log(arr);
    return arr;
}
addingOdd([0, 1, 2, 3, 4, 5]);
//8
// function that take array with strings, and replaces a string with a number: the # of characters from the PREVIOUS index
function previousLengths(arr) {
    for (i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1].length;

    }
    return arr;

}
var newArr = previousLengths(["hello", "dojo", "dojo"])
console.log(newArr);
//9
// function that adds 7 to array and gives new array 
function addSeven(arr) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        arr[i] += 7;
        newArr.push(arr[i]);
    }
    return newArr;
}
newArr = addSeven([4, 6, 5, 71])
//10
//
function reverse(arr){
    for(i=0; i<arr.length; i++){
        var temp = arr[i];
        arr[i] =arr[arr.length-i];
        arr[arr.length-i] = temp;
    }
    return arr;
}
console.log(reverse([3,1,6,4,2]))
//11

function arrNeg(arr){
    var arrNew = [];
    for(i=0; i<arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
            arrNew.push(arr[i]);
        }
        if(arr[i] <= 0 ){
            arrNew.push(arr[i]);
        }
    }
    return arrNew;
}
console.log(arrNeg([-3,2,0,-5]))

//12
//make function that takes array, prints "yummy" each time a value = "food", if no food values print  "im hungry"
function eat(arr){
    var count = 0
    for(i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count++;
        }
        if(count == 0){
            console.log("I'm Hungry");
            return;
        }
    }
}
eat([0, 0, 0, 0 ]);
//13
function swapTowardCenter(arr){
    var temp = 0;
    var tempTwo = 0; 
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp; 
    tempTwo = arr[2]; 
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = tempTwo;

    return arr;
}
console.log(swapTowardCenter([1,2,3,4,5,6,7]))


//14
function scaleArray(arr, num){
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(scaleArray([3,2,6,3] , 10))


