// script.js
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let counter = 0;

    document.querySelector('.count-btn').addEventListener('click', () => {
        counter++;
        counterElement.innerText = counter;
    });

    document.querySelector('.change-bg-btn').addEventListener('click', () => {
        const randomColor1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        const randomColor2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        document.body.style.backgroundImage = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    });
});