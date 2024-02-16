var pixeltable = document.getElementById('pixel-board');
var pallet = document.getElementById('pallet-container');

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

var newpallet = document.createElement('div');
newpallet.classList('color','square', 'black');
pallet.appendChild.newpallet



function paintpixel() {
    this.style.backgroundColor = 'red';
}







