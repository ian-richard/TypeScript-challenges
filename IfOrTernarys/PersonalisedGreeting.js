"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
function greet(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
}
exports.greet = greet;
console.log(greet('Daniel', 'Daniel') === 'Hello boss');
console.log(greet('Greg', 'Daniel') === 'Hello guest');
// Description:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case 	return
// name equals owner 	'Hello boss'
// otherwise 	'Hello guest'
