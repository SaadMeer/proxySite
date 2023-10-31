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