const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth,
  H = C.height = innerHeight;

const str = "web JavaScriot SCSS html webpack Git js css ",
matrix = str.split('')

let font = 11,
col = W / font,
arr = []

for(let i = 0; i < col; i++) arr[i] = 1

function draw() {

    $.fillStyle = "rgba(255, 255, 255, .05)"

    $.fillRect(0, 0, W, H)
  
    $.fillStyle = "rgba(0, 0, 255, 0.3)"

    $.font = font + "px system-ui"
  

    for (let i = 0; i < arr.length; i++) {

      let txt = matrix[Math.floor(Math.random() * matrix.length)]
  
      $.fillText(txt, i * font, arr[i] * font)
      
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0
      

      arr[i]++
      }
  }

setInterval(draw, 123)

window.addEventListener('resize', () => location.reload())