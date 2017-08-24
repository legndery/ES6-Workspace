
console.log("===Without Using Templating===")
console.log("\n=>Using +")
console.log("Hello\n"+
            "world");
console.log("\n=>Using \\")
console.log("Hello\n\
world");
console.log()

console.log("====Using Templating=====")
console.log(`Hello
World`)
console.log()
/////////////////////////////////////////
var a = 10, b = 10;
console.log("====String Interpolating Without Using Templating====")
console.log("a is "+a+" and b is "+b);
console.log()
console.log("====String Interpolating Using Templating====")
console.log(`a is ${a} and b is ${b}`)
console.log()

///OUTPUT////////////
// PS D:\l3p\Project\ES6-Workspace> node .\template.js
// ===Without Using Templating===
//
// =>Using +
// Hello
// world
//
// =>Using \
// Hello
// world
//
// ====Using Templating=====
// Hello
// World
//
// ====String Interpolating Without Using Templating====
// a is 10 and b is 10
//
// ====String Interpolating Using Templating====
// a is 10 and b is 10
