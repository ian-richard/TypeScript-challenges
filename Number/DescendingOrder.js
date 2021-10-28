"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''));
}
exports.descendingOrder = descendingOrder;
console.log(descendingOrder(111) === 111);
console.log(descendingOrder(15) === 51);
console.log(descendingOrder(1021) === 2110);
