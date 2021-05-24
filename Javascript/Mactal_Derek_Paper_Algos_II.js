function foo(x,y){
    return 5;
  }
  console.log(foo(5,5))
// 5

function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8));

//output: [2,2,5], 2,2,5 [6,8,5] [6,8,5]

function foo(x){
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
var y = foo(2);
y.push(5);
console.log(y);

//output: [2,2,5]

function foo(x){
    if(x[0] <x [1]) {
        return true;
    }
    else {
        return false;
    }
}
var b = foo([2,3,4,5])
console.log(b);

//output: true

function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            x[i] = "Coding"
        }//no return statement, so no value returned when calling the function 
    }
}
console.log(foo([1,2,3,4]))

//output: undefined

function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 5){
            x[i] = "Coding"
        }
        else if(x[i] < 0){
            x[i] = "Dojo"
        }
    }
    
}
console.log(foo([5,7,-1,4]))
//output: undefined

function foo(x){
    if(x[0] > x[1]) {
        return x[1];
    }
    return 10;
}
var b = foo([5,10])
console.log(b);

//output: 10

function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
        sum = sum + x[i];
        console.log(sum);
    }
    return sum;
}
//output: null?

function printAverage(x){
    var sum = 0;
    for(i=0; i<x.length; i++){
        sum += x[i]; //we want the for loop run the amount of times we want it to run BEFORE we return anything
        
    }
    return sum/x.length;
}
var y = printAverage([1,2,3]);
 console.log(y); // should log 2

y = printAverage([5,2,8]);
 console.log(y); // should log 5

function returnOddArray(){
    var arr = [];
    for(i=1; i<256; i++){
        if(i%2 == 1){
            arr.push(i);
        }
    }
    return arr;
}
var y = returnOddArray();
console.log(y);


function squareValue(x){
    for(i=0; i<x.length; i++){
        x[i] = x[i]**2;
    }
    return x;
}
var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]

y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]