let leftCanvas = document.getElementById('leftCanvas');
let rightCanvas = document.getElementById('rightCanvas');
let div = document.getElementById('nya');

ini(leftCanvas, rightCanvas);
drawGrid(leftCanvas, 10);
drawGrid(rightCanvas, 10);

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

function setContent(div) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html', false);
  xhr.send();

  if (xhr.status !== 200) {
    alert(xhr.status + ': ' + xhr.statusText);
    return;
  }

  div.innerHTML = xhr.responseText;
}

