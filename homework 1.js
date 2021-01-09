/*1. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)*/
/*let array = [1, 1, 2, 2, 3]

function frequency (arr){
  let arr1 = []
  let count = 1
  for(let i = 0; i < arr.length; i++){
    
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] === arr[j]){
        count++
      }
    }
  }

  return count
}
console.log(frequency(array))*/
//chstacvec

/*2. Given an array of strings and numbers. Print the number of integers and the number of strings in the array.*/

/*let array = [1,2,'hi',5,'asdsadsa',4,5,'fgf']
const numStr = arr =>{
  let num = 0
  let str = 0
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      num++
    }
    if(typeof arr[i] === 'string'){
      str++
    }
    
  }
    console.log(`Numbers: ${num}`)
    console.log(`Strings: ${str}`)
    return arr
 
}
console.log(numStr(array))*/

/*4. Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string․If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).*/

/*let string = 'A revolution1 without dancing is a revolution2 not worth having.'
const sentence = str => {
  let arr = []
  arr = str.split(" ")
  let longest = ""
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longest.length) {longest = arr[i]}
  }

  return longest
}

console.log(sentence(string))*/

/*5. Write a function to find longest substring in a given a string without repeating characters except space character.
If there are several, return the last one. Consider that all letters are lowercase.*/

/*let string = "aram asdfg hjkla"
const longestSubString = str => {
  let string = "";
  let  ss = "";
  let  namestring = str.split("");

    for(j=0;j<namestring.length;j++) {
        for(i=j;i<namestring.length;i++) {
            if(string.includes(namestring[i]))
                break;
            else
                string+=namestring[i];
         }
         if(ss.length<string.length)
             ss=string;
         string="";
    }
    return ss;
    }
console.log(longestSubString(string))*/
//google ic em nayel , "chem haskacel"


/*6. Write a function to compute a new string from the given one by moving the first char to come after the next two chars, so abc; yields bca;. Repeat this process for each subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.*/

/*let string = "123456789"
function compute (str){
  let newStr = ""
  for (let i = 0; i < str.length; i++){
    if(i === 2){
      newStr = str.slice(1)// + str.slice(2)
      continue
    }
    if(i === 5){
      newStr = str.slice(4)
    }
    
  }
  return newStr
}
console.log(compute(string))*/
///chi stacvum

//7. Write a function, which receives an array as an argument which elements arrays of numbers. Find biggest negative number of each array. Return product of that numbers.If there is not any negative number in an array, ignore that one. Check that items of the given array are arrays.

/*let array = [[2, -3, -9, 0], [1, 2], [-14 , -11, 0]]

function negativeNums (arr){
  let product = 1
  let negativeArr = []

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] < 0){
        negativeArr.push(arr[i][j])
       
      }else if(!arr[i][j] < 0){return "No negatives"}//ays paymany vonc vor sxal em drel
    }
    }
    console.log(negativeArr)

    let max = negativeArr[0]
    for (i = 0; i < negativeArr.length; i++) {
        if (max < negativeArr[i]) {
            max = negativeArr[i]
        }
    }
    console.log(`maxElement is ${max}`) 
    let min = negativeArr[0]
    for (i = 0; i < negativeArr.length; i++) {
        if (min > negativeArr[i]) {
            min = negativeArr[i]
        }
    }
    console.log(`minElement is ${min}`) 
    product = min * max
    return `product == ${product}`
  }

console.log(negativeNums(array))*/
//minimumi ev maximumi artadryaln em hashvel

//8.Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

/*let array = [5, 9, 23, 0, -2, -1]
function subsets (arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr.length <= 2){return arr}
    else{
      
    }
  }
}*/
//chstacvec