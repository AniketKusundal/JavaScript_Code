
//                                                        SECTION ---   11 

//                                             TIMING BASED EVENTS IN JAVASCRIPT                                           //

 



//   WHAT WE WILL DO 

// 1) setTimeout()

// 2) Setinterval()

// 3) cleartimeout()

// 4) clearinterval()










//  METHOD  (1)  ::=   SetTimeout()

// HTML CODE TO RUN FOLLOWING CODE

<div></div>








// js code

const myname = document.querySelector(name);

const btn = document.querySelector(btn);

const name=()=>{
    mybame.innerHTMl = "loading......"

    setTimeout(() => {
        myname.innerHTML="Aniket Kusundal"
    }, 2000);

    btn.AddEventlistner('click',name);
    
}

