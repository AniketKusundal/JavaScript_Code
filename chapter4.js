//          CONTROL              STATEMENT              &            LOOPS



//   # IF-ELSE statement 

// var tommarow = 'sunny'
// var tommarow = 'rain'
// if(tommarow== 'rain') {
//     console.log('take a raincoat');
// }
// else {
//     console.log('No Need To Take Raincoat');
// }









// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\
// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\









//  PRACTICE QUESTION

//  Q.   Write a program that works out whether if a given year is leap or NOT ?

// var year = 2024;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log('The Year ' + year + ' is leap year');
//         } else {
//             console.log('The Year ' + year + ' is Not leap year')
//         }

//     } else {
//         console.log('The Year ' + year + ' is leap year');
//     }


// }
// else {
//     console.log('The Year ' + year + ' is Not leap year');
// }









// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\
// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\









// RACTICE QUESTION 2

// EXAMPLE-2  What is truthy and falsy value in JAVASCRIPT ?

// ------>  We have total 5 falsy value in JavaScript
// ------>  0," ", undefined , null , NaN 


// if (score = 8) {
//     console.log("OMG, WE LOSS THE GAME");
// }
// else {
//     console.log("YAYYYY, WE Won THE GAME");
// }





    // ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\
    // ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\








// # CONDITIONAL (TERNARY ) OPRATOR



// METHOD-1
// var age=30;
// if(age>=18){
//     console.log("You Can Vote");
// }
// else{
//     console.log("You Can't vote");
// }


// METHOD-2

// var age = 66;
// console.log ((age>=18) ? "You can vote" : "you can't vote");









// ------------------------------------------------------------------------------------------------------------------------------------------------------------ \\
// ------------------------------------------------------------------------------------------------------------------------------------------------------------- \\






//                      #    [ SWWITCH STATEMENT]       #       



//  Without using Break statement
// find the area of the circle triangle and rectangel ?



// var PI = 3.142, l = 5, b = 4, r = 3;
// var triangle;
// var area =  'triangle';


// if (area == circle) {
//     console.log("The area of The circle Is :" + (PI * r ** 2));

// } else if (area == triangle) {
//     console.log("The area of the Triangle is:" + (l * b) / 2);

// } else if (area == rectangle) {
//     console.log("The Area of Rectangle Is :" + (l * b));

// } else {
//     console.log("Plese Enter Valid Data");
// }



// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\
// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\






//  Using BREAK Statement

// var area = 'triangle';
// var PI = 3.142, l = 5, b = 4, r = 3;


// switch(area)
// {
//    case 'circle':
//     console.log("The Area Of the Circle"+ (PI*r**2));
//     break;

//     case 'triangle':
//     console.log("The Area Of The Triangle Is "+(l*b)/2);
//     break;

//     case 'reactangle':
//         console.log("The Area Of The Reactangle Is"+(l*b));
//         break;


//         default:
//             console.log("Plese Enter The Valid Data");
//             break;

// }







// -------------------------------------------------------------------------------------------------------------------------------------------------------- \\
// -------------------------------------------------------------------------------------------------------------------------------------------------------- \\



//  WHILE LOOP STATEMENT


// var num=0;                 ---> Initial value
// block Scope
// while(num<=10);
// {
//     console.log(num);        ---> infinite LOOP
//     num++
// }


// DO-WHILE LOOP STATEMENT


// var num = 0;
// do{
//     console.log(num);
//     num ++;
// }
// while(num<=10);




// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\
// ---------------------------------------------------------------------------------------------------------------------------------------------------------- \\



//  # [FOR LOOP STATEMENT]

// for (var num = 0; num <=10; num++); {
//     console.log(num);
// }