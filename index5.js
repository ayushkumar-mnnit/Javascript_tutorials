
// MODERN JAVASCRIPT (ECMA-SCRIPT):

/*
The full form of ECMA is European Computer Manufacturer's Association. ECMAScript is a Standard for scripting languages such as JavaScript, JScript, etc. It is a trademark scripting language specification. JavaScript is a language based on ECMAScript

JS was devleoped in 1996 but when it became popular then its standardisation was needed which was done in 1997 under ECMA, by then it came to be known as ECMAscript.

Then its 6 updated versions came till 2015, but the 2015 version popularly known as ECMA-script2015 or ES-6 became most popular
becoz it made various useful changes and the introduction of "Arrow function" was the most important feature of ES-6

now versions ES-7,ES-8,ES-9,ES-10,ES-11,ES-12 (from 2016-2021) have came till now


so in modern JS we mainly focus on ES-6

*/


// let vs const vs var keywords:

/* let and const are part of modern JS,

let : block scope--> can't change outside a particular block

var : function scope--> can't change outside a function

const : block scope--> can't change once declared

*/

// function sum(a,b){
//     var x=3
//   console.log(a+b)
// }
// // x=5
// console.log(x)

if(true)
{
    let a=23
}
console.log(a)
let a=34
console.log(a)
