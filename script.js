var popupBackground = document.getElementById('popup-background');

// document.getElementById('press-me-button').onclick = function() {
// }
//
// document.getElementById('popup-close-button').onclick = function() {
// }

// window.addEventListener('load', function () {
//
// }, true);

function onLoad(event) {
    console.log('on load...');
    var popupHTML = document.querySelector('link[rel="import"]').import;
    var content = popupHTML.querySelector('p');
    document.getElementById('popup-content').appendChild(content.cloneNode(true));
    console.log('...done');
}

function handleError(event) {
    console.log('Error loading import: ' + event.target.href);
}

function showPopup() {
    popupBackground.style.display='block';
}

function closePopup() {
    popupBackground.style.display='none';
}
// window.addEventListener('resize', onResize, true);
//
// window.addEventListener('load', onResize, true);
//
// var content = document.getElementsByClassName('content')[0];
//
// function onResize() {
//     // var content = document.getElementsByClassName('content')[0];
//     // console.log(content.offsetWidth);
//
//     console.log('loaded');
// }
