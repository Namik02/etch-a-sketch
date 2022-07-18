const sizeButton = document.querySelector('#sizeButton');
sizeButton.addEventListener('click', () => {
    const numb = document.querySelector('#sizeInput').value
    console.log(numb)
})



const grid = document.querySelector('#grid')

for (let i = 1; i < 9; i++) {
    let outerBox = 'oBox' + i

    const horizontalBox = document.createElement('div');
    horizontalBox.classList.add('horizontalBox');
    horizontalBox.classList.add(outerBox);
    grid.appendChild(horizontalBox);

    let test = '.' + outerBox
    let inner = document.querySelector(test)

    for (let i = 1; i < 9; i++) {
        let innerBox = 'iBox' +1
        const verticalBox = document.createElement('div');
        verticalBox.classList.add('verticalBox')
        verticalBox.classList.add(innerBox)
        inner.appendChild(verticalBox);


    }
}







// const qwe = document.querySelector('.box7')
// const ex1 = document.createElement('p');
// ex1.classList.add('ex1');
// ex1.textContent = 'Hey I’m red!'
// ex1.style.color = 'red';
// qwe.appendChild(ex1);;