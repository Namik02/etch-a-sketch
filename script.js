// Size Button That Resets Grid(If Used) And Runs The CreateGrid() Function
const sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', () => {
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
        horizontalBox.classList.add('horizontalBox');
        horizontalBox.classList.add(outerBox);
        grid.appendChild(horizontalBox);

        let test = '.' + outerBox
        let inner = document.querySelector(test)
    // For Loop That Creates Vertical Component Of Grid Within A Horizontal Component
    for (let j = 1; j <= gridSize; j++) {
        let innerBox = 'iBox' + j
        let ref = 'gridX' + i + 'Y' + j    
        const verticalBox = document.createElement('div');
        verticalBox.classList.add('verticalBox')
        verticalBox.classList.add(innerBox)
        verticalBox.classList.add(ref)
        inner.appendChild(verticalBox);
    // Event Handler Code
        tempo = '.' + ref
        tempo1 = document.querySelector(tempo)
        tempo1.addEventListener('mouseover', () => {
            verticalBox.classList.add('hover')
        });
    }
    }
}

