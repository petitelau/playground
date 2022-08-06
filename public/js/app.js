
const homeLink =document.getElementById('home-link');
const imgLeft = document.getElementById('playground-left');
const imgRigth =document.getElementById('playground-right');
const subeybaja = document.getElementById('subeybaja');

const github = document.getElementById('github');
const codepen = document.getElementById('codepen');

let timer;
function playgroundAnimate() {
    subeybaja.style.display = 'block';
    const i = -1;
    let n= 1;
    
    timer = setInterval(()=> {
        n = n*i;
        if (n == -1)
        subeybaja.style.transform= `scaleX(${n}) translateX(${3}px)`;
        else 
        subeybaja.style.transform= `scaleX(${n})`;
    }, 1300);
}

function init(){
    document.body.onload = ()=> {
        homeLink.classList.add('clicked');
        homeLink.classList.remove('notClicked');
        console.log('onload')
        subeybaja.style.display = 'none';
        
        imgLeft.classList.remove('playground-l');
        imgLeft.classList.add('open-img-l');

        imgRigth.classList.remove('playground-r');
        imgRigth.classList.add('open-img-r');
    

        setTimeout(()=> {
            imgLeft.classList.add('playground-l');
            imgLeft.classList.remove('open-img-l');
            
            imgRigth.classList.add('playground-r');
            imgRigth.classList.remove('open-img-r');

        }, 200);
        setTimeout(()=> {
             playgroundAnimate();
        }, 400);
    }
}

init();
const l = document.links;



