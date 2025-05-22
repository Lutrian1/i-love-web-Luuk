let startButton = document.querySelector('button');
let flower = document.querySelector('.flower'); 

startButton.addEventListener('click', flowerAni,);

function flowerAni() {
    startButton.classList.add('clicked');
        setTimeout(() => {
            console.log("Korte Timeout voor animatie");
            startButton.classList.remove('clicked');
            flower.classList.add('flowerAni'); 
        }, 450);
        flower.classList.remove('flowerAni'); 
}

