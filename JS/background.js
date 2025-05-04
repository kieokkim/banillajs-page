const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;

bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.maxWidth = "100vw";
bgImage.style.maxHeight = "100vh";
bgImage.style.zIndex = "-1";
bgImage.style.objectFit = "cover";
bgImage.style.overflow = "hidden";

document.body.style.overflow = "hidden";

document.body.appendChild(bgImage);

document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
