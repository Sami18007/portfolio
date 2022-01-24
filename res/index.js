let bgImage;
let bgImageStartPos;
let pageHeight;
let imageViewer;
let imageViewerImg;

onload = function() {
    initialize();
};

window.addEventListener("orientationchange", function(event) {
    location.reload();
});

onscroll = function() {
    const scrollPercentage = window.pageYOffset / (pageHeight - window.innerHeight);
    const marginTop = bgImageStartPos * (1 - (2.1 * scrollPercentage));
    const distanceToTravel = scrollPercentage * (window.innerHeight - bgImage.offsetHeight);
    bgImage.style.top = `${marginTop + distanceToTravel}px`;
};

const initialize = () => {
    bgImage = document.getElementById('Bg-image');
    bgImageStartPos = bgImage.offsetTop;
    pageHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    imageViewer = document.getElementById('Image-viewer');
    imageViewerImg = document.getElementById('Image-viewer-img');
}

const showImage = (imageSrc) => {
    imageViewerImg.src = imageSrc;
    // imageViewer.style.visibility = "visible";
    imageViewer.style.left = "0";
    imageViewer.setAttribute('state', 'opened');
    // disableScroll();
    shiftFocusToExit();
};

const hideImage = () => {
    // imageViewer.style.visibility = "hidden";
    imageViewer.style.left = "-100%";
    imageViewer.setAttribute('state', 'closed');
    // enableScroll();
    shiftFocusBack();
};

const disableScroll = () => {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
};

const enableScroll = () => {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
};

const shiftFocusToExit = () => {
    document.getElementById('Image-viewer-exit-button').focus();
}

const shiftFocusBack = () => {
    const imageName = document.getElementById('Image-viewer-img')
        .getAttribute('src')
        .replace('.png', '')
        .split('/')[3];
    document.getElementById('Project-image-wrapper-for-' + imageName).focus();
}