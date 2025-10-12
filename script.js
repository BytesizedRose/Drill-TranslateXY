const sun = document.getElementById('sun');

const left = document.getElementById('left');
const up = document.getElementById('up');
const down = document.getElementById('down');
const right = document.getElementById('right');

let currentX = 0;
let currentY = 0;

function updatePos(){
    sun.style.transform = `translate(${currentX}px,${currentY}px)`;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft'){
        currentX -= 25;
        e.preventDefault();
    } else if (e.key === 'ArrowUp'){
        currentY -= 25;
        e.preventDefault();
    } else if (e.key === 'ArrowDown'){
        currentY += 25;
        e.preventDefault();
    } else if (e.key === 'ArrowRight'){
        currentX += 25;
        e.preventDefault();
    }
    
    updatePos();
    
})

left.addEventListener('click', ()=>{
    currentX -= 25;
    updatePos();
})
right.addEventListener('click', ()=>{
    currentX += 25;
    updatePos();
})
up.addEventListener('click', ()=>{
    currentY -= 25;
    updatePos();
})
down.addEventListener('click', ()=>{
    currentY += 25;
    updatePos();
})