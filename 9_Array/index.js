// Array  ---> array is a collection of similar elements
// Array  ---> array is a Mutable
// array indexing start from the Zero
// type of array in JS is Object

let arr = [1 , 2 , 3 , 4 , 5 , 8 ,7]

// arr[0] = 10;     // thats why array is muteable
// console.log(typeof arr);
// console.log(arr.length);   // to identify array length 
// console.log(arr[1]);



//  Array Methods ::::------>>

let arr1 = [ 1 , 2 , 5 , 7 , 9 , 3 , 8 , 10 , 11 , "aniket" , "kusundal"]


// [1] toString()  ---->    convert the array into the string
// console.log(arr1.toString());    


// [2] join()   ---> join all the array elements using a seprator

// console.log(arr1.join(" and "));    //  o/p     1 and 2 and 5 and 7 and 9 and 3 and 8 and 10 and 11 and aniket and kusundal



//  [3] Pop()  ---> pop or remove the element from the array

// console.log(arr1.pop());    // Removes the lasst element from the array
// console.log(arr1);

// [4] Push()  ---->>  Adds the new elemet at the end of an array

// console.log(arr1.push(100));
// console.log(arr1.push("We can push String also"));
// console.log(arr1);


// [5]  Shift() ----> removes the first elements and returns it.

// console.log(arr1.shift());
// console.log(arr1);






// [6] unshift  --> add elements to the begining and returns new array length.

// console.log(arr1.unshift(22));
// console.log(arr1);

// [7] Delete --->> array element can be deleted using the delete operator   



// console.log(delete arr1[0]);
// console.log(arr1.length);
// console.log(arr1.length);




// [8] Concat() ------->  used to join array to the given array 

// let a1 = [1 , 2 , 3]
// let a2 = [4 , 5 , 6]
// let a3 = [7 , 8 , 9]


// join =a1.concat(a2 , a3)
//  console.log(join);      // --->  o/p [
// //     1, 2, 3, 4, 5,
// //     6, 7, 8, 9
// //   ]

// return a new array deos not change existing array 



// [9] sort --->  use for the sort  

// let a4 = [ 3, 4, 8, 9, 5, 1 , 2, 6, 7, ]

// assending = a4.sort()
// console.log(assending);






//  [10]  Splice()  ---->   splice can be used to add new item to an  array.


// const numbers =  [1 , 2 , 3 , 4 , 5 , 6]

                // numbers.splice(2        ,       1 ,                      23 , 24)
                // |              |                |                            |
// return deleted item          position to     no. of element            elements to be added  
//  modifies the array              add          to remove



// magic = numbers.splice(1 , 3)
// console.log( numbers);




//  [11]  Slice()  ---->  slice out the piece from an array  it create an new array 


const num = [11 , 12 , 13 , 14 , 15]

// ans = num.slice(1 , 3)    // o/p [ 12, 13 ]
ans = num.slice(2)    
console.log(ans);    //  o/p  [ 12, 13, 14, 15 ]
