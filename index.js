// Случайные изображения
const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1022/600/400',
    'https://picsum.photos/id/1040/600/400',
    'https://picsum.photos/id/1002/600/400'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageCounter = document.getElementById('image-counter');


function showImage(index) {

    sliderImage.src = images[index];
    imageCounter.textContent = `Изображение ${index + 1} из ${images.length}`;
}


nextBtn.addEventListener('click', function() {

    currentIndex++;
    // зацикливание.
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
});


prevBtn.addEventListener('click', function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
});

// Показываем самое первое изображение при загрузке страницы.
showImage(currentIndex);
