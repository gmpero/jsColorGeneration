const text = document.querySelector('.text');
const block = document.querySelector('.block');
const btn = document.querySelector('.btn');

const HEX = '0123456789ABCDEF'

const getRandomColor = () =>{
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color = color + HEX[Math.floor(Math.random() * 16)];    
    }
    return color;
}

btn.addEventListener("click", ()=>{
    const currentColor = getRandomColor();
    block.style.backgroundColor = currentColor;
    text.textContent = currentColor;
})