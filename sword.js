// global variables 
let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlansButton = document.querySelectorAll('.button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document. querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

// change display of styles depending on button clicked
for(let i = 0; i < selectPlansButton.length; i++){
    selectPlansButton[i].addEventListener("click", function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

// changes display style back to none - return to original index.html
function promptNegative(){
    backdrop.style.display = 'none';
    if (modal){
        modal.style.display = 'none';
    }
    mobileNav.style.display = 'none';
}

function displayMenu(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
}

// Event listeners 
backdrop.addEventListener("click", promptNegative);
if(modalNoButton){
    modalNoButton.addEventListener("click", promptNegative);
}
toggleButton.addEventListener("click", displayMenu);