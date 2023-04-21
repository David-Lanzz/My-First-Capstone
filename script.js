const speakerSection = document.querySelector('#speakerSection');
const menuList = document.querySelector('#menuList');
const rotateRight = document.querySelector('#rotateRight');
const rotateLeft = document.querySelector('#rotateLeft');
const remove = document.querySelector('#remove');
const main = document.querySelector('main');
const speakersFull = document.querySelector('#speakersFull');
const speakerFullSection = document.querySelector('#speakerFullSection');
const drop = document.querySelector('#drop');
const footer2 = document.querySelector('#footer2');
const partners = document.querySelector('#partners');
footer2.style.display = 'none';

let activeMenu = false;
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
         <li class="speakerCard grid">
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
             <li class="speakerCard grid">
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

let dropped = false;
window.addEventListener('click', (e) => {
  if (e.target.id === 'menu' || e.target.id === 'remove' || e.target.id === 'rotateRight' || e.target.id === 'rotateLeft') {
    if (activeMenu === false) {
      menuList.style.top = '0';
      remove.style.display = 'none';
      rotateRight.style.transform = 'rotate(45deg) translateX(20%) translateY(250%)';
      rotateLeft.style.transform = 'rotate(-45deg) translateX(-20%)';
      rotateRight.style.backgroundColor = 'red';
      rotateLeft.style.backgroundColor = 'red';
      main.style.filter = 'blur(6px)';
      activeMenu = true;
    } else if (activeMenu === true) {
      menuList.style.top = '-100vh';
      remove.style.display = 'block';
      rotateRight.style.transform = 'rotate(0) translateX(0) translateY(0)';
      rotateLeft.style.transform = 'rotate(0) translateX(0)';
      rotateRight.style.backgroundColor = '#333';
      rotateLeft.style.backgroundColor = '#333';
      main.style.filter = 'blur(0)';
      activeMenu = false;
    }
  } else if (e.target.id === 'drop') {
    if (dropped === false) {
      speakersFull.style.position = 'relative';
      speakersFull.style.right = '0';
      drop.innerHTML = 'LESS  <span class="drop">^</span>';
      dropped = true;
    } else if (dropped === true) {
      speakersFull.style.position = 'absolute';
      speakersFull.style.right = '50rem';
      drop.innerHTML = 'MORE  <span class="drop">&#8744;</span>';
      dropped = false;
    }
  }
});