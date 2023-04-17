"use strict"

{
    const debug = document.getElementById("debug");
    
    window.addEventListener("GeolocationCoordinates", (e) => {
        debug.textContent = `${e.latitude}, {e.longtitude}`;
        console.log(e.beta);
    });

    // const canvas = document.getElementById("canvas")

    // document.querySelector('input[type="file"]').onchange = function() {
    //     let img = this.files[0]
    //     let reader = new FileReader()
    //     reader.readAsDataURL(img)
    //     reader.onload = function() {
    //         drawImage(reader.result)
    //     }
    // }

    // function drawImage(url) {
    //     let ctx = canvas.getContext('2d')
    //     let image = new Image()
    //     image.src = url
    //     image.onload = () => {
    //         canvas.width = image.width
    //         canvas.height = image.height
    //         ctx.drawImage(image, 0, 0)
    //     }
    // }
}