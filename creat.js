let slides = document.querySelectorAll('.slider img');
let currentSlide = 0;
nextSlide();
genSlideButton();
//let slideInterval = setInterval(nextSlide, 2000);

document.getElementById('previous').addEventListener('click', previousSlide);
document.getElementById('next').addEventListener('click', nextSlide);

function genSlideButton() {
    let div = document.getElementById('buttonSlide');
    for (let i = 0; i < slides.length; i++) {
        div.innerHTML += "<button onclick='selectedSlide(" + i + ")'>" + i + "</button>";
    }
}
function selectedSlide(index){
    slides[currentSlide].className = '';
    currentSlide = index;
    slides[currentSlide].className = 'active';
}

function previousSlide() {
    slides[currentSlide].className = '';
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slides[currentSlide].className = 'active';
}

function nextSlide() {
    slides[currentSlide].className = '';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'active';
}