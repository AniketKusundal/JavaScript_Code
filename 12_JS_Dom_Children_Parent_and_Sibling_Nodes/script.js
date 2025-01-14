


// console.log(document.body);   ---> it contains  container  ,  div , script 


// firstChild() , lastChild() , ChildNode()



// [1]   childNode()

// The childNodes property returns a collection (list) of an elements's child nodes.

// The childNodes property returns a NodeList object.


// console.log(document.body.childNodes)
// O/p NodeList(9) [ #text, div.container, #text, script, #text, <!--  Code injected by live-server  -->, #text, script, #text ]



// indexing strat from the 0 

// document.body.childNodes[0]
// o/p  #text "\n    "     ---> text node becoze of  space



// document.body.childNodes[1]
// <div class="container">   oon the index 1 div class container is present in the Html page/ document


// document.body.childNodes[1].childNodes   ----->> div class container ke bhi child nodes
// NodeList(11) [ #text, div.box, #text, div.box, #text, div.box, #text, div.box, #text, div.box, … ]






// document.body.childNodes[1]
// <div class="container">

// document.body.childNodes[1].style.backgroundColor = "green"
// "green"
// document.body.childNodes[1].childElementCount
// 5                Box 1 to Box 5
// document.body.childElementCount
// 3     --------------------------------------------------------------------->>>>   container div  , box div , and script
// document.body.childNodes[1]
// <div class="container" style="background-color: green;">

// document.body.childNodes[1].firstChild
// #text "\n        "
// document.body.childNodes[1].lastChild
// #text "\n        "

// document.body.childNodes[1].lastElementChild
// <div class="box">

// document.body.childNodes[1].firstElementChild
// <div class="box">




// document.body.childNodes[1].lastElementChild
// <div class="box">Box 5 </div>

// document.body.childNodes[1].lastElementChild.style.backgroundColor = 'red'      -->>make box 5 background color to red
// document.body.childNodes[1].lastElementChild.style.color = 'white'             --->> make box 5 text color to white 
// "white" 




// document.body.childNodes[1].lastElementChild.parentElement   ---> parent element
// <div class="container">







// document.body.firstElementChild
// <div class="container">

// document.body.firstElementChild.childNodes

// NodeList(13) [ #text, <!--  Hey i'm Box  -->, #text, div.box, #text, div.box, #text, div.box, #text, div.box, … ]




// document.body.firstElementChild.children

//  o/p HTMLCollection { 0: div.box, 1: div.box, 2: div.box, 3: div.box, 4: div.box, length: 5 }



// document.body.firstElementChild.children[2]
// //  o/p      <div class="box">Box 2</div>
// upto Box 1 to Box 5




// document.body.firstElementChild.children[1].nextElementSibling 
// //  o/p      <div class="box">Box 3</div>




// document.body.firstElementChild.children[1].priviousElementSibling 
// //  o/p      <div class="box">Box 3</div>










// document.body.children

// o/p { 0: div.container, 1: table, 2: script, 3: script, length: 4 }






// document.body.children[1]
//O/P  <table>




// Table Rows
// document.body.children[1].rows
// HTMLCollection { 0: tr, 1: tr, 2: tr, length: 3 }