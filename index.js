const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");




// const colorarray = [];

// buttons.forEach(  (button) => {
//     colorarray.push(button.id);
// } )


// css box me color set karne ke liye
buttons.forEach((button) => {
    button.style.backgroundColor = button.id;
})



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        // method 1
        body.style.backgroundColor = e.target.id;
        if(e.target.id === 'white' || e.target.id === 'yellow')
            body.style.color = "black";
        else{
            body.style.color = "white";
        }
        


        //method 2

        // colorarray.forEach( (color) =>{
        //     if(e.target.id === color)
        //     {
        //         body.style.backgroundColor=color;
        //     }
        // } )

        // method 3

        // if(e.target.id === 'grey')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'red')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'green')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'blue')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'orange')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'white')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
        // if(e.target.id === 'yellow')
        // {
        //     body.style.backgroundColor=e.target.id;
        // }
    })
})



