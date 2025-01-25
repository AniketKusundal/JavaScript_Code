//  Callback AndPromises In Javascript

// console.log('Hello This is line No 1');
// console.log("Hello This Is line No 2");
// console.log("Hello This Is line No 3");


// setTimeout(() => {
//     console.log("I'm line No 4 and I'm in Settimeout");
// }, 2000);

// console.log("Process End");





// Callback()  --> callback function is a function passes into another function as an argument which is invoked inside the outer function to complete an action 


const fn  = () => {
    console.log("Noting in fn")
}


const Callback = (args , fn ) => {
    console.log(args);
    fn()
    
}
const  LoadScript = (src , Callback) =>{
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = Callback("Aniket" , fn)  // pass here fn function
    document.head.append(sc)

}


LoadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,Callback)

// we can pass function as a varibale 




