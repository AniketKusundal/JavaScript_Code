// [1] Filter  ----->   filter can array with values that passes  test create a new array 
// The filter() method in JavaScript is a powerful array method used to create a new array containing elements from the original array that satisfy a specified condition. The method does not modify the original array


let arr1 = [1 , 2  , 6 , 9 , 11 , 5]


//  Callbackk function
const GraterThanFive = (e) =>{
    if (e > 5) {
        return true
    }
        return false
}


console.log(arr1.filter(GraterThanFive));    
//   ---->    The filter() method is called on arr1, with GraterThanFive as the callback function.
// filter() processes each element in arr1, passing it to the GraterThanFive function.
// If the callback function returns true, the element is included in the new array.
// If the callback function returns false, the element is excluded.
