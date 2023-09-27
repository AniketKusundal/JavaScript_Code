
//  [8]           DATE   &    TIME     IN     JAVASCRIPT                       \\

//   [1]   Date Method (Get and Set)
//   [2]   Time Method (Get And Set)




//  METHOD [1].   NEW DATE() ===>>



// let currdate = new Date()
// console.log(currdate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());



//  METHOD [2]. DATE.NOW ()  ===>

//  --->returns the numeric value correspondinng to the number of milisecond elapsed science January 1,1970 00:00:00 UTC
//     1970 se lekar ab tak time or date inn milisecond

// console.log(Date.now())



//  METHOD [3]. NEW DATE (YEAR , MONTH)

// -->  7 number specify   (YEARS, MONTH , DAY , HOUR , MINITUTE , SECOND , AND  MILISECOND) (INN THE ORDER)

//  --->   JAVASCRIPT COUNTS THE MONTH FROM 0 TO 11 .

//  JANUARY IS 0   AND DESCEMBER IS 11

// var d = new Date(2021, 1, 4, 10, 3, 2);
// console.log(d.toLocaleString());




// METHOD [3]  NEW DATE (DATE STRING) ==>>==>>

//  --> NEW DATE (DATE STRING) CREATE A NEW DATA OBJECT FROM A DATE STRING.

//    var d = new Date ("Octomber 13 , 2022 11:22:00");
//    console.log(d.toLocaleString());



//  METHOD [4]    NEW DATE (MILISECOND) ==>==>

// --> NEW DATE (MILISECOND) CRATE A NEW DATE AND OBJECT AS ZERO TIME PLUS MILISECOND.

//   var d = new Date (0);
//   var d = new Date (1673858714631);
// //   console.log(1673858714631*2);
// console.log(d.toLocaleString());









//       #####         DATE METHODS      #######


// const curDate = new Date();
//     //    how to get the individual date
//           The SetfullYear() method can optionaly set month and  Date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());









//  ======>      TIME METHOD    <========



//     HOW TO GET INDIVIDUAL TIME 


// const CurTime = new Date();

//  /*  [1]  */  console.log(CurTime.getTime());

//         //  The get time method returns the number of miliseconds Since 1   JANUARY   1970
        
        

//  /* [2] */      console.log(CurTime.getHours());  

//    //   The get hours method returns the hour of a date as a number (0  -23) 


// /* [3] */    console.log(CurTime.getMinutes());  

// /* [4] */   console.log(CurTime.getSeconds());

// /*[5]*/     console.log(CurTime.getMilliseconds());




//   HOW TO SET INDIVIDUAL TIME


//   let curTime = new Date();

// //   console.log(curTime.setTime());
//   console.log(curTime.setHours(5));
//   console.log(curTime.setMinutes(5));
//   console.log(curTime.setSeconds(5));
//   console.log(curTime.setMilliseconds(5));









// //    PRACTICE TIME  \\


// //  [1]  for to show the time only.

//    console.log(new Date().toLocaleTimeString());

// //  [2]  for to show the DAte only.

//    console.log(new Date().toLocaleDateString()); 

// //  [3] For to show time and Date

//      console.log(new Date ().toLocaleString());