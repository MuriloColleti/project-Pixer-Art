var pixel = document.getElementById('pixel-board');

//var newPixel = document.createElement("div")

//newPixel.classList.add("pixel")

//pixel.appendChild(newPixel);

for(index = 0; index < 25; index += 1){

    var newPixel = document.createElement("div")
    newPixel.classList.add("square")
    pixel.appendChild(newPixel);

}

