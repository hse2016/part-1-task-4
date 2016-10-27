function onLoad() { 
	// Checking if wer are popup or not
	if (!window.opener || window.opener === window) 
		document.getElementById('dreams').style.display = "none";
	else 
		document.getElementById('requirements').style.display = "none";

	// Worlds touhgest hack goes there
	if (!window.location.href.includes("=")) {
		weNeedToGoDeeper(0);
		return;
	}

	let lastValue = parseInt(window.location.href.split("=")[1], 10);
	if (lastValue < 10)
		weNeedToGoDeeper(lastValue);
}
function weNeedToGoDeeper(lastValue) {
	document.getElementById('recursion').src = "index.html?recursion_hack=" + (lastValue + 1);
}

function openNewWindow() {
	let popup = window.open("index.html", "_blank", "height=720, width=1280");
	
	if (window.focus) {newwindow.focus();}
}