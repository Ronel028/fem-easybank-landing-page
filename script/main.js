
let btnMenu = document.querySelector('#burgerBtn');
let menuLinks = document.querySelector('ul.menu-links');
let closeBtn = document.querySelector('#closeBtn');
let bgMenu = document.querySelector('.background-menu');


btnMenu.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);

// show menu function
function showMenu(){
    menuLinks.classList.add('active');
    btnMenu.style.display = 'none';
    bgMenu.classList.remove('hide');
    closeBtn.style.display = 'block'

}

// close menu
function closeMenu(){
    menuLinks.classList.remove('active');
    btnMenu.style.display = 'block';
    bgMenu.classList.add('hide');
    closeBtn.style.display = 'none';
}
