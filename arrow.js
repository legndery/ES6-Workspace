var one = [1,2,3,4,5]

console.log("======Without Arrow Function======")
one.map(function(v){
    console.log(v);
})
console.log();

console.log("======With Arrow Function======")
one.map((v) =>{
    console.log(v);
});
console.log();

console.log("======With Arrow Function Shorthand======")
one.map(v => console.log(v));
console.log();

console.log("======With Arrow Function Shorthand Processing======")
var two = one.map(v=> v*2);
console.log(two);
console.log()

console.log("======Arrow Function *this*(MDN Example)======")
function Person(){
    this.age = 0;

    this.myTimer = setInterval(function(){
        this.age++;
    }, 200)
}

function PersonThat(){
    let that = this;
    that.age = 0;

    that.myTimer = setInterval(function(){
        that.age++;
    }, 200)
}

function PersonArrow(){
    this.age = 0;
    
    this.myTimer = setInterval(() => {
        this.age++;
    }, 200)
}
const p = new Person();
const pThat = new PersonThat();
const pArrow = new PersonArrow();

setTimeout(function(){
    clearInterval(p.myTimer);
    clearInterval(pThat.myTimer);
    clearInterval(pArrow.myTimer);
    console.log("\n=> Without Fat arrow")
    console.log("After Timer Person Age:", p.age);
    console.log("\n=>Without fat arrow using THAT")
    console.log("After Timer Person Age:", pThat.age);
    console.log("\n=>With fat arrow")
    console.log("After Timer Person Age:", pArrow.age);
},1500)


///OUTPUT///////////////

// PS D:\l3p\Project\ES6-Workspace> node .\arrow.js
// ======Without Arrow Function======
// 1
// 2
// 3
// 4
// 5
//
// ======With Arrow Function======
// 1
// 2
// 3
// 4
// 5
//
// ======With Arrow Function Shorthand======
// 1
// 2
// 3
// 4
// 5
//
// ======With Arrow Function Shorthand Processing======
// [ 2, 4, 6, 8, 10 ]
//
// ======Arrow Function *this*(MDN Example)======
//
// => Without Fat arrow
// After Timer Person Age: 0
//
// =>Without fat arrow using THAT
// After Timer Person Age: 7
//
// =>With fat arrow
// After Timer Person Age: 7