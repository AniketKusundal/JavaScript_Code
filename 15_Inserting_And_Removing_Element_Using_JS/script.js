console.log("Hello");




// [1] innerHTML
// document.querySelector('.Box').innerHTML
// O/p   "Hey i'm Box" 
// container Ki innerHTML





// [2] outerHTML
// document.querySelector('.container').outerHTML

// `<div class="container">\n        <div class="Box">Hey i'm Box</div>\n    </div>`




// [3] tagName


//  Identify the tag name using quarySelector

// document.querySelector('.container').tagName
// O/p "DIV" 
// tagName --> using for only html elements






// [4] nodeName

//  ----> nodeName Also indetify the tag name also applicable for comment node text node

document.querySelector('.container').nodeName
// O/p "DIV" 






// [5] textContent 

// document.querySelector('.Box').textContent
//  "Hey i'm Box" 

// textContent   ---> Access to the text inside the Element



// [6] Hidden

// document.querySelector('.container').hidden
// O/p   false 


// document.querySelector('.Box').hidden = true
// O/p  true 





// We can change Html contatent or text with following code

// document.querySelector('.Box').innerHTML = "Hey I'm Speeking Box"
// "Hey I'm Speeking Box" 




// [7] hasAttribute   ======>>  check the element present or not

// document.querySelector('.Box').hasAttribute("style")
// O/p true 




// [8] getAttribute ---> using this we can identify the what attribute is present in tag 


// document.querySelector('.Box').getAttribute("style")
// O/p  "color: red;" 



// [9] setAttribute  
// document.querySelector('.Box').setAttribute("style" , "color:yellow")
// O/p undefined  but Attribute is set sussccfully 

{/* <div class="Box" style="color:yellow">Hey i'm Box</div> */}




// [10] Attributes



// document.querySelector('.Box').attributes
// O/p NamedNodeMap [ class="Box", style="color: red;" ]
// ---> we can identify the all atrributes present in the tag using this method




// [11] removeAttribute   --> it remove selected attribute from the tag O/p is undefined but in tag Attribute is removed 

// document.querySelector('.Box').removeAttribute("style")
// O/p   undefined 






// Insertion Method In JavaScript

//  Dynamically element creation
let div = document.createElement("h1")
div.innerHTML = "I'm Inserted in the Div"
div.setAttribute("class" , "created" )
// [1] append
// document.querySelector('.container').append(div)  // append in the last


// [2] before()
// document.querySelector('.container').before(div)  // insert just before the container


// [3] prepend()
// document.querySelector('.container').prepend(div)   //efore the first child of the Element



// [4] after()
// document.querySelector('.container').after(div)   // insert after the container tag end 


// [5] replacewith()
// document.querySelector('.container').replaceWith(div)
//  it replace the the Div with the h1 tag 










//  insertAdjesentHTML / Text / Element    ---> tis method use to insert html the first parameter is a code word , specifying where to insert must be one of the following 




const cont = document.querySelector(".container")

// afterbegin()
// cont.insertAdjacentHTML("afterbegin" , '<h5>Plese Help me</h5>') 



// afterend()
// cont.insertAdjacentHTML("afterend" , '<h5>Plese Help me</h5>')   // after container end 



// beforebegin()
// cont.insertAdjacentHTML("beforebegin" , '<h5>Plese Help me</h5>')   // before the container 



// beforeend()
// cont.insertAdjacentHTML("beforeend" , '<h5>Plese Help me</h5>') 







// node remove


// const cont1 = document.querySelector(".Box")
// cont1.remove()   // removes the first






//  Classname Or Class List  




// classlist
// document.querySelector('.container').classList
// DOMTokenList [ "container" ]




// add class to the element
// document.querySelector('.container').classList.add("aniket") 



// remove class from the element
// document.querySelector('.container').classList.remove("aniket") 






// if present remove and return false if false or not present it adds and return true

// document.querySelector('.container').classList.toggle("red")
// false
// document.querySelector('.container').classList.toggle("red")
// true 