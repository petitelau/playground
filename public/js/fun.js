const title = document.getElementById('title');
const funLink =document.getElementById('fun-link');
const header = document.querySelector('.links-header');
const subheader = document.querySelector('.subheader');
const subcontents = document.querySelector('.subheader-contents');

const animateHomeLeave = ()=> {
    title.classList.remove('go-title');
    title.classList.add('leave-title');
    header.classList.add('up-header');

   /* subeybaja.style.display = 'none';
    imgLeft.style.setProperty('--open-width', '0px');
    imgLeft.style.setProperty('--anim-time', '.5s');
    imgLeft.classList.remove('playground-l');
    imgLeft.classList.add('open-img-l');

    imgRigth.style.setProperty('--open-width', '0px');
    imgRigth.style.setProperty('--anim-time', '.5s');
    imgRigth.style.setProperty('--open-move', '400px');
    imgRigth.classList.remove('playground-r');
    imgRigth.classList.add('open-img-r');
    imgRigth.style.boxShadow="none";
*/
}

const init_fun= ()=> {

    funLink.classList.add('clicked');
    funLink.classList.remove('notClicked');
    //animateHomeLeave();
  
    setTimeout(()=> {
        subheader.style.display = "grid";
        subheader.style.height= "auto";
        subcontents.style.display="block";
    },500);
    setTimeout(()=> {
        subheader.style.margin="5.8rem 10rem 5.8rem 5rem";
        subcontents.style.display="block";
    },601);
}

init_fun();
