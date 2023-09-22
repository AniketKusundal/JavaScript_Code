//  * From Here MODERN JAVASCRIPT Is Started 
//    MODERN JAVASCRIPT



//  Fetures of ECMA-Script 2015 Also Known As ES6

//  [1]. Let VS CONST   VS Var


//  [Using var]

//  var myname = "Aniket";
//  console.log(myname);

//  myname = "Kusundal";
//  console.log(myname);




// [Using Let]

// let myname = "Aniket";
//  console.log(myname);

//  myname = "Kusundal";
//  console.log(myname);



//  * [Using Const ]

// const myfirstname = "Aniket"
// console.log(myfirstname);

//  myfirstname = "Kusundal"
// console.log(myfirstname);



// function biodata() {
//     let myfirstname = "Aniket";
//     console.log(myfirstname)

//     if (true) {
//         let mylastname = "Kusundal";
//         console.log('inner ' + mylastname);
//         console.log('inner ' + myfirstname);
//     }
//     console.log('inneroutter '+ myfirstname);
// }
// biodata()


// VAR   =====> function Scope

// let VS CONST ======>  Block Scope



// ************************************************************************************************************\
// ############################################################################################################\




//  [2]. TEMPLETES AND LETRALS    (TEMPLETE STRING) : =====>


// for (let num = 1; num <= 20; num++){

//     let tableof = 12;
// console.log( `${tableof} * ${num} = ${tableof*num}`);    ----> This Is Template letrals or (Template String)
// }





// ************************************************************************************************************\
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\
// ############################################################################################################\


//  [3]. DEFUALT PARAMETERS (ARGUMENTS)  ===>

// function mult(a, b = 5) {
//     return a * b;
// }
// console.log(mult(4))

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\
// ***************************************************************************************************************\
// ################################################################################################################\
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\



// [4]. FAT ARROW FUNCTION

// (=>) ---->    FAT ARROW Symbol


//  Normal Way To Writimg A Function (Without Using FAT ARROW FUNCTION)

// console.log(sum());

// function sum(){
//     let a = 9; b = 49;
//     let sum = a+b;
//     return `the sum of the two numbers is ${sum} `   
// }


//  USING FAT ARROW FUNCTION

// const sum = () =>{
//     let a = 9; b = 49;
//     let sum = a + b;
//     return `The Sum Of The Two Numbers Is ${sum}`

// }

// console.log(sum());