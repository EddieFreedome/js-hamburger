//al click del menù a barre, sotto i 1000px, nascondere barre e mostrare menù hamburger (da display-none a display-block?)
/*const hamburgerMenu = document.querySelector(".hamburger-menu");
const barsMenu = document.querySelector(".close");
const menuActive = document.querySelector(".hamburger-menu.active")*/

const barsIcon = document.querySelector(".header-right>.a");
const hamburgerMenu = document.querySelector(".hamburger-menu")



//1. al click su barsIcon, display none bars
//2. al click sull'hamburger, display da none a block
//3. al click sul .close, display none
barsIcon.addEventListener("click",

    function() {
        //aggiungere classe active
        hamburgerMenu.className = hamburgerMenu.classList + " active"

    }
);
//variabili: .hamburgerMenu bars-menu