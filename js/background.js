const images = ["mountain.jpg", "swan.jpg", "tree.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = "img/" + chosenImage;
document.body.appendChild(bgImg);