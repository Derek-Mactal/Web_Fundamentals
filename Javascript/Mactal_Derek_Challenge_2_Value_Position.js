var testArr = [6,3,5,1,2,4]
for(i=0; i<testArr.length; i++){
    var newvalue = testArr[i] * i;
    testArr[i] = newvalue; 
}

console.log(testArr);