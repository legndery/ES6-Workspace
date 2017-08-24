//var scope

//doesn't care about blocks
console.log("====Var====\n")
var v = "Hello Out function "
var m = function(){
    var v = "hello in function"
    if(1+1 == 2){
        var v = "Hello in block"
        console.log("Inside Block:"+ v);
    }
    console.log("Outside Block:"+ v);
}
m();
console.log("Out Function:"+v);
//////////////////////////
//let's use let
console.log("\n====Let====\n")
let l = "Hello Out function "
var n = function(){
    let l = "hello in function"
    if(1+1 == 2){
        let l = "Hello in block"
        console.log("Inside Block:"+ l);
    }
    console.log("Outside Block:"+ l);
}
// l = "changed"// no error
n();
console.log("Out Function:"+l);
///const??????????
console.log("\n====Const====\n")
const c = "Hello Out function "
var n = function(){
    const c = "hello in function"
    if(1+1 == 2){
        const l = "Hello in block"
        console.log("Inside Block:"+ c);
    }
    console.log("Outside Block:"+ c);
}
//c= "Changed" //error
n();
console.log("Out Function:"+c);
console.log()

///OUTPUT===========

// PS D:\l3p\Project\ES6-Workspace> node .\variables.js
// ====Var====

// Inside Block:Hello in block
// Outside Block:Hello in block
// Out Function:Hello Out function

// ====Let====

// Inside Block:Hello in block
// Outside Block:hello in function
// Out Function:Hello Out function

// ====Const====

// Inside Block:hello in function
// Outside Block:hello in function
// Out Function:Hello Out function