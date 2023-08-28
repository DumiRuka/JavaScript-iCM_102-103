//Linking a javascript file


////////////////////////////////////////////////
// Values and Variables
/*
// Values
// ======
// In javaScript, values are the fundamental building blocks that data takes on.
// Values can be various types, such as numbers,strings,booleans,objects,arrays and more.
// Variables are used to store and manipulate these values.
//  ex :
//     # Numbers: Numeric values, both integers and floating-point numbers. Example: 42, 3.14.
//     # Strings: Textual data enclosed in single ('') or double ("") quotes. Example: 'Hello, world!', "JavaScript".
//     # Booleans: Logical values representing true or false. Example: true, false.
//     # Null: A special value representing the absence of any value or object. Example: null.
//     # Undefined: A value given to uninitialized variables or unavailable properties. Example: undefined.
//     # Objects: Collections of key-value pairs, used to represent more complex data structures. Example: { key: 'value', age: 25 }.
//     # Arrays: Ordered lists of values, indexed by integers. Example: [1, 2, 3, 4].
//     # Functions: Blocks of reusable code that can be invoked with arguments. Example: function add(a, b) { return a + b; }.


// Variables
// =========
// A variable is a symbolic name that references a value in JavaScript. 
// You declare variables using the var, let, or const keyword, followed by the variable name.

//    # var: Used for declaring variables globally or within a function.
//    # let: Introduces block-scoped variables. It's the recommended way to declare variables that will change.
//    # const: Also block-scoped, but once assigned, the value cannot be changed. Used for constants.

//    Example variable declarations:


    var firstName = `sanath`;
    let name = `malitha`;
    const pi = 3.14;

    console.log(name);
    
//  ps:
//      Remember that JavaScript is case-sensitive, 
//      so myVariable and MyVariable are considered different variables.
*/

////////////////////////////////////////////////
// Data Types
/*

// JavaScript has several built-in data types that allow you to represent different kinds of values. 
// Here are the main data types in JavaScript:

// Primitive Data Types
// ====================

// These are basic data types that hold single values.

//    # Number: Represents both integer and floating-point numbers. Example: 42, 3.14.
//    # String: Represents sequences of characters. Example: 'Hello, world!', "JavaScript".
//    # Boolean: Represents true or false values.
//    # Null: Represents the intentional absence of any value. It's a value itself.
//    # Undefined: Represents the value of uninitialized variables or undefined properties.
//    # Symbol:  Represents a unique and immutable value. 

// Non-primitive Data Types (Reference Types)
// ==========================================

// These are more complex data types that can hold collections of values and are referenced by a memory address.
//
//    # Object: Represents a collection of key-value pairs. Objects can be used to store and manipulate complex data structures.
//    # Array: Represents an ordered list of values. Arrays are objects with numeric indices.

    let variable = 10;//number
    variable = 10.2;            //number
    variable = `kamal`;         //string
    variable = false;           //boolean
    variable = Symbol("foo");   //symbol(ES6)
    variable = {};              //object
    variable = ["red","green"]; //array
    console.log(typeof variable)
*/
////////////////////////////////////////////////
// Basic operators

/*
// JavaScript supports a variety of operators that allow you to perform operations on values, variables, and expressions. Here are some of the basic operators in JavaScript:

// Arithmetic Operators
// --------------------

//     +: Addition
//     -: Subtraction
//     *: Multiplication
//     /: Division
//     %: Modulus (remainder after division)
//     **: Exponentiation (ES6)

// Assignment Operators
// --------------------

//     =: Assign a value
//     +=: Add and assign
//     -=: Subtract and assign
//     *=: Multiply and assign
//     /=: Divide and assign
//     %=: Modulus and assign
//     **=: Exponentiation and assign (ES6)

// Comparison Operators
// --------------------

//     ==: Equal to (value equality, type coercion)
//     ===: Equal to (value and type equality)
//     !=: Not equal to (value inequality, type coercion)
//     !==: Not equal to (value or type inequality)
//     <: Less than
//     >: Greater than
//     <=: Less than or equal to
//     >=: Greater than or equal to

// Logical Operators
// -----------------

//     &&: Logical AND
//     ||: Logical OR
//     !: Logical NOT

// Unary Operators
// ---------------

//     +: Unary plus (converts its operand to a number)
//     -: Unary minus (negates its operand)
//     ++: Increment (increases the value by 1)
//     --: Decrement (decreases the value by 1)

// Ternary Operator
// ----------------

//     condition ? expressionIfTrue : expressionIfFalse: Conditional operator that returns different values depending on the condition.

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/
//////////////////////////////////////////////////
//Strings and Template Literals
/*

// Strings are sequences of characters enclosed in single ('') or double ("") quotes in JavaScript. 
// They are used to represent textual data. In addition to standard strings, 
// JavaScript introduced a feature called template literals (template strings) 
// in ECMAScript 6 (ES6), which provides a more powerful way to work with strings.

// You can create strings using single or double quotes:
    let singleQuotes = 'Hello, world!';
    let doubleQuotes = "JavaScript is awesome!";
    let fName = 'Nimal';
    let lName = 'Sumanasiri';
    let age = 25;

// You can also concatenate strings using the + operator:
    let msg = fName+" "+lName+" is "+age+" years old.";

// Template literals (Template Strings)
// ------------------------------------

//  Template literals provide a more flexible way to work with strings. They are enclosed in backticks (``) instead of single or double quotes:

    msg = `${fName} ${lName} is ${age} years old.`;

//  Template literals allow you to embed expressions within ${}. The expressions are evaluated and their values are inserted into the string.
//  You can include line breaks and multi-line strings directly within template literals:

    let multiline = `
    This is a
    multi-line
    string.`;

//  Template literals also support tagging, which allows you to process the template with a function before the final string is formed.

    const result = tagFunction`template literal parts ${expression}`;



     let product = "JavaScript Course";
     let price = 49.99;
     let discount = 10;

     let productInfo = `Product: ${product}
     Price: $${price}
     Discount: ${discount}%`;

    console.log(productInfo);

*/
//////////////////////////////////////////////////
//Flow controle (if/else Statements)
/*

if Statements:
==============

An `if` statement allows you to execute a block of code if a given condition is true. If the condition is false, the block of code is skipped.

if (condition) {
    // Code to execute if the condition is true
}

if-Else Statements:
===================

An `if-else` statement allows you to execute one block of code if a condition is true and another block of code if the condition is false.

if (condition) {
    // Code to execute if the condition is true
}else{
    // Code to execute if the condition is false
}

Else-if Statements:
===================

you can extend the 'if-else' structure with `else if` clauses to handle multiple conditions. the code inside the first true condition block will be executed.

if (condition1) {
    // Code to execute if condition1 is true
}else if (condition2){
    // Code to execute if condition2 is true
}else {
    // Code to execute if no condition is true
}


let age = 14;

if(age > 18) {
    console.log(`You can get the driving lisance.`);
}else if (age < 17){
    console.log(`You can get the driving lisance in after the next birthday.`);
}else{
    console.log(`You can't get the driving lisance.`);
}
*/