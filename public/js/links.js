const link =document.getElementById('links');
const header = document.querySelector('.links-header');


const init_links= ()=> {

    link.classList.add('clicked');
    link.classList.remove('notClicked');

   
}

init_links();
