//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
//Symbol() is designed to guarantee uniqueness, so two different calls can never be equal

// const bigNumber = 3456543576654356754n 
//we use n in the last of bignumber and javascript directly knows it's bigINT



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//objects stored in scope{}
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/
// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (it uses primitive data types) & heap (it uses non-primitive data types)
//and when some data goes in STACK then you get only COPY and the data 
// HEAP then you get reference of the original data

let youtubename ="bharat@gmail.com"//it get stored in stack as a original value
let myanothername=youtubename//here we say anothername=youtubename
//myanothername="pratap@gmail.com"//and now in third condition i want to put something in anothername
console.log(youtubename);
console.log(myanothername);

let userone={
    email:"xyz@.com",
    phone:789654123
}
let usertwo=userone//now here i state that usertwo= user one
usertwo.phone=4912592191919//to access any object just put dot and name of the object here it is phone 
console.log(userone.phone);//now in usertwo data is copied for both userone and usertwo 
console.log(usertwo.phone);

