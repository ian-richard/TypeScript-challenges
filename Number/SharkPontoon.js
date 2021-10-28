"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shark = exports.shark__og = void 0;
function shark__og(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    var dolphinDistraction = 2;
    var sharkTime = dolphin ? sharkDistance / (sharkSpeed / dolphinDistraction) : sharkDistance / sharkSpeed;
    var swimTime = pontoonDistance / youSpeed;
    return swimTime < sharkTime ? "Alive!" : "Shark Bait!";
}
exports.shark__og = shark__og;
//refactor
var shark = function (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    return pontoonDistance / youSpeed <
        sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
        ? 'Alive!'
        : 'Shark Bait!';
};
exports.shark = shark;
console.log((0, exports.shark)(12, 50, 4, 8, true) === "Alive!");
console.log((0, exports.shark)(7, 55, 4, 16, true) === "Alive!");
console.log((0, exports.shark)(24, 0, 4, 8, true) === "Shark Bait!");
console.log((0, exports.shark)(40, 35, 3, 20, true) === "Shark Bait!");
console.log((0, exports.shark)(7, 8, 3, 4, true) === "Alive!");
// Description:
// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops
// you out right into the ocean, a small way from a set of stairs used to climb out.
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
// You are given 5 variables;
//     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
//     sharkSpeed = how fast it can move in metres/second.
//     pontoonDistance = how far you need to swim to safety in metres.
//     youSpeed = how fast you can swim in metres/second.
//     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
//     The pontoon, you, and the shark are all aligned in one dimension.
// If you make it, return "Alive!", if not, return "Shark Bait!".
