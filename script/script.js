let menu = document.querySelector('#menu-icon');
let topnav = document.querySelector('#topnav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    topnav.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    topnav.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Illustrator', 'Photographer', 'Graphic Designer', 'Web Designer', 'Marketer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });