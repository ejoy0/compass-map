"use strict"

const debug = document.getElementById("debug");

window.addEventListener("deviceorientation", (event) => {
    console.log(`${event.alpha} : ${event.beta} : ${event.gamma}`);
    debug.textContent = event.alpha, event.beta, event.gamma
});