//  SECTION 7  ========>>>  STRINGS        IN        JAVASCRIPT




// the string object is usedd to represent and manipulate a sequance of charecter 

// --> string is a zero or more charecter written inside a quote

// --> the javascript string are used for storing and manipulating text

// --> you can used singe or double quotes 

// --> string can be created as primative 

// --> from string litreals or as objects using the strings()




//  SOME EXAMPLES OF STRINGS ==::::==

// let myname = 'aniket';
// let myfullname = "aniket kusundal";

// console.log(myname);
// console.log(myfullname);





// ---------------------------------------------------------------------------------------------------------\\

//  HOW TO FIND THE LENGTH OF A STRING --->>

// let myname = 'aniket';

// console.log(myname.length);

// let myfullname = "aniket kusundal";
// console.log(myfullname.length);






//   [1]. ESCAPE CHARECTER ===>>

// the backslash (\) Esape chareter turns seacial charecters into string charecters




// let anySentance = "we are so called \"vikings\" from the north.";
// console.log(anySentance);


// let anySentance = "we are so called 'vikings' from the north.";
// console.log(anySentance);




// let anySentance = 'we are so called \'vikings\' from the north.';
// console.log(anySentance);



    //   CODE                                          RESULT                                           DESCIPTION

// [1]  \'                                                  '                                         SINGLE QUOTE
// [2]  \"                                                  "                                         DOUBLE QUOTE
// [3]  \\                                                  \                                            BACLSLASH





// ***********************************$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#########################################\\


//                    [2].  FINDING A STRING IN A STRING




// METHOD[1]
// 1.        String.prototype.indexOf(searchValue[,from index])
// 2.      the indexof() method returns the index of the first occurence of a specified text inn a strinng 



// const mybiodata  = 'i am the aniket kusundal';
// console.log(mybiodata.indexOf("k" , 7));



// METHOD[2]   ==>

// [1].     string.prototype.lastindexof(searchValue(,from index));
// [2].    return the index within the calling string object of the last occurence of searchValue or -1 if not found 



// const mybiodata  = 'i am the aniket kusundal';
// console.log(mybiodata.lastIndexOf('a', 4));





// *****************************************$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%############@@@@@@@\\





             //                  [3] SEARCHING FOR A STRING IN A STRING. \\



    // -->  string.prototype.search(regexp);
    // -->the search()  method search a string for a specified   Value and returns the posiion of the Match
    
    
    // const mybiodata = "i am the aniket Kusundal";
    // let sdata = mybiodata.search('aniket', 8);
    // console.log(sdata);

// --> A search() Method Cannot take a Second Start Position Argument.









// ###############################################################################################################\\
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////\\
// ###############################################################################################################\\



//   [4].   EXTRACTING STRING PARTS ====>>>>   =====>>>>
 

//  THERE ARE THREE METHODS FOR EXTRACTING A PART OF A STRING


    //   [1] SLICE (START , END)
    //   [2] SUBSTRING (START , END)
    //   [3] SUBSTR  (START , LENGHT)




//   METHOD [1]   SLICE (START , END)

    //  var str = "apple,banana , kiwi";
    //  let res = str.slice(6,-2);
    //  console.log(res);




//  CHALLENGE TIME ===>>  11  <<====
//   QUESTION [1] . DISPLAY ONLY 280 CHARECTER OF A STRING LIKE USED IN TWITTER ?

//   let mytweet = "Hmm. Were having trouble finding that site.We can’t connect to the server at web.whatsapp.com If you entered the right address, you can:Try again Check your network connectiess the web (you might be connected but behind a firewall suhs sddcbsdb dscsbcw7eydw uiwegfhdiws sudwhdsvsc";

//   let actualtweet = mytweet.slice(0 , 280);
//   console.log(actualtweet);
//   console.log(mytweet.length);
  






// METHOD [2].  THE SUBSTRING() METHOD ===> ===> 

//  ==>> the substring is similar to slice ()
// ==> the differance is that substring can not accept negative indexes 


// var str = "apple , banana , kiwi";
// let res = str.substring(13,-1);
// console.log(res);


// --->> if we give the negative value then the charecter are the counted from the 0th position.






//  METHOD [3]. THE SUBSTR() METHOD    ====>>

// ==>> substr is similar to slice.
//  ==>> the diffrencee is that the second parameter specifies the lenghth of the extended par



    // var str = "apple , banana , kiwi"
    // let res = str.substr(-4);
    // console.log(res);







           //      [5]    REPLACING STRING CONTENT       \\
        
//   -->  STRING PROTOTYPE.REPLACE(SEARCHFOR , REPLACE WITH);
//   -->  THE REPLACE METHOD REPLACE A SECIFIED VALUE WITH ANOTHER VALUE IN A STRING.


//   let mybiodata = 'i am aniket kusundal';

//   let replacedata = mybiodata.replace("aniket kusundal" , "Aniket Kusundal");
//   console.log(replacedata);



// POINTS TO REMEMBER


// [1] The replace() method does not change the string it is called n it returns a new string
// [2] by defult, the replace method replace only the first Match
// [3] By defult, the replace() method is case secitive writing ANIKET [With upper case] Will not work









               //  [6]. EXTRACTING STRING CHARECTER \\


//  There are three methods for extracting string charcter

//        [1]charAt(position)
//        [2]charcodeAt(position)
//        [3]propertyAccess[]





// METHOD [1].  The CharAt() Method   ===>>

// ----> The charAt() method returns the charecter at a specified index position in a string.

//    let str = 'Aniket Kusundal';

//    console.log(str.charAt(8));



//      METHOD [2]. THE   CharCodeAt() Method ::====>>>  \\

// --> The charCodeAt(index no) method returns the unicode of the charecter at a specified index in a string 
// --> the method returns a UTF-16 code
//        ( An Interger B/w 0  &  65535 )

// var str = 'Aniket Kusundal';
// console.log(str.charCodeAt(0));





//  CHALLENGE TIME 12 ==>>==>>==>>

//  QUESTION .  Return The Unicode Of The Last Charecter In A String.?
// ====>>>>>

// var str = 'i am a Writer';
// let lastchar = str.lenghth -1;
// console.log(str.charCodeAt(lastchar));









                 //  METHOD [3].  PROPERTY ACCESS.   \\

//  --> ECMAScript 5 (2009) Allow Property Access [] On Strings.

    // var str = 'Aniket';
    // console.log(str[0]);











//               [7] OTHER USEFUL METHOD            \\

//  [1] UPPER AND LOWER CASE 

// let myname = "aniket kusundal";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());




//  [2]  THE CONCAT METHOD   \\ 
//  let fname = "Aniket";
//  let lname = "Kusundal";

//  console.log(fname.concat(  +fname));
//  console.log(lname.concat(" "+lname))

//  console.log(fname + lname);
//  console.log(`${fname} ${lname}`);




//  [3]  STRING.TRIM     \\

//  The trim() method removes the whitespaces from both the side of a string.

//    var str = '         HELLO ANIKET!              ';
//    console.log(str.trim());





//  [4]  CCONVERTING A STRING TO AN ARRAY   \\

// --> THE STRING CAN CONVERTED TO AN ARRAY WITH THE SPLIT() METHOD 

// var text = 'a,b,c,d,e';                                     // String 

//   console.log(text.split(','));                             // split on comma
//   console.log(text.split(' '));                             // split on spaces
//   console.log(text.split('|'));                             // split on pipe