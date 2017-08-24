console.log("====Classes before Classes====")
console.log("=>Basic Plane ..umm..meh..Class")
function Plane(){
    this.wings = 2;
    this.speed = 100;
    this.altitide = 0;
    this.startEngine = function(){
        console.log("Engine started")
    }
}
const p = new Plane();
console.log(p);
p.startEngine();
console.log();

console.log("=>Add Functionlity using Prototyping")
Plane.prototype.fly = function(){
    this.altitide = 1000;
}
console.log(p)
p.fly();
console.log(p)
console.log()

console.log("=>Inherit using Prototyping")

function JetFighter(){
    this.speed = 500;
}
JetFighter.prototype = new Plane();
const j = new JetFighter();
console.log(j);
console.log()
console.log("====Classes using Class====")
console.log("=>Basic Human Class")
class Human {
    constructor(height){
        this.height = height;
        this.location = {
            x:0,
            y:0
        };
    }
    walk(x,y){
        this.location.x +=x;
        this.location.y +=y;
    }
    static sayHello(){
        return "Hello!"
    }
    static get sayHelloGet(){
        return "Hello! GET"
    }
}

const h =  new Human(150);
console.log(h);
h.walk(10,10);
console.log(h);
console.log()
console.log("=>Inherit using Extends")

class Warrior extends Human{
    constructor(){
        super();////*this* keyword will not work
        this.superPower = 15;
    }
}
const w = new Warrior(200);
console.log(w);
console.log()
console.log("=>Static and GET Methods")
console.log(Human.sayHello());
console.log(Human.sayHelloGet);


////OUTPUT//////////////////
// PS D:\l3p\Project\ES6-Workspace> node .\classes.js
// ====Classes before Classes====
// =>Basic Plane ..umm..meh..Class
// Plane { wings: 2, speed: 100, altitide: 0, startEngine: [Function] }
// Engine started
//
// =>Add Functionlity using Prototyping
// Plane { wings: 2, speed: 100, altitide: 0, startEngine: [Function] }
// Plane { wings: 2, speed: 100, altitide: 1000, startEngine: [Function] }
//
// =>Inherit using Prototyping
// Plane { speed: 500 }
//
// ====Classes using Class====
// =>Basic Human Class
// Human { height: 150, location: { x: 0, y: 0 } }
// Human { height: 150, location: { x: 10, y: 10 } }
//
// =>Inherit using Extends
// Warrior { height: undefined, location: { x: 0, y: 0 }, superPower: 15 }
//
// =>Static and GET Methods
// Hello!
// Hello! GET