"use strict"

const debug = document.getElementById("debug");

let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
    debug.textContent = gyroscope.x;
});
gyroscope.start();