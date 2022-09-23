// Reading and understanding error messages is a requirement as a developer. 
// At first glance, many beginners shrink away from error messages as they appear to be “scary” and difficult to understand because they include terms one may not be familiar with. However, error messages provide developers with a treasure trove of knowledge, and tell you everything you need to know about how to resolve them! Being able to parse error messages and warnings without fear will enable you to be able to effectively debug your applications, receive meaningful help from others, and empower yourself to push forward when faced with an error.

// Let’s assume we have written the following code:

const a = "Hello";
const b = "World";

console.log(c);

// displays Uncaught ReferenceError: c is not defined. This code will run, but it will generate an error. In technical terms, this is called “throwing” an error. The first part of an error displays the type of error. This provides the first clue as to what you’re dealing with.

// A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope

//Understanding both the error type and the error message is crucial to comprehending why you are receiving the error.

// The next part of an error gives us the name of the file in which you can find the error (in this case, our script.js), and also the line number. This allows you to easily navigate to the problematic line in your code. 

// Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application, and what functions were called that led up to the error.

const x = 5;
const y = 10;

function add() {
    return z;
}

function print() {
    add();
}

print();

console.log(print());




