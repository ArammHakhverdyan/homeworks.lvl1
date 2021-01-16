//Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b).

function nums (a,b,num){
  let newArr = []
  for(let i = a; i <= b; i = i + (b - a) / (num-1)){
    newArr.push(i)
  }
  return newArr
}
console.log(nums(10,100,3))
console.log(nums(1,5,6))

// Given an array of numbers. Find the index of the second maximum element.

let array = [-60, 2, 43, -18, 115, 114 -19, 36, 7, 56 ]
function indexOfSecondMaxEl (arr) {
  let max = arr[0]
  for(let i = 0; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i]
    }else{
      max 
    }
  }
   return arr.indexOf(max)
}
console.log(indexOfSecondMaxEl(array))
//secondy chkaroxaca

//Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that padding amount &lt;= length of array.

//sxal a ashxatum
let array = [1, 2, 3, 4] // [1,1,1,1,2,3,4,4,4,4]
function repeat (arr, padAmount, repCount) {
  let start = arr.slice(-Infinity, arr[0])
  let end = arr.slice(arr.length-1, Infinity)
  let newArr = []
    //if(padAmount <= arr.length) return "Invalid"
    for(let i = 0; i <= repCount; i++){
      newArr = newArr.concat(start).concat(arr).concat(end)
    }
    return newArr
  }
console.log(repeat(array,1,3))


//Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

let array = [10, 25, 16, -5, 30, 15, 24]

function largerThanTheNum (arr, num){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > num){
    newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(largerThanTheNum(array,16))

//Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

function isAllDigitsAreEven (num) {
  let number = num + "";
  for(let j = 0; j < number.length; j++){
    if(number[j] % 2 === 1){
      return false
    }
  }
  return true
}

function evenDigits (a,b){
  let result = []
  for(let i = a; i <= b; i++){
    if(isAllDigitsAreEven(i)){
      result.push(i)
  }
    }
  if(result.length > 0){
    return result.join(",")
  }else{
    return "Such values do not exist."
  }  
  return result
}

console.log(evenDigits(19,42))
