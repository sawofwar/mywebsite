'use strict';

// IMPORTING JQUERY
/*
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.querySelector('.js').before(script);
*/

(async function () {
  const script = document.createElement('script');
  document.querySelector('.js').before(script);
  script.classList.add('jquery');

  const response = await fetch('https://code.jquery.com/jquery-3.6.0.min.js');
  const actualScript = await response.text();
  script.innerHTML = actualScript;

  $(function () {
    $('.nav-container').load('../components/nav.html');
  });

  $(function () {
    $('footer').load('../components/footer.html');
  });
})();

// JQUERY IMPORT nav
/*
setTimeout(() => {
  $(function () {
    $('.nav-container').load('../components/nav.html');
  });
}, '600');
*/

// jquery import footer
/*
setTimeout(() => {
  $(function () {
    $('footer').load('../components/footer.html');
  });
}, '600');
*/

const stringLink = window.location.href.slice(-10);

setTimeout(() => {
  const progressContainer = document.querySelector('.progress-container');
  const progressBar = document.querySelector('.progress-bar');

  if (stringLink === 'index.html') {
    progressContainer.style.display = 'block';
    progressBar.style.display = 'block';
  }

  const scrollProgress = document.querySelector('.progress-bar');
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  });

  // window.history.replaceState('', '', '/');
}, 400);

// -------------------------------- BLOG -----------------------------
// hide footer on click modal

if (stringLink === '/blog.html') {
  const modal = document.querySelector('.modal');
  const blogCard = document.querySelector('.blog-card');
  const overlay = document.querySelector('.overlay');

  const allCards = document.querySelectorAll('[data-card]');
  const allModals = document.querySelectorAll('[data-modal]');
  console.log(allCards);

  for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', function () {
      allModals[i].classList.remove('hidden');
      overlay.classList.remove('hidden');
    });
  }

  for (let i = 0; i < allModals.length; i++) {
    overlay.addEventListener('click', function () {
      overlay.classList.add('hidden');
      allModals[i].classList.add('hidden');
    });
  }

  const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  blogCard.addEventListener('click', openModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
