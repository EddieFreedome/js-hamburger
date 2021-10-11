const barsIcon = document.querySelector(".header-right>a");
const hamburgerMenu = document.querySelector(".hamburger-menu")
const closeIcon = document.querySelector(".close")

barsIcon.addEventListener("click",

    function() {
        //aggiungere classe active
        //hamburgerMenu.className = hamburgerMenu.className + " active"
        hamburgerMenu.classList.toggle("active")
    }
);

closeIcon.addEventListener("click",

    function() {
        //togliere classe active
        //hamburgerMenu.className = hamburgerMenu.className + " active"
        hamburgerMenu.classList.toggle("active")
    }
);
