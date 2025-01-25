// Promises in javaScript


// The solustion to the call back hell is promises a promise is a  promise of code execution the code either excutes or fails in both te cases the solustion will be notified 



// The Syntax of the Promise In JavaScript


// let promise = new Promise(function(resolve , request){
//     // code
// })

// Promise is a constructur


console.log("JavaScript Promise");



let promise1 = new Promise((resolve ,  reject)=>{
    let random = Math.random();
    if(random < 0.5)
    {
        reject("No Random Number Is Supporting you")
    }
    else
    {
        setTimeout(() => {
            console.log("yes i'm done");
            resolve("Aniket")
            
        }, 3000);
    }
})


promise1.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err + " Error is Occured");
    
})



// .then and .catch This is known as consumer

// the consumer code can recive the final result of a promise through then and catch   


// the most fundamental one is then 

// promise1.then(function(result)){/* handel */}
// promise1.then(function(error)){/* handel error */}



//  if we intrested only in succesful competations we can provide only one function argument to then()

// promise1.then(alert)


// if we are intrested only in error we can use null as the first argument then(null , f)
// or we can use catch
// promise1.catch(aleart)

// promise1.finally(()=>{}) is use to genral cleanups











//  PROMISE CHANING

// WE CAN CHAIN PROMISE AND MAKE THEM PASS THE RESOLVED VALUE TO ONE  ANOTHER LIKE THIS 

// p.then(Function(result)=>{   // p is a promise
//     alert(result);
//     return 2
// }).then


// this idea is pass the result through the  chain of the handelers 

// here is a flow of the execution 