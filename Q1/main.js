/* 

Using the form displayed in index.html, create the following functionality using JavaScript. 

If the user tries to submit the form without entering any info, display an error message on the page that tells them all info is required. 
When users submit their first name and favourite colour, display a customized welcome message on the page in a new H1 that includes their name. Change the background colour of the page to their favourite colour. 

*/

let fn = document.querySelector('input');
let ln = document.getElementsByClassName('firstname');
let c = document.getElementsByClassName('lastname');
let submit = document.getElementsByClassName('submit');
let main = document.querySelector("main");


let h1 = document.createElement("h1");


submit.onclick = function(){
    if (fn.value==""){
        alert("Please input name");
    }
    else if (ln.value==""){
        alert("Please input name");
    }
    else if (c.value==""){
        alert("Please input name");
    } else {
        h1.textContent = "Hello " + fn.value +" "+ln.value;
        main.appendChild(h1);
        document.body.style.backgroundColor = c.value;
    }
}