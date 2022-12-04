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
            //divsInside.style.backgroundColor = '';
            //divsInside.style.border = '1px solid #8a8a8a';
            //divsInside.style.display = 'flex';
            //divsInside.style.flex = '1 1 0';
            
            divColumn.appendChild(divsInside);
     }}
}
createGrid();



// Mouse hover event
    //Painting black
function eventForBlack(element) {
    element.addEventListener('mouseover', mouseOverBlack);
    element.removeEventListener('mouseover', mouseOverRain);//remove the other event
}

function mouseOverBlack() {
    this.style.backgroundColor = "black";
    console.log('black');
}


    //Painting Rainbow
function eventForRainbow(colorOver) {
    colorOver.addEventListener('mouseover', mouseOverRain);
    colorOver.removeEventListener('mouseover', mouseOverBlack);//remove the other event
}

function mouseOverRain() {
    const rainColors = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#a200ff', '#ff0080'];
    let randColors = rainColors[Math.floor(Math.random() * rainColors.length)];

    this.style.backgroundColor = randColors;
    console.log('rainbow');
}

function paintGrid(event) {
    const gridClass = document.querySelectorAll('.grid-in');
    // console.log(event.currentTarget.className);
    if (event.currentTarget.className === "button-black") {
        gridClass.forEach(eventForBlack);
    } else if (event.currentTarget.className === "button-rainbow") {
        gridClass.forEach(eventForRainbow);
    }
} 



//Grid size
function showInputValue() {
    let inputValue = document.querySelector('#slider-range').value;
    document.querySelector('.slider-progress').textContent = `${inputValue} x ${inputValue}`;
    console.log(inputValue);
    return inputValue;
}



//Resetting the grid
function removeElement(ele) {
    ele.remove('grid-in', 'grid-column');
}

function resetGrid() {
    let selectGrids = document.querySelectorAll('.grid-in, .grid-column');    
    selectGrids.forEach(removeElement);
    // console.log(selectGrids);

    let rows = document.querySelector('#slider-range').value;
    let columns = rows;
    createGrid();
}



//Buttons - events listeners

const inputRange = document.querySelector('#slider-range');
inputRange.addEventListener('click', showInputValue);

const buttonReset = document.querySelector('.button-reset');
buttonReset.addEventListener('click', resetGrid);

const buttonBlack = document.querySelector('.button-black');
buttonBlack.addEventListener('click', paintGrid);

const buttonRain = document.querySelector('.button-rainbow');
buttonRain.addEventListener('click', paintGrid);