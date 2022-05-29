
a = 10;
// //global declaration(we are trying to create variable in window scope)
console.log(a);

//object scenario 
//wont be able overide readable properties

var obj = {}
Object.defineProperty(obj, "x", {value: 20, writable: false});
obj.x = 30;
console.log(obj)

//function Scenario
function test(arg1, arg1) {
    "use strict";
    console.log(arg1);
}
test(10,20)

