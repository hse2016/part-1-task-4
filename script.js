// Initialization at the beginning of loading
let divFloatedRequirements = document.getElementById('floatedRequirements0');
let divPlacer = document.getElementById('placer0');

let buttonPressme = document.getElementById('pressme0');
let buttonReqCloser = document.getElementById('reqCloser0');

// These makes recursive layouting
let cloned = document.getElementsByClassName('container-top')[0].cloneNode(true);
document.getElementsByClassName('wrapper')[0].appendChild(cloned);

let cloned2 = cloned.cloneNode(true);
cloned.getElementsByClassName('wrapper')[0].appendChild(cloned2);

getHTMLContent(setHTMLContentToPlacer, divPlacer);
hideElementsOfClass(document, 'unsolved');

// Handlers
buttonPressme.onclick = pressmeOnClick;
buttonReqCloser.onclick = reqCloserOnClick;

let metacloned = cloned.cloneNode(true);
function cloneContent() {
  return metacloned.cloneNode(true);
}

// When content will be available wet it to div
function setHTMLContentToPlacer(targetDivPlacer, htmlContent) {
  targetDivPlacer.insertAdjacentHTML('beforeend', htmlContent);
  targetDivPlacer.getElementsByClassName('wrapper')[0].appendChild(cloneContent());
  hideElementsOfClass(targetDivPlacer, 'solved');
}

// Handles event when close button is pressed
function reqCloserOnClick() {
  if (isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);
  }
}

// Handles event when pressme is pressed
function pressmeOnClick() {
  if (! isVisible(divFloatedRequirements)) {
    toggleVisibility(divFloatedRequirements);

    let width = divPlacer.offsetWidth;
    let height = divPlacer.offsetHeight;

    divFloatedRequirements.style.width = width;
    divFloatedRequirements.style.height = height;
  }
}

// Returns full html content of the page
function getHTMLContent(callback, targetPlacer) {
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
      callback(targetPlacer, xmlhttp.responseText);
    }
  };
  xmlhttp.open("GET", theUrl, true);
  xmlhttp.send();
}

// Hides all elements which have this class
function hideElementsOfClass(root, cls) {
  let elems = root.getElementsByClassName(cls);

  for (let i = 0; i < elems.length; ++i) {
    if (isVisible(elems[i])) {
      toggleVisibility(elems[i]);
    }
  }
}

// Toggles visibility of the div
function toggleVisibility(div) {
  if (hasClass(div, 'invisible')) {
    removeClass(div, 'invisible');
  } else {
    addClass(div, 'invisible');
  }
}

// Returns true if element is visible
function isVisible(div) {
  return ! hasClass(div, 'invisible');
}


// Returns true if element has target class name
function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

// Removes class from element class list
function removeClass(element, cls) {
  element.className = element.className.replace(
    new RegExp('\\b' + cls + '\\b', 'g'), ''
  );

  element.className = element.className.replace(
    new RegExp('  ', 'g'), ' '
  );
}

// Adds new class to class list of element
function addClass(element, cls) {
  element.className = element.className + ' ' + cls;
}
