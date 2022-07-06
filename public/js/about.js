const aboutContainer = document.querySelector('.about');
const textAbout = document.querySelectorAll('.text-shape');
//const header = document.querySelector('.links-header');
const aboutLink = document.getElementById('about-link');
const spotlight = document.getElementById('spotlight');
const photo = document.getElementById('myPhoto');
console.log(aboutLink)

const initAbout = ()=> {

aboutLink.classList.add('clicked');
aboutLink.classList.remove('notClicked');

//header.classList.add('up-header');
}

initAbout();

document.onmousemove = evt => {
    spotlight.style['left'] = evt.clientX + 'px';
    spotlight.style['top']  = evt.clientY + 'px';
}

photo.onmouseover = ()=> photo.style.filter="none";
photo.onmouseleave = ()=> photo.style.filter="blur(3px)";


Array.from(textAbout).forEach( t=> {
    t.onmouseover = ()=> {
        t.style.mixBlendMode="multiply";
        t.style.filter="none";
    }
    t.onmouseleave = ()=> t.style.mixBlendMode="soft-light";

});
