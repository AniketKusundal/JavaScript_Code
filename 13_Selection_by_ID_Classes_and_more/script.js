
// Accessing HTML element by the class name

const Boxes = document.getElementsByClassName("Box")
// console.log(Boxes);

Boxes[2].style.backgroundColor = 'red'





// Accessing HTML element by the ID


document.getElementById("BoxRed").style.backgroundColor = 'red'




// Accessing HTML element by the quarySelector


document.querySelector(".Box").style.backgroundColor = 'yellowgreen '   // returns the first element how match the .Box first


// Accessing HTML element by the quarySelectorAll
// console.log(document.querySelectorAll(".Box")); 
//   // returns the All the HTMl collection Hows class name is BOx



// Itrate with the each element of the nodelist
document.querySelectorAll(".Box").forEach(e =>{
    e.style.backgroundColor = "orange"
})




// Accessing HTML element by the getElementbytagName

console.log(document.getElementsByTagName("div"))  
// returns all the div tags from the our hole page





//  Matches Closest and Contains Method


// Matches ()


// The matches() method returns true if an element matches a specific CSS selector(s).

// The matches() method returns false if not.

let e =  document.getElementsByTagName("div")

console.log(e[3].matches("#BoxRed"))
// True

console.log(e[2].matches("#BoxRed"))
// False Becoz selector not matches






// Closest()
// The closest() method searches up the DOM tree for elements which matches a specified CSS selector.



console.log(e[2].closest("#Boxred"));
// O/p null


console.log(e[2].closest("html"));

// O/p   <html lang="en">
// if does not match anything returns the null










// contains()
// The contains() method returns true if a node is a descendant of a node.
// The contains() method returns false if not.



console.log(document.querySelector(".container").contains(e[2]))
//  True 



console.log(document.querySelector(".container").contains(e[0]))
// true it contains Self also


console.log(document.querySelector(".container").contains(document.querySelector("body")))

// False .container does not contains body that why false


console.log(document.querySelector("body").contains(document.querySelector(".container")))

//  True  body contains the co.container thats why answer is true