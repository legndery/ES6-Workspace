//Making object with Vars
console.log("====Making object with Destructuring====")
let f = function(obj){
    console.log(obj);
}

let a = 50;
let b = "age"

f({a,b});
console.log();

console.log("===Destructuring Use Case====")

function calcBmi({weight:w, height:h, max=25 , callback}){// shorthand, default value
    let r = w/Math.pow(h,2);
    if(r > max){
        console.log("You are overweight!");
    }
    if(callback){
        callback(r);
    }else{
        console.log(`your BMI: ${r}`)
    }
}

let weight = 80
let height = 5;

calcBmi({weight, height, max:25});
calcBmi({weight:125,height:14,callback:function(bmi){ console.log(`your bmi callback: ${bmi}`)}})