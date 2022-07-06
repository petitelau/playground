
const canvasArr = document.getElementsByTagName("canvas");
const canvas = canvasArr[0];
const audio = document.getElementById('st');
const img = document.querySelector('#st-logo');
const img2 = document.querySelector('#st-hawk');
const container = document.querySelector('.canvas-container');
const funLink =document.getElementById('fun-link');
const header = document.querySelector('.links-header');
const subheader = document.querySelector('.subheader');
const subcontents = document.querySelector('.subheader-contents');

let h = canvas.height -50;
let w = canvas.width*1.2;


const ctx = canvas.getContext('2d');
let grd = ctx.createRadialGradient(75, 50, 30, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "yellow");
grd.addColorStop(0.7, "purple");


ctx.fillStyle = grd;

const radius = 30;
const ball = {x:10, y:10, dx: 5, dy: 1};
const old  = {x: ball.x, y: ball.y};
let scale=1;
let rebound = 0;
let count = 0;
let monster =0;
let intervalTime = 60


function play() {

    const timer = setInterval(() => {

        if (Math.abs(ball.dx) < 0.1 && Math.abs(ball.dy) < 0.1) {
            clearInterval(timer);
            return;
        }
        count++;
        if (count == 192) {
            clearInterval(timer);
            return;
        }

        nextBoard();
        display();
    }, intervalTime);
}


function nextBoard() {
    old.x = ball.x;
    old.y = ball.y;
    if (ball.y >= h && ball.dy > 0) {  // rebound
        ball.dy -= 4;
        ball.dy *= -1;
        rebound++;
        if (h>500) {  // it goes farther up to this high 
            h=h -50;
        }
    }
    if (ball.x < 5 && ball.dx < 0 || 
        ball.x >= w && ball.dx > 0) {
        ball.dx *= -1;
        ball.dx *= 0.8;
    }  
    ball.x  += ball.dx;
    ball.y  += ball.dy;
    if (count <= 150)
    ball.y = Math.min(canvas.height-50, ball.y);

    ball.dy += 1.5 ;      // constant acceleration
}



function display() {
   
    if (rebound == 2){
        scale -= 0.2;
        if (scale < 0.7 && scale > 0.6) {
            ball.x *=1.3
            ball.y *=1.4
        }
        if (scale < 0.6 ) {
            ball.x *=2
            ball.y *=2.2         
        }
        ball.x *= 1.25
        ball.y *= 1.2
        rebound= 0;
        if (!monster)
            ctx.clearRect(0  , 0, canvas.width +1000, canvas.height+1000 );
        ctx.scale(scale,scale);
    }
    if (!monster)
        ctx.clearRect(0  , 0 , canvas.width+1000, canvas.height+1000 );
    fillBox()
}


function fillBox() {
    ctx.beginPath();
    ctx.arc(ball.x,ball.y, radius, 0, Math.PI*2, false);
    ctx.fill();
}


img.addEventListener('click', ()=>{
    img.style.pointerEvents ="none";
    console.log('play')
    img.style.cursor="none";
    img.style.transform= "scale(0.01)";
    canvas.style.transform= "translateX(-10rem)";
    audio.play();
    play();

    setTimeout( ()=> {
        canvas.style.transform = "rotate(-180deg) ";
        canvas.style.filter= "grayscale(90%)" ;
        ctx.fillStyle = '#111';
        ball.x=10
        ball.y=10
        ball.dx= 5
        ball.dy= 1;
        scale=1;
        rebound =0;
        monster=1;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        intervalTime=30
        play();
        container.style.background = "black";
        img.style.transform= "scale(1)";
        img.style.opacity =1;
        img.style.filter="none";
        img2.style.transform= "scale(1)";
        img2.style.filter="none";

    }, 10500);

    setTimeout( ()=> {
        canvas.style.transform = "rotate(0deg)";
    },11500);

    setTimeout( ()=> {
       img.style.transform = "translateY(200px) rotateX(179deg)";
    }, 20000);
    
    setTimeout( ()=> {
        img.style.transform = "translateY(0px) rotateX(0deg)";
    }, 22000);
});

console.log(funLink)


funLink.onclick = ()=> {
    funLink.classList.add('clicked');
    funLink.classList.remove('notClicked');
    container.style.display="none";
  
    setTimeout(()=> {
        subheader.style.display = "grid";
        subheader.style.height= "auto";
        subheader.style.transform="translateY(100px)";
        subcontents.style.display="block";
    },500);
    setTimeout(()=> {
        subheader.style.margin="-5.8rem 10rem";
        subheader.style.opacity="1";
        subcontents.style.display="block";
    },601);
}


