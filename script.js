let leftCanvas = document.getElementById('leftCanvas');
let rightCanvas = document.getElementById('rightCanvas');

let leftDecorator = document.getElementById('leftDecorator');
let rightDecorator = document.getElementById('rightDecorator');

let divPicture = document.getElementById('nya');
let divFloatedRequirements = document.getElementById('floatedRequirements');
// let divPlacer = document.getElementById('placer');

let buttonPressme = document.getElementById('pressme');
let buttonReqCloser = document.getElementById('reqCloser');

let resized = false;

let cloned = document.getElementsByClassName('container-top')[0].cloneNode(true);
document.getElementsByClassName('wrapper')[0].appendChild(cloned);

let cloned2 = cloned.cloneNode(true);
cloned.getElementsByClassName('wrapper')[0].appendChild(cloned2);

window.onresize = function(event) {
  resized = true;
};

ini(leftCanvas, rightCanvas, leftDecorator, rightDecorator);
drawGrid(leftCanvas, 10);
drawGrid(rightCanvas, 10);
hideElementsOfClass(document, 'unsolved');

setInterval(function() {
  if (! resized) {
    return;
  }

  ini(leftCanvas, rightCanvas, leftDecorator, rightDecorator);
  drawGrid(leftCanvas, 10);
  drawGrid(rightCanvas, 10);
  resized = false;
}, 500);

buttonPressme.onclick = pressmeOnClick;
buttonReqCloser.onclick = reqCloserOnClick;

// functions

function getHTMLContent(callback) {
  let theUrl = "";
  if (window.XMLHttpRequest) {
    xmlhttp=new XMLHttpRequest();
  }
  else {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      callback(xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", theUrl, true);
  xmlhttp.send();
}

function ini(firstCanvas, secondCanvas, leftDec, rightDec) {
  let leftCanvasWidth = leftDec.offsetWidth;
  let leftCanvasHeight = leftDec.offsetHeight;
  let rightCanvasWidth = rightDec.offsetWidth;
  let rightCanvasHeight = rightDec.offsetHeight;

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
  toggleVisibility(divFloatedRequirements);

  let childLeftCanvas = divPlacer.getElementById('leftCanvas');
  let childCanvasRight = divPlacer.getElementById('rightCanvas');
  let childLeftDec = divPlacer.getElementById('leftDecorator');
  let childRightDec = divPlacer.getElementById('rightDecorator');

  ini(childLeftCanvas, childCanvasRight, childLeftDec, childRightDec);
  drawGrid(childLeftCanvas);
  drawGrid(childRightCanvas);
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

function hideElementsOfClass(root, cls) {
  let elems = root.getElementsByClassName(cls);

  for (let i = 0; i < elems.length; ++i) {
    if (isVisible(elems[i])) {
      toggleVisibility(elems[i]);
    }
  }
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
