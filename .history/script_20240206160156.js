const pixeltable = document.getElementById('pixel-board');
const colorPallet = document.getElementById('pallet-container')
let currentColor = null;

const colorElements = document.querySelectorAll('.color');
const colorDisplay = document.getElementById('colorDisplay');


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
colorElements.forEach(function(colorElement) {
    colorElement.addEventListener('click', function() {
        // Obtém a cor de fundo do elemento clicado
        const backgroundColor = this.style.backgroundColor;
        // Exibe a cor clicada
        colorDisplay.textContent = "Color: " + backgroundColor;
    });
});

colorPallet.addEventListener('click', function(event){
    if(event.target.classList.contains('color')){
        currentColor = event.target.style.backgroundColor;
    }
})

function paintpixel() {
    this.style.backgroundColor = currentColor;
}







