const body = document.querySelector("body")

function paintImg(){
    const image = new Image();
    const img = document.createElement("img")
    image.src = `img/${genRanNum()}.jpg`
    image.classList.add("bg-img")
    body.appendChild(image);

}
function genRanNum(){
   return Math.floor(Math.random()*4) +1
}
function init(){
paintImg();
}
init();