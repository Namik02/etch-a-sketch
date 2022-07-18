const grid = document.querySelector('#grid')

for (let i = 0; i < 8; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    grid.appendChild(box);   
}

const inner = document.querySelector('.box')

for (let i = 0; i < 8; i++) {
    const dox = document.createElement('div');
    dox.classList.add('dox')
    
    inner.appendChild(dox); 
}