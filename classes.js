//1.------------------------

class Author {
  constructor(surname) {
    this.surname = surname
  }
  name = "Raffi"
  gender = "male"
  email = "raffi@gamil.com"
  get gender(){
    return this._gender
  }
  set gender(m){
    this._gender = m
  }
  toString() {
    return `The Author's name is ${this.name}`
  }
}
let authorClass = new Author("chgitem")

console.log(authorClass)

console.log(authorClass.toString())

class Book extends Author {
  super(surname) {
    this.surname = surname
  }
  title = "Samvel"
  price = 1000
  quantity = 9
  get price() {
    return this._price
  }
  set price(dollars) {
    this._price = dollars
  }
  getProfit = function() {
    let profIt = this.quantity * this.price
    return `Profit of sale = ${profIt}$`
  }
  toString() {
    return `The book's title is ${this.title}`
  }
}
let bookClass = new Book("chgitem")

console.log(bookClass.getProfit())

console.log(bookClass)
console.log(bookClass.toString())

//2.--------------------------

class Account {
  id = "1234"
  name = "Aram"
  balance = 500
  set name(n) {
    this._name = n
  }
  set balance(dollars) {
    this._balance = dollars
  }
  get account(){
    return `id = ${this._id}, name = ${this._name}, balance = ${this._balance}`
  }
  credit = function(amount){
    let newBalance = this.balance + amount
    return `updated balance = ${newBalance}$`
  }
  debit = function(amount){
    if(this.balance > amount){
      let lessBalance = this.balance - amount
      return `uptaded balance = ${lessBalance}$`
    }else {
      console.log("Amount exceeded balance")
    }
  }
  transferTo = function (anotherAccount, amount){
    if(this.balance > amount){
    let forTransferTo =  this.balance - amount
    forTransferTo + anotherAccount._balance// es pahy chstacvec
    return forTransferTo
    }else{
      console.log("Amount exceeded balance")
    }
  }
toString() {
    return `Balance of this account = ${this.balance}`
  }
}
class AnotherAccount {
  balance = 100
}

let accountClass = new Account
let anotherAccountClass = new AnotherAccount
console.log(accountClass)
console.log(accountClass.credit(50))
console.log(accountClass.debit(100))
console.log(accountClass.toString())
console.log(accountClass.transferTo(anotherAccountClass, 90))
console.log(anotherAccountClass)

//3.-----------------
//teri e
class Person {
  firstName = "Usanox"
  lastName = "Yan"
  gender = "female"
  age = "19"
  get info(){
    return `${this.firstName},${this._lastName},${this._gender},${this._age}`
  }
  set age(years){
    this._age = years
  }
  toString(){
    return `person is ${this.age}`
  }
}

let personClass = new Person
console.log(personClass)
console.log(personClass.toString())

class Student extends Person {
  program = ["ararka1", "ararka2"]
  year = 1
  fee = 400000
  data = {
    ararka1: 51,
    ararka2: 52
  }
  passExam = function(program, grade){
    if(this.data.ararka1 >= 50){
      return `${this.firstName} has passed the ararka1`
    }else{
      return `${this.firstName} hasn't passed the ararka1`
    }
  }
}
let studentClass = new Student
console.log(studentClass)
console.log(studentClass.passExam())
