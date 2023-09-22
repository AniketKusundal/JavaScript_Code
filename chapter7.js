// Section 6 ARRAYS IN JAVASCRIPT

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




//  [1]. TRAVERSAL IN ARRAY.


// index no  :     0           1           2       3

//  var myfriends = ['Aniket' , 'Kusundal' , 'Jack', 'jhony','Aniket' , 'Kusundal' , 'Jack', 'jhony'];

//  console.log(myfriends[3]);

//  console.log(myfriends[ myfriends.length - 1]);


//    If you want to check the lengent of an array element

// console.log(myfriends.length);







// -------------------------------------------------------------------------------------------------------------






//  WE USE FOR LOOP FOR LOOP

// var myfriends = ['Aniket', 'Kusundal', 'Vinod', 'Jhon'];

// for(var i=0 ; i< myfriends.length;i++){
//   console.log(myfriends[i]);
// }







// ------------------->*************************************************<------------------------------------------





// Using For In LOOP

// var myfriends = ['Aniket', 'Kusundal', 'Vinod', 'Jhon','vaibhav'];

// for(let elements in myfriends){
//   console.log(elements);
// }







// ---------------------------->******************************************<----------------------------------------





//  USING FOR OF LOOP 

// var myfriends = ['Aniket', 'Kusundal', 'Vinod', 'Jhon','vaibhav'];

// for(let elements of myfriends){
//   console.log(elements);
// }







// ------------------------------>*************************************<--------------------------------------------



// ARRAY.PROTOTYPE. for.Each()



// Without Using Fat Arrow Function


// var myfriends = ['Aniket', 'Kusundal', 'Vinod', 'Jhon','vaibhav'];

// myfriends.forEach(function (elements, index, array) {
//     console.log(array);

// });







// ---------------------------------->*****************************************<------------------------------------

//  Using Fat Arrow Function 
// var myfriends = ['Aniket', 'Kusundal', 'Vinod', 'Jhon','vaibhav'];  

// myfriends.forEach(function(elements, index, array) {
//     console.log(elements);


// });   



// =================================>********************************<=========================================





// [2]. SEARCHING & FILTER IN AN ARRAY  :=

// Method 1  ---> Arry prototype indexof() 

//  return the first (least) index of an element with the array equal to an element of or -1, if name is found it search the element from the 0th index number


// var myfriendsname =["aniket" , "kusundal" , "aniketkusundal", "binod"];

// console.log(myfriendsname.indexOf("aniketkusundal","biod"));



// -------------------------------************************************---------------------------------------\\


//  Method 2 -----> Array prototype .Lastindexof()

// var myfriendsname =["aniket" , "kusundal" , "aniketkusundal", "binod" , "aniket"];

// console.log(myfriendsname.lastIndexOf("aniketkusundal"));





// ------------------------------------**********************************---------------------------------------\\






//  Method 3 -----> Array Prototype includes() :-

// ---> It Gives the Boolean Values   [True or False]

// var myfriendsname =["aniket" , "kusundal" , "aniketkusundal", "binod" , "aniket"];

// console.log(myfriendsname.includes("aniket"));



// ----------------------------------***********************************-------------------------------------\\




//  Method 4   ----> Array.Prototype.find() :-

// --> Arr.find (Call Back (Element [,index[,array]])[,This Arg])

// --> It Returns the found element in the array . if some element in the Array Saticfies a testing function , or undefiend or Not Found 
// Only Problam is that it returns only one element 

//  --> curval -- [Current Value]


//  *# Trick--> 1

//  const price=[200,250,300,350,400,450,500,550,600];

// // price < 400;

// const findele = prices.find((currval)=>{
//           return currval<400;
// });
// console.log(findele);


//  *# Trick --> 2

// console.log(price.find((currval) => currval<400));






//  -------------------------------***********************************-----------------------------------------\\

//  Method 5 ---> Array Prototype.findIndex :-

//  returns the found index in the array if an element in the array Satisfied the testing function. Or 
//  if not found it gives the -1

// const price=[200,250,300,350,400,450,500,550,600];


// console.log(price.findIndex((currval) => currval > 300));



//  Method [5] -->  Array Prototype.Filter()  :-



//  [1]. Returns a new array element of the calling array for which the provided felterimg function returns True 

// const price = [200, 250, 300, 350, 400, 450, 500, 550, 600];

// // Price < 400

// const newpricetag = price.filter((elem,index)=>{
//     return elem <1400 ;

// });
// console.log(newpricetag);




//  [6].[3]  Array Substitution ---> How to sort an Array

// --> array prototype.sort()
// --> the sort() Method Sorts the element of an array in place and 
// --> returns the sorted array . The Defult Sort order is Asending , Built Upon Converting The Elements into strings

// --> the compairing their Sequances of UTR-16 Code units values



// [Example : 1]
// const month = ['march', 'januvary', 'februvary', 'june', 'April', 'decmber', 'november'];

// console.log(month.sort());


// [Example : 2]
// const number = ['28', '11', '4', '9', '5', '100'];

// console.log(number.sort());




// ##############################################################################################################################################################################################################################################################################################################################################################################################################################################################################\\





// HOW TO INSERT , ADD , REPLACE , & , DELETE ELEMENTS IN ARRAY ( CRUD )   =::=


//  Method [1]. perfeom (CRUD)

// -->  array prototype.push()
// --> Push() Methods adds one or more elements to the end of an array and returns the length of an array

// const animals = ['Pig' , 'Dogs' , 'Cats' , 'Goats' , ]

// animals.push('Sheep');
// console.log(animals);


// Example 2  =::=

// const animal = ['Pig' , 'Dogs' , 'Cats' , 'Goats' , ]

// const count = animal.push('chiken');
// console.log(animal);
// console.log(count);

// multiple

// const animal = ['Pig' , 'Dogs' , 'Cats' , 'Goats' , ];
//  animal.push ('Pig' , 'Dogs' , 'Cats' , 'Goats' );

// console.log(animal);





// **********************************************************************************************************************************************************************************************************************************************************************************************************************************************************\\

// Method [2].  ARRAY PROTOTYPE.UNSHIFT()

// --> the unshift() Method adds one or  more element to the begining of an array and returs the new length of an array

// ---> data Adds to Beginging


//  Example [1]


// const animal = ['pig' , 'Dog' , 'cat',];
// const count= animal.unshift('chiken');

// console.log(animal);



//  Example [2]

// const mynumbers = ['2' ,'3', '3','5', '7'];

// mynumbers.unshift( '4' , '6');

// console.log(mynumbers);




// **************************************************************************************************\\





//  Method [3]. --> Array prototype.pop() =::=


// ---->> It removes the Last Element of an array  , and returns that element 


// const fruits = ['apple' , 'banana' , 'watermellon' , 'mango' , 'PineApple' , 'custerdaaple'];

// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits);





//  Method [4]. Array Prototype.Shift()



// The Shift() Method Removes the First element from an array 


// const fruits = [ 'custerdaaple', 'apple' , 'banana' , 'watermellon' , 'mango' , 'PineApple' ];

// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);




// *******************************************************************************************************\\
// #######################################################################################################\\ 
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\\