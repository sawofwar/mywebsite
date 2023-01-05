'use strict';

// IMPORTING JQUERY
// /*
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.querySelector('.js').before(script);
// document.getElementsByTagName('body')[0].appendChild(script);

// JQUERY IMPORT nav
setTimeout(() => {
  $(function () {
    $('.nav-container').load('../components/nav.html');
  });
}, '600');

// jquery import footer
setTimeout(() => {
  $(function () {
    $('footer').load('../components/footer.html');
  });
}, '600');

//
// display window href as a string
// get the last five characters
const stringLink = window.location.href.slice(-10);

setTimeout(() => {
  const progressContainer = document.querySelector('.progress-container');
  const progressBar = document.querySelector('.progress-bar');

  if (stringLink === 'index.html') {
    progressContainer.style.display = 'block';
    progressBar.style.display = 'block';
  }
  /*
  const scrollFunction = function () {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  };

  window.onscroll = scrollFunction();
*/

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
}, 1000);
