const pixeltable = document.getElementById('pixel-board');
const colorPallet = document.getElementById('pallet-container')
let currentColor = 'black';

const colorElements = document.querySelectorAll('.color');
const colorDisplay = document.getElementById('colorDisplay');


for (linha = 0; linha < 5; linha += 1) {

    let newLine = document.createElement('div')
    newLine.classList.add('line')
    pixeltable.appendChild(newLine);

    for (pixel = 0; pixel < 5; pixel += 1) {
        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        newPixel.addEventListener('click', paintpixel);
        newLine.appendChild(newPixel)
    }
}

colorElements.forEach(function(colorElement) {
    colorElement.addEventListener('click', (event) => {
        const backgroundColor = getComputedStyle(event.target).backgroundColor;
       
        colorDisplay.textContent = `Color: ${backgroundColor}`

        currentColor = backgroundColor
    });
});

// colorPallet.addEventListener('click', function(event){
//    if(event.target.classList.contains('color')){

//     console.log(event.target.style, 'ola')


//     currentColor = event.target.style.backgroundColor;

//     console.log(currentColor)
//    }
// })

function paintpixel(event) {
    console.log(event.target)
    event.target.style.backgroundColor = currentColor;
}







