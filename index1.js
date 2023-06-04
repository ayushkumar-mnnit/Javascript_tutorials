
console.log("hello world")

// This is the first JS code , you can run it by writing "node .\index.js" in terminal or directly by run button if code runner extension is installed.


// VARIABLES AND DATA-TYPES:


// in programming languages like C/C++ , we write  "int number=234" then int represents data type of variable-> integer , number-> variable name and 234 as value or data stored in variable "number" but in javascript we write "var number=234"  which means number is variable which stores 234 but doesn't tell what type of data is 234.


var num=234 // (var-> variable or key , number-> variable name , 234-> value)

console.log(num)
console.log(typeof(num))  // typeof() -> can be used for finding the data type of variable.

var myName="Ayush"
console.log(myName)
console.log(typeof(myName))


/* primitive data types in JS:

undefined
Boolean
Number
String
Symbol
BigInt (part of modern javascript)

*/

/* rules for assigning variable names:

1. starting character-> letter,underscore, dollar. Integer can't be used
2. rest characters can be letter,underscore, dollar,integers. spaces and special characters are not allowed.
3.variable names are case sensitive and their is no restriction on the length of name.
4.reserved keywords in JS can't be used


*/


//example:


console.log(5+"23")   // number and string added are not added but concatenated
/*important- bug*/
console.log(5-"23")   // subtraction of number and string returns correct differnce value but that is not expected--> bug
console.log("alice"+"23") // concatenates
console.log("hello"-"world") // returns NaN i.e. not a number
console.log(true-true) // returns 0 becoz true corresponds to 1
console.log(true+true) // returns 2 becoz true corresponds to 1


// Difference between null and undefined.

var a=null   // null means nothing but it is defined as "nothing" i.e. neither number,string,bool,symbol or bigint in short a is nothing.
var b        // undefined means something which is not predefined like here b is a variable but no value is assigned to it which means it can take any value -number,string,bool,symbol,null etc. 


console.log(a)
console.log(typeof(a))  // returns "object" which is another bug in JS becoz null is not a object but a primitive data type
console.log(b)
console.log(typeof(b))  // nothing is both a data type as well as a value which can be stored in a variable


// NaN- Not a number 

/* NaN is a variable in global scope means it can be accesed any where in program globally.
it is a property of global scope. It is used for validation purpose in many forms where a number has to be entered.
*/


var contact =3266482367
var pincode ="Lucknow"

console.log(isNaN(contact))
console.log(isNaN(pincode))

// isNaN() can be used to check whether a valid number is entered by the user or not.If true comes then we can add a pop-up that please enter a valid number


console.log(isNaN(NaN))
console.log(NaN===NaN)
console.log(NaN==NaN)
