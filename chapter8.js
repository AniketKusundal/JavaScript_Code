//  [4].  MAP() , REDUCE () , FILTER ();

//  array Substitution  4 --> Map and Reduce Method 


//  Array Prototype.MAP()  ----->




// Trick-1
//  const array1 = ['1' , '3' , '12' , '14', '20' , '25'];

//  Num > 12

// let newarr = array1.map((curElem,index,arr) => {
//     return curElem >12;
    
// })

// console.log(array1);
// console.log(newarr);



// Trick-2

// const array1 = ['1' , '3' , '12' , '14', '20' , '25'];

// let newarr = array1 .map((curElem , index , arr)=>{
//     return `index of = ${index} and the value is ${curElem} belogs to ${array1}`
// })
// console.log(newarr);







// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\\
// ##############################################################################################################\\







//  Challenge time --> 11


//  Question 1 .  Find the square root of each element in an array  ?

//  let arr = [25 , 30 , 36,49 , 64 , 81];
//  --->

//  let squrarr = arr.map((curElem)=>{
//     return Math.sqrt(curElem);
//  });
//  console.log(squrarr);




//  Question 2 . Multiply Each Element by 2 and return only those element whichare grater than 10 ?

// ---->

// trick-1
// let arr = [2, 3, 4, 6, 8, 10];

// let arr2 = arr.map((curElem)=>{
//     return curElem * 2;

// }).filter((curElem)=>{
//     return curElem > 10 ;
// })
// console.log(arr2);



//  trick-2

// let arr2 = arr.map((curElem)=> curElem * 2).filter((curElem)=>10).reduce((accumulator , curElem)=>{
//     return accumulator += curElem;
// });
// console.log(arr2);










//  # REDUCE Method  ::=

// --> flatten an array means to convert the 3D or 2D into a single diamentional array

// --> Reduce method execute a reducer function that you provide on each eelement of an array resulting in single output value 

//   --->   Reducer Function takes Four arguments 

//   *  accumulator
//   *  current value
//   *  current index
//   *  scource array


// let arr = [5, 4 , 3];

// let sum = arr.reduce((accumulator , curElem , index , arr)=>{
//     return accumulator *= curElem;
// });
// console.log(sum);










//  HOW TO FLATTEN AN ARRAY 

// --> Converting 2d and 3d array into one diamentional array 


const arr = [
                 ['zone_1' , 'zone_2'],
                 ['zone_3' , 'zone_4'],
                 ['zone_5' , 'zone_6'],
                 ['zone_7' , 'zone_8'],

];


let flatarr = arr.reduce((accum , curElem)=>{
    return accum.concat(curElem);
});
console.log(flatarr);