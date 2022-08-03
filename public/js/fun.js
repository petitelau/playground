const title = document.getElementById('title');
const funLink =document.getElementById('fun-link');
const header = document.querySelector('.links-header');
const subheader = document.querySelector('.subheader');
//const subcontents = document.querySelector('.subheader-contents');

const init_fun= ()=> {

    funLink.classList.add('clicked');
    funLink.classList.remove('notClicked');
  
    setTimeout(()=> {
        subheader.style.display = "grid";
        subheader.style.height= "auto";
       // subcontents.style.display="block";
    },500);
    setTimeout(()=> {
        subheader.style.margin="5.8rem 10rem 5.8rem 5rem";
       // subcontents.style.display="block";
    },601);
}

init_fun();
