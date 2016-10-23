let leftCanvas = document.getElementById('leftCanvas');
let rightCanvas = document.getElementById('rightCanvas');
let divPicture = document.getElementById('nya');
let divFloatedRequirements = document.getElementById('floatedRequirements');
let buttonPressme = document.getElementById('pressme');
let buttonReqCloser = document.getElementById('reqCloser');

ini(leftCanvas, rightCanvas);
drawGrid(leftCanvas, 10);
drawGrid(rightCanvas, 10);
makePicture(divPicture);

buttonPressme.onclick = pressmeOnClick;
buttonReqCloser.onclick = reqCloserOnClick;

// functions

function ini(firstCanvas, secondCanvas) {
  let leftDecorator = document.getElementById('leftDecorator');
  let rightDecorator = document.getElementById('rightDecorator');

  let leftCanvasWidth = leftDecorator.offsetWidth;
  let leftCanvasHeight = leftDecorator.offsetHeight;
  let rightCanvasWidth = rightDecorator.offsetWidth;
  let rightCanvasHeight = rightDecorator.offsetHeight;

  // dich
  firstCanvas.width = leftCanvasWidth;
  firstCanvas.height = leftCanvasHeight;
  secondCanvas.width = rightCanvasWidth;
  secondCanvas.height = rightCanvasHeight;
}

function drawGrid(canvas, diff) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    let count = Math.round((canvas.width + canvas.height) / diff);
    let x1;
    let y1;
    let x2;
    let y2;

    for (let i = 0; i < count; ++i) {
      x1 = 0;
      y1 = -canvas.width + i * diff;

      x2 = canvas.width;
      y2 = -canvas.width + i * diff + canvas.width;

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
    }
    ctx.stroke();
  }
}

function reqCloserOnClick() {
  if (isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);
  }
}

function pressmeOnClick() {
  if (! isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);
  }

  let newX = buttonPressme.offsetLeft;
  let newY = buttonPressme.offsetTop - divFloatedRequirements.offsetHeight;

  if (newY < 0) {
    newY = 0;
  }

  divFloatedRequirements.style.left = newX.toString() + "px";
  divFloatedRequirements.style.top = newY.toString() + "px";
}

function setContent(div, content) {
  div.innerHTML = content;
}

function makePicture(div) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status !== 200) {
      alert(xhr.status + ': ' + xhr.statusText);
      return;
    }

    setContent(div, xhr.responseText);

    let xMod = div.offsetWidth / div.scrollWidth;
    let yMod = div.offsetHeight / div.scrollHeight;
    let mod = xMod > yMod ? yMod : xMod;

    setStyle(div, mod);
  };

  xhr.send();

}

function setStyle(div, mod) {
  let style = '#nya {' +
    `-ms-zoom: ${mod};` +
    `-moz-transform: scale(${mod});` +
    '-moz-transform-origin: 0 0;' +
    `-o-transform: scale(${mod});` +
    '-o-transform-origin: 0 0;' +
    `-webkit-transform: scale(${mod});` +
    `-webkit-transform-origin: 0 0;` +
    'margin-left: auto;' +
    'margin-right: auto;' +
    '}';

  var sheet = document.createElement('style');
  sheet.innerHTML = style;

  document.body.appendChild(sheet);
}

function makeMover(elem, x, y) {
  return function() {
    elem.left = x;
    elem.top = y;
  };
}

function makeVisibilitySetter(elem, next) {
  return function() {
    if (! isVisible(elem)) {
      toggleVisibility(elem);
    }

    console.log(next);
    if (typeof next === 'function') {
      next();
    }
  };
}

function makeVisibilityUnsetter(elem, next) {
  return function() {
    if (isVisible(elem)) {
      toggleVisibility(elem);
    }

    if (typeof next === 'function') {
      next();
    }
  };
}

function toggleVisibility(div) {
  if (hasClass(div, 'invisible')) {
    removeClass(div, 'invisible');
  } else {
    addClass(div, 'invisible');
  }
}
function isVisible(div) {
  return ! hasClass(div, 'invisible');
}

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function removeClass(element, cls) {
  element.className = element.className.replace(
    new RegExp('\\b' + cls + '\\b', 'g'), ''
  );

  element.className = element.className.replace(
    new RegExp('  ', 'g'), ''
  );
}

function addClass(element, cls) {
  element.className = element.className + ' ' + cls;
}
