let bgImage;
let bgImageStartPos;

onload = function() {
    bgImage = document.getElementById('Bg-image');
    bgImageStartPos = bgImage.offsetTop;
};

onscroll = function() {
    bgImage.style.top = `${(window.pageYOffset / 5) + bgImageStartPos}px`;
};