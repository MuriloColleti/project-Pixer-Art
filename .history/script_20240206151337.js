var pixeltable = document.getElementById('pixel-board');

for (linha = 0; linha < 5; linha += 1) {

    var newLine = document.createElement('div')
    newLine.classList.add('line')
    pixeltable.appendChild(newLine);

    for (pixel = 0; pixel < 5; pixel += 1) {
        var newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        newPixel.addEventListener('click', paintpixel);
        newLine.appendChild(newPixel)
    }
}

const colorElements = document.getElementsByClassName('color');

function colorElements(click, color) {

    colorElement.addEventListener('click', color ); {
        const backgroundColor = this.style.backgroundColor;

        const color = backgroundColor;
    };

};


function paintpixel() {
    this.style.backgroundColor = 'color';
}







