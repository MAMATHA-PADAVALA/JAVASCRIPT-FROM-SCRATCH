console.log("Vraibles");

var a=67;
console.log(a);
a="Mamatha";
console.log(a)



var a=5;


//let 8a=7      =>error

//let var=7;    var->reserved word

console.log("var let const")


let b="Mamatha";


{
    let b='this'
    console.log(b)
}

console.log(b)


//const s; ->error,const has to be initialized during declaration
const author="Mamatha"

//author="y"  error->const can't be changed


/*    nnbbssu
N-null
N-number
S-symbol
S-string
B-boolean
B-bigint
U-undefined
*/

let x=null;
let y=345;
let z=true;
let d=BigInt("567")+BigInt(3)
let e="Mamatha"
let f=Symbol("M")
let g

console.log(x,y,z,d,e,f,g)

console.log(typeof d)
console.log(typeof z)
console.log(typeof x)


