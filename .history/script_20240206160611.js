const pixeltable = document.getElementById('pixel-board');
const colorPallet = document.getElementById('pallet-container')
let currentColor = 'black';

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
        const backgroundColor = this.style.backgroundColor;
        colorDisplay.textContent = "Color: " + backgroundColor;
    });
});

colorPallet.addEventListener('click', function(event){
   if(event.target.classList.contains('color')){
       Color = event.target.style.backgroundColor;
   }
})

function paintpixel(event) {
    console.log(event.log)
    event.target.style.backgroundColor = Color;
}







