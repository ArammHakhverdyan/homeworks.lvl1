//1. Write a recursive function to determine whether all digits of the number are odd or not.
//---aranc recursia
/*function areAllDigitsOdd (num){
  let number = num + ""
  for(let i = 0; i < num.length; i++){
    if(num[i] % 2 === 0){
      return false
    }
  }
  return true
}
console.log(areAllDigitsOdd("1537951345"))*/

///recursiayov sxala ashxatum
function areAllDigitsOddRec (num){
  while(true){
    num = (num - (num % 10)) / 10
    if((num % 10) % 2 !== 0){
      return areAllDigitsOddRec(num)
    }else{
      return false
    }
  }
  return true
}
console.log(areAllDigitsOddRec(1357))
//2. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․
//recursiayov chi chkaroxaca
let array = [56, -9, 87, -23, 0, -105, 55, 1];
function toFindMinPositEl (arr){
  let positEls = []
  let minEl = Infinity
  for(let i = 0;i < arr.length; i++){
    if(arr[i] >= 0){
      positEls.push(arr[i])
    }
    for(let j = 0; j < positEls.length; j++)
    if(minEl > positEls[j]){
      minEl = positEls[j]
    }   
  }
  return minEl 
}
console.log(toFindMinPositEl(array))

//3. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.
let array = [1,2,3,5,4,6,7]
function indexOfViolated (arr){
  let index
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i+1]){
      index = arr.indexOf(arr[i])
    }
}
return index
}
console.log(indexOfViolated(array))

//4. Write recursive, memorized function to get n-th Fibonacci number.

function fibonacci (n){
  if(n < 2) {
    return n;
  }else{
  return n = fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(13))

//5. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

let array = [6, 78, 'n', 0, 1]
function removeTheFirstEl (arr){
  return arr.slice(1,arr.length)
}

console.log(removeTheFirstEl(array))