function CreateCard(title , CName , views , monthsOld , duration , thumbnail)
{

    let  VideoViews
    if (views < 1000) {
         VideoViews = views
    }
    else if(views > 1000000){
        VideoViews = views/1000000 + "M"
    }
    else
    {
         VideoViews = views/1000 + "K"
    }


    let html = `
          <div class="Card">
            <div class="image">
                <img src="${thumbnail}" alt="">

                <div class = "capsule">${duration}</div>


            </div>

                <div class="Text">  
                    <h1>${title}</h1>
                    <p>${CName} . ${VideoViews} views . ${monthsOld} months ago</p>

                </div>
        </div>       
    `

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

// card 1
CreateCard("Write our first program in JS" , "Aniket Kusundal" , 10000000 , 1 , "12:23" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")



// card 2
CreateCard("Write our first program in JS" , "Aniket Kusundal" , 10000000 , 1 , "12:23" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")



// card 3
CreateCard("Write our first program in JS" , "Aniket Kusundal" , 100 , 1 , "12:23" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")



// card 4
CreateCard("Write our first program in JS" , "Aniket Kusundal" , 10000000 , 1 , "12:23" , "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w")