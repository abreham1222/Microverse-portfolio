const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.navbar-desk');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-lin').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const p = document.querySelector('.modal-mobile');
const b = document.querySelector('.project');
const c = document.querySelector('.see-proj');
const Y = document.querySelector('.xx');
const section = document.querySelector('section');

function appe() {
  p.style.display = 'block';
  section.style.filter = 'blur(10px)';
}

b.addEventListener('click', appe);
c.addEventListener('click', appe);

function disappeY() {
  p.style.display = 'none';
  section.style.filter = 'blur(0px)';
}

Y.addEventListener('click', disappeY);

function disappeP(t) {
  if (t.target.className === 'modal-mobile') {
    p.style.display = 'none';
    section.style.filter = 'blur(0px)';
  }
}

p.addEventListener('click', disappeP);

const parent = document.querySelector('.modal-p');
const btn = document.querySelector('.see');
const X = document.querySelector('.x');
const sect = document.querySelector('section');

function appear() {
  parent.style.display = 'block';
  sect.style.filter = 'blur(10px)';
}

btn.addEventListener('click', appear);

function disappearX() {
  parent.style.display = 'none';
  section.style.filter = 'blur(0px)';
}

X.addEventListener('click', disappearX);

function disappearParent(e) {
  if (e.target.className === 'modal-p') {
    parent.style.display = 'none';
    section.style.filter = 'blur(0px)';
  }
}

parent.addEventListener('click', disappearParent);

const projectDetails = {
  titleTwo: 'Multi Post Stories',
  title: 'Keeping track of hundreds  of components website',
  description_first: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  image_slideshow: '/images/snapshoot.png',
  languages: {
    language_1: 'html',
    language_2: 'Bootstrap',
    language_3: 'Ruby on Rails',
  },
};

const MainTitle = document.querySelector('.modal-h');
MainTitle.textContent = projectDetails.title;

const MainLanguage = document.querySelector('.modal-list');

const listMain = [];
const arrLangMain = [];
let countMain = 0;

const keysMain = Object.keys(projectDetails.languages);
const valuesMain = Object.values(projectDetails.languages);

for (let i = 0; i < keysMain.length; i += 1) {
  listMain[countMain] = document.createElement('li');
  listMain[countMain].className = 'modal-list';
  arrLangMain[countMain] = valuesMain[i];
  listMain[countMain].textContent = arrLangMain[countMain];
  MainLanguage.appendChild(listMain[countMain]);
  countMain += 1;
}

const MainDes = document.querySelector('.modal-lorem');
MainDes.textContent = projectDetails.description_first;

const MainSlideshow = document.querySelector('.img-shoot');
MainSlideshow.innerHTML = `<img src="${projectDetails.image_slideshow}" alt="">`;
