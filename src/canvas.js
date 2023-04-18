const body = document.querySelector('body');
const wb = body.offsetWidth;
const hb = body.offsetHeight;
const C = document.querySelector('canvas'),
  $ = C.getContext('2d'),
  W = C.width = wb
  H = C.height = hb

const str = '10111 11 100 00 111 0000 111 000',
  matrix = str.split('');
let font = 14,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  $.fillStyle = 'rgba(255, 255, 255, .05)';

  $.fillRect(0, 0, W, H);

  $.fillStyle = 'rgba(0, 0, 255, 0.2)';

  $.font = font + 'px system-ui';

  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];

    $.fillText(txt, i * font, arr[i] * font);

    if (arr[i] * font * 20 > H && Math.random() > 0.98) arr[i] = 0;

    arr[i]++;
  }
}

setInterval(draw, 250);

window.addEventListener('resize', () => location.reload());
