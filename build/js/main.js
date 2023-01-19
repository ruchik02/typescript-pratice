"use strict";
let myObject;
myObject = {
    name: "ruchika",
    age: 22,
};
let array;
array = [1, 2, 3];
console.log(typeof (array), "8");
let myArray;
myArray = [1, 2, 3, 4];
console.log(myArray[0], "11");
console.log(myObject, "12");
let tuple;
tuple = ["hello", 2, true];
console.log(tuple[2], "15");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor, "18");
let arr1 = ['hey', 'ruchika', 'byee'];
let arr2 = ['hey', 'byee', 222];
let arr3 = ['hey', 111, true];
arr1.push('2');
console.log(arr1, "24");
arr2.push('');
arr2.push(224);
console.log(arr2, "26");
let enh = {
    name: 'ruchika',
    active: false,
    albums: [1, "rui"]
};
let jp = {
    name: 'rudra',
    active: true,
    albums: [1, 2]
};
// jp=enh
// enh=jp;
const greetingGuitar = (guitarist) => {
    if (guitarist.name) {
        return `hello ${guitarist.name.toUpperCase()}!`;
    }
    return `hello!`;
};
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 2] = "A";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["E"] = 5] = "E";
    Grade[Grade["G"] = 6] = "G";
    Grade[Grade["Y"] = 7] = "Y";
})(Grade || (Grade = {}));
console.log(Grade, "64");
console.log(Grade.E, "65");
console.log(greetingGuitar(enh), "66");
