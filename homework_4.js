//1. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
let array = [1, [3, 4, [1, 2]], 10]
//let array = [14, [1, [[[3, []]], 1], 0]]
function concat (arr){
  let newArr = []
 
  for(let i = 0; i < arr.length; i++){
  if(typeof arr[i] !== "object"){
    newArr.push(arr[i])
  }
  for(let j = 0; j < arr[i].length; j++){
    if(typeof arr[i][j] !== "object"){
      newArr.push(arr[i][j])
    }
  for(let k = 0; k < arr[i][j].length; k++){
    if(typeof arr[i][j][k] !== "object"){
      newArr.push(arr[i][j][k])
    }
  }  
  }
  }
  return newArr
}
console.log(concat(array))
/// Davit jan yes recursiayi het chem barishum))

//2. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function sum (num){
  let result = 0
  while(num){
    result += num % 10
    num = Math.floor(num / 10)
  }
  if(result < 10){
    return result
  }else{
    return sum(result)
  }
}
console.log(sum(999999999999))
// ays angam recursiayov stacvec

//3. Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

let array = [50,40,30,22,12]
function rotate (arr, n){
  let arrStart = []
  let arrEnd = []
  let rotArr = []
  for(let i = 0; i < arr.length; i++){
    arrStart = arr.slice(0,n)
    arrEnd = arr.slice(n,arr.length)
    rotArr = arrEnd.concat(arrStart)
  }
  return rotArr
}
console.log(rotate(array, 2))

//4. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

let object = {
  a: "1",
  b: "2",
  c: "2",
  d: "3"
}
function invert (obj){
  let o = {}
  let arr = []
  for(let key in obj){
  o[obj[key]] = key
  if(obj.key === obj.key){
    arr.push(obj.key)    
  }
  }
  return o
}
console.log(invert(object))
// arrayi pahy chkaroxaca 


//5. Given the list of the following readers: 
//Output the books sorted by the percent in descending order which readStatus is true.

let array = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
];

function sort (arr){
let trueArr = []
for(let i = 0; i < arr.length; i++){
  if(arr[i].readStatus === true)
  trueArr.push(arr[i])
}
trueArr.sort(function (a,b){
  if(a.percent > b.percent){
    return -1
  }
})
return trueArr
}
console.log(sort(array))