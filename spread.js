//spread operator applications
console.log('=====Spread in array declaration=====')
var one = ['three', 'four']

var two = ['one', 'two', one, 'five'];
var three = ['one', 'two', ...one, 'five'];
var four = [...two]
var five = [...three];
console.log()
console.log("1. without spread:",two)
console.log("2. with spread:",three)
console.log("3. with spread 1:",four)
console.log("4. with spread 2:",five)
console.log()
//////////////////////////////
console.log('=====Spread in function argument=====')
var f = function(one, two, three){
    console.log('One:',one)
    console.log('Two:', two)
    console.log('Three:', three)
}
var six = [1,2,3];
console.log("\n=>Directly passing array")
f(six)
console.log("\n=>Using Function.apply")
f.apply(null, six)
console.log("\n=>Using Spread")
f(...six)
console.log()
///////////////////////////////////////
console.log('=====Spread with Destructuring=====')
var seven = [1,2,3,4,5];
var [a,b,c,d,e] = seven
var [f, g, ...tail] = seven
console.log("1. without spread:",a,b,c,d,e)
console.log("2. with spread:",f, g, tail)
console.log()

///OUTPUT=====================
// PS D:\l3p\Project\ES6-Workspace> node .\spread.js
// =====Spread in array declaration=====

// 1. without spread: [ 'one', 'two', [ 'three', 'four' ], 'five' ]
// 2. with spread: [ 'one', 'two', 'three', 'four', 'five' ]
// 3. with spread 1: [ 'one', 'two', [ 'three', 'four' ], 'five' ]
// 4. with spread 2: [ 'one', 'two', 'three', 'four', 'five' ]

// =====Spread in function argument=====

// =>Directly passing array
// One: [ 1, 2, 3 ]
// Two: undefined
// Three: undefined

// =>Using Function.apply
// One: 1
// Two: 2
// Three: 3

// =>Using Spread
// One: 1
// Two: 2
// Three: 3

// =====Spread with Destructuring=====
// 1. without spread: 1 2 3 4 5
// 2. with spread: 1 2 [ 3, 4, 5 ]