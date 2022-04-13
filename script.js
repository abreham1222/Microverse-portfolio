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

const box1 = document.querySelector('.all-in .contenido');
const box4 = document.querySelector('.recent-container');
const projectDetails = [ 
  {
  titleOne: 'Keeping track of hundreds  of components website',
  languages: ['html', 'Bootstrap', 'Ruby on Rails'],
  imageOne: 'Images/snapshoot.png',
  descriptionOne: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  linklive: 'https://abreham1222.github.io/Microverse-portfolio/',
  linkSource: 'git clone https://github.com/abreham1222/Microverse-portfolio.git',
  },
 
  {
    titleTwo: 'Multi Post Stories',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    imageTwo: 'Images/shootportfolio.png',
    descriptionTwo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type  and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkLive: 'https://abreham1222.github.io/Microverse-portfolio/',
    linkSor: 'git clone https://github.com/abreham1222/Microverse-portfolio.git',
   },
];

const box2 = document.querySelector('.box1');
box2.insertAdjacentHTML('afterend', `
  <div class="modal-p">
  <div class="modal">
  <h2 class="modal-h"></h2>
  <span class="x">&times;</span>
  <div>
  <ul class="modal-list">
    <li class="modal-listed"></li>
    <li class="modal-listed"></li>
    <li class="modal-listed"></li>
  </ul>
  </div>
  <div class="img-shoot">
    <img class="img-desk" src="./Images/snapshoot.png" alt="">
  </div>
    <div class="modal-wrap">
    <p class="modal-lorem"></p>
    <button type="button" class="see-live">See Live  <img src="Images/pop/iconseelive.png" alt="vector"></button>
    <button type="button" class="see-source">See Source  <img src="Images/pop/Vector.png" alt="github icon"></button>
  </div>
  </div>
  </div> `);

const SeeProjectButton = document.querySelectorAll('.see');
SeeProjectButton.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.modal-p');
    windowPop.style.display = 'block';
    const projectDetail = projectDetails[i];
    const heading = document.querySelector('.modal-h');
    heading.textContent = projectDetail.titleOne;
    const paragraph = document.querySelector('.modal-lorem');
    paragraph.textContent = projectDetail.descriptionOne;
    const picture = document.querySelector('.img-shoot');
    picture.src = projectDetail.imageOne;
    const languag = document.querySelectorAll('.modal-listed');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languages[s];
    });
    const live = windowPop.querySelectorAll('.see-live')[0];
    live.href = projectDetail.linklive;
    const source = windowPop.querySelectorAll('.see-source')[1];
    source.href = projectDetail.linkSource;
  });
});

const closeProjectButton = document.querySelector('.x');
closeProjectButton.addEventListener('click', () => {
  const windowPop = document.querySelector('.modal-p');
  windowPop.style.display = 'none';
});

const box3 = document.querySelector('.box4');
box3.insertAdjacentHTML('afterend', `
  <div class="modal-mobile">
  <div class="modal-sub">
  <h3 class="modal-mob"></h3>
  <span class="xx">&times;</span>
  <div>
  <ul class="modal-lists">
    <li class="modal-liste">l</li>
    <li class="modal-liste"></li>
    <li class="modal-liste"></li>
  </ul>
  </div>
  <div class="img-shooted">
    <img class="img-mob" src="./Images/shootportfolio.png" alt="">
  </div>
    <div class="modal-wraped">
    <p class="modal-lorems"></p>
    <button type="button" class="see-liv">See Live  <img src="Images/pop/iconseelive.png" alt="vector"></button>
    <button type="button" class="see-sour">See Source  <img src="Images/pop/Vector.png" alt="github icon"></button>
  </div>
  </div>
  </div>`);

const SeeProjectB = document.querySelectorAll('.project');
SeeProjectB.forEach((item, i) => {
  item.addEventListener('click', () => {
    const windowPop = document.querySelector('.modal-mobile');
    windowPop.style.display = 'block';
    const projectDetail = projectDetails[i];
    const heading = document.querySelector('.modal-mob');
    heading.textContent = projectDetail.titleTwo;
    const paragraph = document.querySelector('.modal-lorems');
    paragraph.textContent = projectDetail.descriptionTwo;
    const picture = document.querySelector('.img-mob');
    picture.src = projectDetail.imageTwo;
    const languag = document.querySelectorAll('.modal-lists');
    languag.forEach((li, s) => {
      li.textContent = projectDetail.languages[s];
    });
    const live = windowPop.querySelectorAll('.see-liv')[0];
    live.href = projectDetail.linkLive;
    const source = windowPop.querySelectorAll('.see-sour')[1];
    source.href = projectDetail.linkSor;
  });
});

const closeProjectB = document.querySelector('.xx');
closeProjectB.addEventListener('click', () => {
  const windowPop = document.querySelector('.modal-mobile');
  windowPop.style.display = 'none';
});