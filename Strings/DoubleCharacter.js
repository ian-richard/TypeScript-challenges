"use strict";
var doubleChar = function (str) {
    return str
        .split('')
        // .map(c => c.repeat(2))
        .map(function (c) { return c + c; })
        .join('');
};
console.log(doubleChar("illuminati") === "iilllluummiinnaattii");
console.log(doubleChar("123456") === "112233445566");
console.log(doubleChar("%^&*(") === "%%^^&&**((");
// Description:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// double_char("String") ==> "SSttrriinngg"
// double_char("Hello World") ==> "HHeelllloo  WWoorrlldd"
// double_char("1234!_ ") ==> "11223344!!__  "
// Good Luck!
