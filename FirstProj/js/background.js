const images = [
    "IMG_0.JPG", "IMG_1.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);