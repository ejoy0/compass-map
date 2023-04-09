"use strict"

{
    const debug = document.getElementById("debug");
    
    window.addEventListener("deviceorientation", (e) => {
        debug.textContent = e.beta;
        console.log(e.beta);
    });
}