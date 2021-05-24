// 1
function counter() {
    for (i = 1; i < 256; i++) {
        console.log(i)
    }
}
counter();

// 2
var sum = 0;
function even() {
    for (i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}
sum = even();
console.log(sum);

// 3
var sum = 0;
function odd() {
    for (i = 1; i <= 5000; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    return sum;
}
sum = odd();
console.log(sum);

// 4
var sum = 0;
function iterate(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var arr = iterate([1, 2, 5])
console.log(arr)
// 5

function max(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            arr[0] = arr[i];
        }
    }
    return arr[0];
}
var maximum = max([5, 2, 6, 1, 10]);
console.log(maximum);

// 6
var avg = 0;
var sum = 0;
function findavg(arr) {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
    }
    return avg;
}
avg = findavg([5, 2, 3, 5, 6])
console.log(avg)

// 7
var arr = [];
function oddArr() {
    for (i = 0; i <= 50; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}
arr = oddArr();
console.log(arr)

// 8
var count = 0;
function greaterThan(arr, y) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
count = greaterThan([3, 6, 8, 9, 10, 23, 4], 8);
console.log(count);

// 9
function sqr(arr) {
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    return arr;
}
var newArr = sqr([5, 3, 2, 1, 3, 5]);
console.log(newArr);

// 10
function replaceNeg(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
var newArr = replaceNeg([-3, -4, -6, 66, 2, 3, -100]);
console.log(newArr);

// 11
var mx = 0
var min = 0
var sum = 0
var avg = 0
function mma(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[0] < arr[i]) {
            arr[0] = arr[i]
            mx = arr[0];
        }
        if (arr[0] > arr[i]) {
            arr[0] = arr[i]
            min = arr[0];
        }
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var arrNew = [mx, min, avg];
    return arrNew;
}
var arrNew = mma([5, 3, 2, 6, 7, 3, 2]);
console.log(arrNew);

// 11
function swap(arr){
    var temp = arr[0]
    for(i=0; i<arr.length; i++){
        // var temp = arr[0];
        arr[0] = arr[arr.length-1-i];
        arr[arr.length-1] = temp;
        
    }
    return arr;
}
var newArr = swap([4,5,8,9,2,88])
console.log(newArr);
// 1