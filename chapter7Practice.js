//  node chapter7Practice.js

// CHALLENGE TIME 

//  Method[5] .--> Array Prototype.splice() =::=

// ---> Addds and/or removes elements of an array


//  Question 1 .    add  or December At the end Using Splice Method ?


// // -->
// const month = ['Jan', 'Feb', 'March', 'May', 'June'];
// const newmonth = month.splice[month.length, 0, "dec"];
// console.log(month);

//    -->  Error 




// // Ex2 -->  
// const student =['aniket' , 'ragu' , 'anil'];

// const newStudent = student.splice(student.length,0,'Aniket');
// console.log(student);







// Question No 2 --> What Is The return Value Of the Splice Method ?

//  --->  Empty Array 

// const Names = ['aniket', 'ragu' , 'anil' , 'Jack'];
// console.log(names);

// --> The output is  null or empty [].







//  Question No. 3 - Update march To MARCH (update)  ?  
// (Using Sploce Method)

// -->  
// (index no ,  Delete at index Number, string for add new Element)


//  const month = ['Jan' , 'feb', 'march' , 'april'];

//  const updatemonth = month.splice (2,1,'MARCH');
//  console.log(month);


// Trick 2
// -------->

// const month = ['Jan', 'feb', 'march', 'april', 'may', 'june ' ];

// const indexofmonths = month.indexOf('april');
// if  (indexofmonths  != -1) {
//   const updatemonth = month.splice(indexofmonths,1,'april');
//   console.log(month);

// } else{
//     console.log('no such data is found');
// }







 // Question  4 . Delete June From an Array ?

// ----->

//  const month = ['Jan', 'feb', 'march', 'april', 'may', 'june ' ];

//  const indexofmonth = month.indexOf('may');
//  if(indexofmonth != -1){
//     const updatemonth = month.splice (indexofmonth,1);
//     console.log(month);
//  }
//  else{
//     console.log('No Such data is found');
//  }