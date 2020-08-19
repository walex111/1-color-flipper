const colors = ["grey", "black", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const header = document.querySelector('.header');
const homeColorChange = document.querySelector('.home-color-change');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    header.style.color = colors[randomNumber];
    homeColorChange.style.color = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}