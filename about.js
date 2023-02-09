const menuList = document.querySelector('#menuList');
const menu = document.querySelector('#menu');
const rotateRight = document.querySelector('#rotateRight');
const rotateLeft = document.querySelector('#rotateLeft');
const remove = document.querySelector('#remove');
const footer2 = document.querySelector('#footer2');
const lorem = document.querySelector('#aboutlorem');
const abouthello = document.querySelector('#abouthello');
const partners = document.querySelector('#partners');
if (window.screen.width > 768) {
  footer2.style.backgroundColor = '#333';
  footer2.style.color = '#fff';
  partners.style.display = 'none';
  abouthello.style.display = 'none';
  lorem.innerHTML += ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti perferendis suscipit molestias est fuga nesciunt dicta,
     placeat autem provident debitis quaerat aliquid alias animi tempora!
      Nihil sapiente omnis consequuntur eos.`;
}
if (window.screen.width < 768) {
  partners.style.display = 'block';
}
let activeMenu = false;
const main = document.querySelector('main');
menuList.addEventListener('click', (e) => {
  if (e.target.id === 'mainLink' || e.target.id === 'aboutLink') {
    menuList.style.top = '-100vh';
    remove.style.display = 'block';
    rotateRight.style.transform = 'rotate(0) translateX(0) translateY(0)';
    rotateLeft.style.transform = 'rotate(0) translateX(0)';
    rotateRight.style.backgroundColor = '#333';
    rotateLeft.style.backgroundColor = '#333';
    main.style.filter = 'blur(0)';
    activeMenu = false;
  }
});

menu.addEventListener('click', () => {
  if (activeMenu === false) {
    menuList.style.top = '0';
    remove.style.display = 'none';
    rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
    rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
    rotateRight.style.backgroundColor = 'red';
    rotateLeft.style.backgroundColor = 'red';
    main.style.filter = 'blur(6px)';
    activeMenu = true;
  } else {
    menuList.style.top = '-100vh';
    remove.style.display = 'block';
    rotateRight.style.transform = 'rotate(0) translateX(0) translateY(0)';
    rotateLeft.style.transform = 'rotate(0) translateX(0)';
    rotateRight.style.backgroundColor = '#333';
    rotateLeft.style.backgroundColor = '#333';
    main.style.filter = 'blur(0)';
    activeMenu = false;
  }
});