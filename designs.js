// Pixel Art Maker
// Shane Ziegler

// Select color input
const colorPicker = document.querySelector('#colorPicker');
let currentPixelColor = colorPicker.value;
colorPicker.addEventListener('input', function (event) {
    currentPixelColor = colorPicker.value;
})

// Select size input
const sizePicker = document.querySelector('#sizePicker');
const canvasWidth = document.querySelector('#inputWidth');
const canvasHeight  = document.querySelector('#inputHeight');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(evt){
    // Not sure if this is the way the program was supposed to by
    // using the preventDefault method, but I needed a way to stop
    // the page from reloading when the 'submit' button was clicked
    evt.preventDefault();
    makeGrid(canvasWidth.value,canvasHeight.value);
});


function makeGrid(width, height) {
    const pixelTable = document.querySelector('#pixelCanvas');
    // Clear any old canvas/table entries
    pixelTable.innerHTML = '';
    for (var y = 0; y < height; y++) {
        //Add new row to table
        const pixelRow = document.createElement('tr');
        pixelTable.appendChild(pixelRow);
        for (var x = 0; x < width; x++) {
            //Add new cell to table
            const pixelCell = document.createElement('td');
            pixelCell.addEventListener('click', function respondToTheClick() {
                //Set cell color
                pixelCell.style.backgroundColor = currentPixelColor;
            });
          pixelRow.appendChild(pixelCell);
        }
      }
}
