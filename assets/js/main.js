/* variaveis menu mobile */
let menu_mobile = document.querySelector('.menu-mobile');
let menu_mobile_img = document.querySelector('.menu-mobile img');
let menu_nav = document.querySelector('nav');

/* Variaveis menu dropdown */
let menu_dropdown = document.querySelectorAll('.menu-ul li .open');
let dropdown = document.querySelector('.menu-dropdown');
let dropdown_area = document.querySelector('.menu-dropdown .menu-area');


menu_mobile.addEventListener('click', () => {
  if(menu_nav.classList.toggle('ativo')) {
    menu_nav.style.display = 'flex';
    menu_mobile_img.src = "./images/icon-close.svg";
  } else {
    menu_nav.style.display = 'none';
    menu_mobile_img.src = "./images/icon-hamburger.svg";
    // fecha o dropdown assim que fechar o menu
    menu_dropdown.forEach((item) => {
      item.classList.remove('active');
      item.nextElementSibling.style.display = 'none';
      item.style.setProperty('--arrow', '');
    })
  }
})

/* Codigo menu dropdown */
function menus_dropdown(item) {
  item.addEventListener('click', open_exit);
}

function open_exit(event) {
  if(event.target.classList.contains('active') != true) {
    event.target.classList.add('active');
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.setProperty('--arrow', 'rotate(180deg)');
  } else {
    event.target.classList.remove('active');
    event.target.nextElementSibling.style.display = 'none';
    event.target.style.setProperty('--arrow', '');
  }
}

menu_dropdown.forEach(menus_dropdown);