//  Conditional Statment If else , if , else ladder  


console.log("Conditional Statment In JavaScript");


//  if else


let age  = 55
let grace = 2

// age += grace
// console.log(age );
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age  % grace);


// if else 

// if(age>18)
// {
//     console.log("you can Vote");
    
// }
// else
// {
//     console.log("you can not Vote");
    
// }




// ledder if else


if(age != 18)
{
    console.log("You can drive");
}
else if(age == 0){
    console.log("are you kidding");
}
else if(age == 1){
    console.log("are you again kidding");
}
else{
    console.log("You can not drive");
    
}



// Oprators


//  arithmatic oprator   --->   + , - , / , * , ** , ++ , --  , % 

//  assignment oprator  ---->  = , += , -= , *= , /= , %= , **=

//  comparision oprator  ----> == ,  != , === , !== , > , < , >= , <=  , ?

//  logical oprator   ------>    && , || , ! 





// Ternary Opratoer   


x = 6
z = 9

let c = x > z ? (x-z) : (z - x)

console.log(c);

// Translate to :
// if(x > z)
// {
//     let c = x - z
// }
// else
// {
//     let c  = x - z
// }