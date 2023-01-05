'strict only';

// IMPORTING JQUERY
/*
const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('body')[0].appendChild(script);
*/

// JQUERY IMPORT HTML
/*
$(function () {
  $('.jquery-test').load('jquery.html');
});
*/

// FETCH EXAMPLE
/*
fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
*/

/*
const showMore = document.querySelector('.show-more');
const showLess = document.querySelector('.show-less');

showMore.addEventListener('click', function () {
  document.querySelector('.entry-2').classList.remove('hidden');
  document.querySelector('.entry-1').classList.remove('hidden');
  document.querySelector('.show-less-div').classList.remove('hidden');
  showMore.classList.add('hidden');
});

showLess.addEventListener('click', function () {
  document.querySelector('.entry-2').classList.add('hidden');
  document.querySelector('.entry-1').classList.add('hidden');
  document.querySelector('.show-less-div').classList.add('hidden');
  showMore.classList.remove('hidden');
});
*/
