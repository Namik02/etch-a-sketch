// Size Button That Resets Grid(If Used) And Runs The CreateGrid() Function
document.querySelector('#sizeButton')
.addEventListener('click', () => {
    grid.replaceChildren();
    createGrid()    
})

// Function To Create Grid Using Number Inputted Into Size Input
function createGrid() {
    const grid = document.querySelector('#grid');
    const gridSize = document.querySelector('#sizeInput').value
    // For Loops That creates Horizontal Component Of Grid 
    for (let i = 1; i <= gridSize; i++) {
        let outerBox = 'oBox' + i
        const horizontalBox = document.createElement('div');
        horizontalBox.classList.add('horizontalBox', outerBox);
        grid.appendChild(horizontalBox);

        temp = '.' + outerBox
        let inner = document.querySelector(temp)
    // For Loop That Creates Vertical Component Of Grid Within A Horizontal Component
     for (let j = 1; j <= gridSize; j++) {
         let innerBox = 'iBox' + j
         const verticalBox = document.createElement('div');
         verticalBox.classList.add('verticalBox', innerBox);
         inner.appendChild(verticalBox);
    // Event Handler Code For Mouseover and Color Selector
         let ref = 'gridX' + i + 'Y' + j    
        verticalBox.classList.add(ref);
        temp = '.' + ref

        document.querySelector(temp)
        .addEventListener('mouseover', function (e) {
        e.target.style.background = document.querySelector('#colorSelector').value;
          });
    }
    }
}