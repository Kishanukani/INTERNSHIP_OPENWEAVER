const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
// let img1 =document.getElementById('img1') 
// let img2 =document.getElementById('img2') 
// let img3 =document.getElementById('img3') 
let chilElements= document.getElementsByClassName('slider')

let currentIndex = 1;

prevButton.addEventListener('click', () => {
    // img2.style.opacity = 0;
    chilElements[1].style.opacity=1;
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slider.children.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
