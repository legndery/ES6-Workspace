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