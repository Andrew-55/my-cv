const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = C.width = innerWidth*0.99
  H = C.height = innerHeight*1.65;

const str = "JavaScript html CSS webpack } module ( ",
matrix = ["JavaScript", "body", "html", "Redux", "CSS", "git", "webpack", "}", "module", "(", "h1", "React", "//",]

let font = 14,
col = W / font,
arr = []

for(let i = 0; i < col; i++) arr[i] = 1

function draw() {

    $.fillStyle = "rgba(255, 255, 255, .05)"

    $.fillRect(0, 0, W, H)
  
    $.fillStyle = "rgba(0, 0, 255, 0.2)"

    $.font = font + "px system-ui"
  

    for (let i = 0; i < arr.length; i++) {

      let txt = matrix[Math.floor(Math.random() * matrix.length)]
    

      $.fillText(txt, i * font*Math.random() * 15, arr[i] * font)
      
      if (arr[i] * font*20 > H && Math.random() > 0.98) arr[i] = 0
      

      arr[i]++
      }
  }

setInterval(draw, 500)

window.addEventListener('resize', () => location.reload())