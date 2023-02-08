const speakerSection = document.querySelector('#speakerSection');
const menu = document.querySelector('#menu');
const menuList = document.querySelector('#menuList');
const rotateRight = document.querySelector('#rotateRight');
const rotateLeft = document.querySelector('#rotateLeft');
const remove = document.querySelector('#remove');
const main = document.querySelector('#main');
const speakersFull = document.querySelector('#speakersFull');
const speakerFullSection = document.querySelector('#speakerFullSection');
const drop = document.querySelector('#drop');
const mainpage = document.querySelector('#mainpage');
let activeMenu = false;
const aboutpage = document.querySelector('#aboutpage');
const logo = document.querySelector('#logo');
logo.addEventListener('click', () => {
  if (window.screen.width < 768) {
    mainpage.style.position = 'relative';
    mainpage.style.bottom = '0';
    aboutpage.style.position = 'absolute';
    aboutpage.style.bottom = '100vh';
    menuList.style.top = '-100vh';
  }
});
menuList.addEventListener('click', (e) => {
  if (e.target.id === 'mainLink') {
    mainpage.style.position = 'relative';
    mainpage.style.bottom = '0';
    aboutpage.style.position = 'absolute';
    aboutpage.style.bottom = '100vh';
    menuList.style.top = '-100vh';
    remove.style.display = 'block';
    rotateRight.style.transform = 'rotate(0) translateX(0) translateY(0)';
    rotateLeft.style.transform = 'rotate(0) translateX(0)';
    rotateRight.style.backgroundColor = '#333';
    rotateLeft.style.backgroundColor = '#333';
    main.style.filter = 'blur(0)';
    activeMenu = false;
  } else if (e.target.id === 'aboutLink') {
    mainpage.style.position = 'absolute';
    mainpage.style.bottom = '100vh';
    aboutpage.style.position = 'relative';
    aboutpage.style.bottom = '0';
    menuList.style.top = '-100vh';
    remove.style.display = 'block';
    rotateRight.style.transform = 'rotate(0) translateX(0) translateY(0)';
    rotateLeft.style.transform = 'rotate(0) translateX(0)';
    rotateRight.style.backgroundColor = '#333';
    rotateLeft.style.backgroundColor = '#333';
    main.style.filter = 'blur(0)';
  }
});

const speakerObj = [
  {
    speakerHeader: 'Wizkid',
    speakerInfoRed: "Nigeria's biggest musician",
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/gettyimages-1147409589-612x612.jpg',
  },
  {
    speakerHeader: 'Olamide',
    speakerInfoRed: 'Professional Musician',
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/olamide.jpeg',
  },
  {
    speakerHeader: 'Tems',
    speakerInfoRed: 'Professional Musician',
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/tems.jpeg',
  },
  {
    speakerHeader: 'Burna Boy',
    speakerInfoRed: 'Professional Musician',
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/burna.jpeg',
  },
  {
    speakerHeader: 'Drake',
    speakerInfoRed: 'Professional Musician',
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/drake.jpeg',
  }, {
    speakerHeader: '21 Savage',
    speakerInfoRed: 'Professional Musician',
    speakerInfoBlack: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quia asperiores dicta error',
    Img: './images/21.jpeg',
  },
];

function createSmallSpeakerSection() {
  for (let i = 0; i < 2; i += 1) {
    speakerSection.innerHTML += `
        <li class="speakerCard">
            <div class="speakerImage" style="background-image: url('${speakerObj[i].Img}');"></div>
            <ul class="speakerInfo">
                <li class="speakerHeader">${speakerObj[i].speakerHeader}</li>
                <li class="speakerInfoRed">${speakerObj[i].speakerInfoRed}</li>
                <li class="speakerInfoBlack">${speakerObj[i].speakerInfoBlack}</li>
            </ul>
        </li>`;
  }
}
createSmallSpeakerSection();

function createLargeSpeakerSection() {
  for (let i = 2; i < speakerObj.length; i += 1) {
    speakerFullSection.innerHTML += `
            <li class="speakerCard">
                <div class="speakerImage" style="background-image: url('${speakerObj[i].Img}');"></div>
                <ul class="speakerInfo">
                    <li class="speakerHeader">${speakerObj[i].speakerHeader}</li>
                    <li class="speakerInfoRed">${speakerObj[i].speakerInfoRed}</li>
                    <li class="speakerInfoBlack">${speakerObj[i].speakerInfoBlack}</li>
                </ul>
            </li>`;
  }
}
createLargeSpeakerSection();

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
let dropped = false;

drop.addEventListener('click', () => {
  if (dropped === false) {
    speakersFull.style.position = 'relative';
    speakersFull.style.right = '0';
    drop.innerHTML = 'LESS  <span class="drop">^</span>';
    dropped = true;
  } else {
    speakersFull.style.position = 'absolute';
    speakersFull.style.right = '50rem';
    drop.innerHTML = 'MORE  <span class="drop">&#8744;</span>';
    dropped = false;
  }
});
