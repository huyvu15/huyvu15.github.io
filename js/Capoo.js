function createGifElement() {
    var gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');

    var gifImage = document.createElement('img');
    gifImage.src = '../img/Capoo/nice.gif'; 
    gifImage.alt = 'Capoo GIF Image'; 
    gifContainer.appendChild(gifImage);
    document.body.appendChild(gifContainer);

    return gifContainer;
}

function checkDeviceType() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var gifContainer = createGifElement();
    if (isMobile) {
        gifContainer.classList.add('gif-hidden');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkDeviceType();
});