/*
### Task:

Write a function which takes an array of numbers and returns the two separate averages of negative numbers and positive numbers found in the array.

Return the averages as two elements of an array, or, if you know objects, as properties `averageOfPositives` and `averageOfNegatives`

Use the value `null` to indicate when an average is not possible - e.g. when there are no positive numbers.

Zero values are not positive or negative. You should exclude them from your calculations.

### Example:

`calcAveragesNegativeAndPositive([10, -100, 20, -200, -3])` 
should return either the array

 `[15, -101]`

*or* the object

`{ averageOfPositives: 15, averageOfNegatives: -101 }`

where *`15`* is the average of all the positive numbers (10, 20)  and *`-101`* is the average of all the negative numbers (-100, -200, -3)
*/

/*
PSEUDOCODE

name: calculateAverages
input: arrOfNums
output: averages, an object with two numbers 
*/

/*
Function body

Function calculateAverages (arrOfNums)  
Declare positiveArray = []
Declare negativeArray = []
Set positiveArray = arrOfNums filtered for positive numbers (by calling isPositive)
Set negativeArray = arrOfNums filtered for negative numbers (by calling isNegative)
Create empty object -> posAndNegAverages
posAndNegAverages set key averageOfPositives to the return of getAverage (positiveArray) or null
posAndNegAverages set key averageOfNegatives to the return of getAverage (negativeArray) or null
return posAndNegAverages

Function getAverage (arr) 
Declare sum = arr reduced to sum of all numbers inside
Declare average = sum divided by the length of the array
Return average

Function isPositive (num)
 Return num > 0

 Function isNegative (num)
 Return num < 0



*/




function calculateAverages(){
 return 0;
}

module.exports = calculateAverages