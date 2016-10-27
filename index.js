function onLoad() {
	document.getElementById('recursion').src = "index.html?recursion_hack=" + Math.random();
}

function openNewWindow() {
	window.open("index.html", "_blank", "height=720, width=1280");
	if (window.focus) {newwindow.focus();}
}