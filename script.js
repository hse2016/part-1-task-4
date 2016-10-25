let leftDecorator = document.getElementById('leftDecorator');
let rightDecorator = document.getElementById('rightDecorator');

let divFloatedRequirements = document.getElementById('floatedRequirements');
let divPlacer = document.getElementById('placer');

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

getHTMLContent(setHTMLContentToPlacer);
hideElementsOfClass(document, 'unsolved');

buttonPressme.onclick = pressmeOnClick;
buttonReqCloser.onclick = reqCloserOnClick;

function setHTMLContentToPlacer(htmlContent) {
  divPlacer.innerHTML = htmlContent;
  hideElementsOfClass(divPlacer, 'solved');
}

function reqCloserOnClick() {
  if (isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);
  }
}

let divArray = [];

function pressmeOnClick() {
  if (! isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);
  }
}

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
