let score = "bharat"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN(Not an Number)
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "bharat" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " bharat"//want to give space b/w two strings just use space before either first string or second string 

let str3 = str1 + str2
// console.log(str3);

console.log("1" + 2);//here it doesn't make sense it just give output 12
console.log(1 + "2");//here it doesn't make sense it just give output 12
console.log("1" + 2 + 2);//if you have more than 2 valuesand  and use "" first place then it just give 122 
console.log(1 + 2 + "2");//but if use "" on last then it add all those value who doesn't have "" and put it there like here output is 32

console.log( (3 + 4) * 5 % 3);//more readable

console.log(+true);//here the value is 1
console.log(+"");//here the value is 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion