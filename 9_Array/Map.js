
//  [1] Map() ---->  creates a new array by performing some opration on each array element 

let arr1 = [11 , 6 , 9 , 11 , 50]

// let newArray = []  // Empty array 


// with classical loop 
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     newArray.push(element**2)
// }

// console.log(newArray);    // new elemets push in the new Arrayy with the Square 
// O/p    ---->   [ 121, 36, 81, 121, 2500 ]





//  This is Short hand property for the 
let newArray = arr1.map((e)=>{
    return e**2
})

console.log(newArray);
