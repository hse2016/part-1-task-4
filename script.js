var popupBackground = document.getElementById('popup-background');
var pupupWrapper = document.getElementById('popup-wrapper-table');

function showPopup() {
    popupBackground.style.display='block';
    pupupWrapper.style.display='table';
}

function closePopup() {
    popupBackground.style.display='none';
    pupupWrapper.style.display='none';
}