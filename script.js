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

const p = document.querySelector('.modal-mobile'),
  b = document.querySelector('.project'),
  c = document.querySelector('.see-proj'),
  Y = document.querySelector('.xx'),
  section = document.querySelector('section');

b.addEventListener('click', appe);
c.addEventListener('click', appe);

function appe() {
  p.style.display = 'block';
  section.style.filter = 'blur(10px)';
}

Y.addEventListener('click', disappeY);

function disappeY() {
  p.style.display = 'none';
  section.style.filter = 'blur(0px)';
}

parent.addEventListener('click', disappeP)

function disappeP(t) {
  if (t.target.className === 'modal-mobile') {
    p.style.display = 'none';
    section.style.filter = 'blur(0px)';
  }
}