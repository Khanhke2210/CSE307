
const imageUrls = [
    'desktop1.jpg',
    'desktop2.jpg',
    'desktop3.jpg'
];

const backgroundDiv = document.getElementById('changing-div');

function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex];
    backgroundDiv.style.backgroundImage = `url(${imageUrl})`;
}

setInterval(changeBackgroundImage, 5000);

function playBackgroundMusic() {
    var audio = document.getElementById('backgroundMusic');
    audio.play();
}

setTimeout(playBackgroundMusic, 12000);