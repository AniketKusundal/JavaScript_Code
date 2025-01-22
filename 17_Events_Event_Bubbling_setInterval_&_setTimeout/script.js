let button = document.getElementById("btn")




// addEventListener
button.addEventListener("dblclick" , ()=>{
    document.querySelector(".Box").innerHTML = "<b>Yeyyyyy You Are Clicked</b> Enjoy Your Click"
})


// contextmenu   Mouse Right click
button.addEventListener("contextmenu" , ()=>{
    alert("Dont hack us by right click")
}) 


// keydown
document.addEventListener("keydown" , (e)=>{
    console.log(e.key , e.keyCode);
})
// it return which key press and gives key and keycode


document.addEventListener("keydown" , (e)=>{
    console.log(e);
})