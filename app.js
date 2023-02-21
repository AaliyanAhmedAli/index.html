
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Find a Small Number Task 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// **************Dont Use a Method**************
var arr = [1, 4, 7, 10, 13, 16]
smallest = arr[0];

for (var i = 0; i < arr.length; i++){

if (i[0] < smallest){
    smallest = arr[0]
}
}
console.log("The smallest number in the array is:", smallest)

// **************Use a Method**************

var find_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
small_Number = Math.min (find_Number[0])
console.log(small_Number)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Find a Large Number Task 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// **************Dont Use a Method**************

var seriesArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];

var largestNum = seriesArray[0];

for (let i = 1; i < seriesArray.length; i++) {
    if (seriesArray[i] > largestNum) {
largestNum = seriesArray[i];
}
}
console.log(largestNum)

// **************Use a Method**************

var find_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Large_Number = Math.max (find_Number.length)
console.log(Large_Number)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Find a Missing Number Task 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// **************Dont Use a Method**************

var a = [21,22,23,24,25,26,28,29,30]
for (i = 0 ; i < a.length++ ; i ++){
    
    
if (a[i] < a[i+1] && a[i]+1 != a[i+1]){
    console.log(a[i]+1)
}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Sorte a Number Number Task 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// **************Dont Use a Method**************

var numberArray = [5, 2, 9, 1, 5, 6, 3];

for (let i = 0; i < numberArray.length - 1; i++) {
for (let j = 0; j < numberArray.length - i - 1; j++) {
if (numberArray[j] > numberArray[j + 1]) {
var temp = numberArray[j];
numberArray[j] = numberArray[j + 1];
numberArray[j + 1] = temp;
}
}
}

console.log(numberArray);

// **************Use a Method**************

var number = [ 9, 8, 7, 6, 5, 4, 3, 2, 1]
number.sort ()
console.log(number)

