// Creating the GRID
const container = document.querySelector('#container');

function createGrid() {
    let rows = document.querySelector('#slider-range').value;
    let columns = rows;
    console.log(columns);
    
    for (let i = 0; i < rows; i++) {
        const divColumn = document.createElement('div');
        divColumn.classList.add('grid-column');
        //divColumn.style.backgroundColor = 'white';
        //divColumn.style.border = '0px 1px solid black';
        //divColumn.style.display = 'flex';
        //divColumn.style.flex = '1 1 0';
        divColumn.style.flexDirection = 'column';
        
        container.appendChild(divColumn);
    
        for (let i = 0; i < columns; i++) {
            const divsInside = document.createElement('div');
            divsInside.classList.add('grid-in');
            //divsInside.style.backgroundColor = 'white';
            //divsInside.style.border = '1px solid #8a8a8a';
            //divsInside.style.display = 'flex';
            //divsInside.style.flex = '1 1 0';
            
            divColumn.appendChild(divsInside);
     }}
}
createGrid();



// Mouse hover event

function eventForEach(element) {
    element.addEventListener('mouseover', mouseOver)
}

function mouseOver() {
    this.style.backgroundColor = 'black';
    //console.log(this);
}

const colorGrid = document.querySelectorAll('.grid-in');
colorGrid.forEach(eventForEach);



//Button for setting the grid

function showInputValue() {
    let inputValue = document.querySelector('#slider-range').value;
    document.querySelector('.slider-progress').textContent = `${inputValue} x ${inputValue}`;
    console.log(inputValue);
    return inputValue;
}

let inputValue = "";
//let sliderProgress = document.querySelector('.slider-progress').textContent = `${inputValue} x ${inputValue}`
console.log(inputValue);

const inputRange = document.querySelector('#slider-range');
inputRange.addEventListener('click', showInputValue);



//Resetting the grid

function clearGrid() {
    colorGrid.style.backgroundColor = 'white';
}

function resetGrid() {
    colorGrid.forEach(clearGrid);
    console.log(colorGrid);
}

const resetting = document.querySelector('grid-column');
const resetButton = document.querySelector('.button-reset');
resetButton.addEventListener('click', resetGrid);