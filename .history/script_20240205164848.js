var pixeltable = document.getElementById('pixel-board');

//var newPixel = document.createElement("div")

//newPixel.classList.add("pixel")

//pixel.appendChild(newPixel);


for(linha = 0; linha < 5; linha += 1){

    var newLine = document.createElement('div')
    newLine.classList.add('line')
    pixeltable.appendChild(newLine);

    for(pixel = 0; pixel < 5; pixel += 1){
    var newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    newLine.appendChild(newPixel)
    }

}



