console.log("hey this is Js practicce 2 file");

let a = 50       // Var is a Golbelly scoped 
let b = 40
let c =  "Anilket"
let _q  = "Anikket" // valid declaration of the variable
// var 55a = "rohan"   Not Allowed   this is not a valid declaration of the syntax


console.log(a + b + 10);
console.log(_q);



// const z = 5
// z = z + 1      // we can not change the constatnt value  Not allowed becoz z is constant 

// check the varibale type 

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));



{
    let a = 66;    // let is a block scoped 
    var z = 66;    // let is a block scoped 
    console.log(a);
    
}
console.log(a);  




//  PRIMATIVE DATA TYPES

// null
// Number               1 ,2,3,8,5
// String               "aniket"
// Symbol
// undefined
// Boolean                  true / flase
// BigInt





let w = "aniket"
let e = 22
let r = 3.22
const t = true
let y =  undefined
let u = null


console.log(w , e , r , t ,  y , u);
console.log(typeof w , typeof e , typeof r , typeof t ,  typeof y , typeof u);



// Object   -> combination of key value pairs

const  obj = {
    name:"aniket",
    age:22
}


obj.salary = "1cr"

console.log(obj);
console.log(typeof obj);





// let a = 20;

// {
//     let a = 10;
//     let b = 25
//     console.log(a)
// }

// console.log(a)





var f = 20      // globely scoped


{
    var f = 55
    var h = 56
    console.log(f)
}

console.log(f)
