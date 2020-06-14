const body = document.querySelector("body");


function paintImg(){
    const image = new Image();
    const imgNum = makeRandom();
    image.src = `img/${imgNum}.jpg`;
    body.appendChild(image);
    body.classList.add("imgCss")
   
}

function makeRandom(){
    const randomNum = Math.floor(Math.random()*4)+1;
    return randomNum;
}

function init(){
    paintImg();
}
init();

