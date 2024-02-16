// Criançao de Tabela pixel

const pixelTable = document.getElementById('pixel-board');
const tableConfig = {
  height: 5,
  selectedColor: 'black',
};

// modificação tamanho da tabela

const sizeInput = document.getElementById('board-size');
const generetBoard = document.getElementById('generate-board');
const clearBoard = document.getElementById('clear-board');

// Add color pixel

const colorDisplay = document.getElementById('colorDisplay');

// Generete Color palette randon
const paletteTable = document.getElementById('color-palette');

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function paintPixel(event) {
  const { target } = event;

  target.style.backgroundColor = tableConfig.selectedColor;
}

function verifBoard() {
  if (tableConfig.height < 5) {
    tableConfig.height = 5;
  }

  if (tableConfig.height > 50) {
    tableConfig.height = 50;
  }
}

function createBoard() {
  pixelTable.innerHTML = '';

  verifBoard();

  for (let linha = 0; linha < tableConfig.height; linha += 1) {
    const newLine = document.createElement('div');
    newLine.classList.add('line');
    pixelTable.appendChild(newLine);

    for (let pixel = 0; pixel < tableConfig.height; pixel += 1) {
      const newPixel = document.createElement('div');
      newPixel.classList.add('pixel');
      newPixel.addEventListener('click', paintPixel);
      newLine.appendChild(newPixel);
    }
  }
}

generetBoard.addEventListener('click', () => {
  if (!sizeInput.value.trim()) {
    return window.alert('Board Invalido!');
  }

  tableConfig.height = parseInt(sizeInput.value, 10);

  if (tableConfig.height === 0) {
    window.alert('Board Invalido!');
  }

  console.log(tableConfig);

  createBoard();
});

clearBoard.addEventListener('click', () => {
  pixelTable.innerHTML = '';

  createBoard();
});

createBoard();

function addColor() {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

function paletteColor() {
  for (let palette = 1; palette <= 29; palette += 1) {
    const newPalette = document.createElement('div');
    newPalette.classList.add('square', 'rgb', 'color');
    newPalette.style.backgroundColor = addColor();
    paletteTable.appendChild(newPalette);
  }
}

paletteColor();

const colorElements = document.querySelectorAll('.color');

colorElements.forEach((colorElement) => {
  colorElement.addEventListener('click', (event) => {
    const { backgroundColor } = getComputedStyle(event.target);

    colorDisplay.textContent = `Color: ${backgroundColor}`;

    tableConfig.selectedColor = backgroundColor;
    console.log(colorElements);

    colorElements.forEach(

      (element) => element.classList.remove('selected'),
    );

    colorElement.classList.add('selected');
  });
});
