function toggleMenu() {
    var menuContainer = document.querySelector('.menu-conatiner');

    if (menuContainer) {
        if (menuContainer.style.width === '300px') {
            menuContainer.style.width = '0px';
        } else {
            menuContainer.style.width = '300px';
        }
    }
}


function closeMenu() {
    var menuContainer = document.querySelector('.menu-conatiner');

    if (menuContainer) {
        menuContainer.style.width = '0px';
    }
}


const toggleBox = document.querySelector('.toggle-box-container');

toggleBox.addEventListener('click', () => {
    const sidebarMain = document.querySelector('.sidebar-main-container');
    const sidebarSpan = document.querySelector('.sidebar-ul');
    const sidebarli = document.querySelectorAll('.sidebar-li');
    const spans = sidebarSpan.getElementsByTagName("span");

    document.querySelector('.right-content-section').classList.toggle('right-content-section-flex')
    sidebarMain.classList.toggle("hide-sidebar");
    toggleBox.classList.toggle("toggle-box-container-show");

    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("dislpay-none");

    }
    for (let i = 0; i < sidebarli.length; i++) {
        sidebarli[i].classList.toggle("sidebar-icon-center");
    }

})