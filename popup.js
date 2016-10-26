'use strict';

document.querySelectorAll('[popup-show]').forEach(element => {
  element.onclick = () => {
    let popup_id = element.getAttribute('popup-show');
    document.getElementById(popup_id).style.display = 'block';
  };
});

document.querySelectorAll('.popup').forEach(popup => {
  popup.onclick = (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  };
});

document.querySelectorAll('[popup-close]').forEach(element => {
  element.onclick = () => {
    let popup_id = element.getAttribute('popup-close');
    if (popup_id.length > 0) {
      document.getElementById(popup_id).style.display = 'none';
    }
  };
});

document.querySelectorAll('.popup').forEach(popup => {
  if (popup.id.length > 0) {
    popup.querySelectorAll('[popup-close]').forEach(element => {
      element.onclick = () => {
        document.getElementById(popup.id).style.display = 'none';
      };
    });
  }
});
