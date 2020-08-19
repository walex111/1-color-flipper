const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const header = document.querySelector('.header');
const homeColorChange = document.querySelector('.home-color-change');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    header.style.color = hexColor;
    homeColorChange.style.color = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}