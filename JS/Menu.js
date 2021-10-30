
function closeNav() {

    const openNav = document.querySelector('.openNav');
    const closeNav = document.querySelector('.closeNav');
    const containerNav = document.querySelector('.containerOptions');

    closeNav.addEventListener('click', () => {
        containerNav.style.transition = "all 0.4s";
        containerNav.style.width = "0px";
        openNav.style.display = "block";
        closeNav.style.display = "none";
    });
}

function OpenNav() {

    const openNav = document.querySelector('.openNav');
    const closeNav = document.querySelector('.closeNav');
    const containerNav = document.querySelector('.containerOptions');

    openNav.addEventListener('click', () => {
        containerNav.style.transition = "all 0.4s";
        containerNav.style.width = "250px";
        openNav.style.display = "none";
        closeNav.style.display = "block";
    });
}

OpenNav();
closeNav();
