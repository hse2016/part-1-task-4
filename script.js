var popupBackground = document.getElementById('popup-background');
var popupWrapper = document.getElementById('popup-wrapper-table');

function showPopup() {
    popupBackground.style.display='block';
    popupWrapper.style.display='table';
}

function closePopup() {
    popupBackground.style.display='none';
    popupWrapper.style.display='none';
}