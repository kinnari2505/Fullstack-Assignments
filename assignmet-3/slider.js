const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

// Next button
nextBtn.addEventListener('click', () => 
{
    counter = (counter + 1) % images.length;
    updateSlider();
});

// Previous button
prevBtn.addEventListener('click', () => 
{
    counter = (counter - 1 + images.length) % images.length;
    updateSlider();
});

// Auto-slide every 3 seconds
setInterval(() => 
{
    counter = (counter + 1) % images.length;
    updateSlider();
}, 3000);

function updateSlider() 
{
    const size = slider.clientWidth;
    slider.style.transform = `translateX(${-size * counter}px)`;
}

// Adjust slider when window resizes
window.addEventListener('resize', updateSlider);
