console.log("=====Simple Generator======")
console.log("\n=> Never Ending generator")
function* noEnding(){
    let index = 0;
    while(true){
        yield index++;
    }
}
let g1 = noEnding();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

console.log("\n=> 5 value generator")
function* endAt(i){
    let j = 0;
    while(j<i){
        yield j++;
    }
}
let g2 = endAt(5);
let v = g2.next();
while(!v.done){
    console.log(v);
    v = g2.next()
}
console.log();
console.log("=====Generator of Generators======")
function* inGen(i){
    yield i+1;
    yield i+2;
    yield i+3;
}
function* outGen(i){
    yield i;
    yield* inGen(i);
    yield i+10;
}

let g3 = outGen(10);
console.log("=>freezes the function at 1st line of outGen")
console.log(g3.next().value);
console.log("=>freezes the function at 2nd line of outGen which means freezes the function at 1st line of inGen")
console.log(g3.next().value);
console.log("=>freezes the function at 2nd line of inGen")
console.log(g3.next().value);
console.log("=>freezes the function at 3rd line of inGen")
console.log(g3.next().value);
console.log("=>Goes back to outGen and Freezes at line 3")
console.log(g3.next().value);
console.log()