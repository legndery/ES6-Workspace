// array es6 destructuring
console.log("====Destrucnturing in Array=====\n")
var arr = ["foo", "bar", "baz"]

var [foo, bar, baz] = arr;
console.log(foo, bar, baz)

//object destucturing
console.log("\n====Destrucnturing in Object=====\n")
var obj = {
    "a":"Hello",
    "b": "World"
}
var {a,b} = obj
console.log(a,b)