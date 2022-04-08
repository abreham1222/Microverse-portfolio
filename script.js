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