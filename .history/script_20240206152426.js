var pixeltable = document.getElementById('pixel-board');
var pallet = document.getElementsByClassName('color');

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

pallet.forEach(function(colorElement){
    colorElement.addEventListener('click', function(){
        const backgroundColor = this.backgroundColor;

    const colors = backgroundColor;
    })
})





function paintpixel() {
    this.style.backgroundColor = 'colors';
}







