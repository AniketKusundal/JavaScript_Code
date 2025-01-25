


// promise Settel Means --->   resolve or reject

// Resolve --> it means promise has setteled succesfully 
// Reject --> it means promise has Not  setteled 





// async function getData(){     // aasync function runnning in the background
//     // Simulate getting data from the server
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {
//            resolve(455) 
//         }, 3000);
//     })
// }



// Fetching API
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("Go it");
      let data = await x.json()
      console.log(data);
}



async function main() {
    
    
    console.log("Data is coming ");
    console.log("Loading your task...");
    console.log("Getting data....");
    let data = await getData()
    console.log("requesting data.....");
    
    console.log(data);
    console.log("Proccesing data ");
    console.log("task performing");
    
}
main()


