function createScriptElement() {
    var scriptElement = document.createElement('script');
    scriptElement.src = '/live2d-widget-master/autoload.js'; // Đường dẫn tới autoload.js
    scriptElement.defer = true; // Thêm thuộc tính defer để tải script sau khi nội dung chính đã tải
    document.body.appendChild(scriptElement); // Thêm vào body của trang

    return scriptElement;
}

function checkDeviceType() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var scriptElement = createScriptElement();
    if (isMobile) {
        scriptElement.classList.add('script-hidden');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    checkDeviceType();
});


// function createGifElement() {
//     var gifContainer = document.createElement('div');
//     gifContainer.classList.add('gif-container');

//     var gifImage = document.createElement('img');
//     gifImage.src = '../img/Capoo/nice.gif'; 
//     gifImage.alt = 'Capoo GIF Image'; 
//     gifContainer.appendChild(gifImage);
//     document.body.appendChild(gifContainer);

//     return gifContainer;
// }

// function checkDeviceType() {
//     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//     var gifContainer = createGifElement();
//     if (isMobile) {
//         gifContainer.classList.add('gif-hidden');
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     checkDeviceType();
// });