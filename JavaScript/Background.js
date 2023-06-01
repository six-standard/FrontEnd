const imgs = ["1.jpg", "2.jpg", "3.jpg"];
const imgTback = imgs[Math.floor(Math.random() * imgs.length)];
document.body.style.background = `url("../IMG/${imgTback}")`