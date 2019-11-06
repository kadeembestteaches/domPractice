
//This fetches the button from the DOM TREE
let button =document.querySelector("#but");

//make the button an event listener 
button.addEventListener("click", ()=>{

    /*The below fetches the value from the text box and a
    assigns its value to the variable val*/
    let val = parseInt(document.querySelector("#num").value);

    /*
        The below fetches the div from the DOM tree 
        and assigns its value to the variable div

    */
    let div = document.querySelector("div");
   
    /*This if else block test if the value is an
    even or not
    */
    if(val%2==0)
    {
        //We write the output to the innerHTML of the element
        div.innerHTML=`${val} is an even number`;
    }
    else
    {
        div.innerHTML=`${val} is an odd number`;

    }
});


//Fetch the button from the DOM Tree
let changeColorButton = document.querySelector("#changeColor");

//Make button an eventListener (Event Listener is an element that sits in your application and waits for an event to be triggered)
changeColorButton.addEventListener("click",()=>{


    let  box2= document.querySelector("#secondbox");
    
    box2.style.backgroundColor="red";

});

//Fetches button from DOM tree
let vanishButton= document.querySelector("#vanishBut");

vanishButton.addEventListener("click",()=>{

    let div= document.querySelector("#firstBox");

    div.style.display="none";
})

