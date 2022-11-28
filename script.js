'strict only';

// let input = document.querySelector('.input-one');

// input.addEventListener('keypress', function (event) {
//   if (event.key === 'Enter') {
//     document.querySelector('.input-text').textContent = String(input.value);
//   }
// });

const folderButton = document.getElementById('folder-button');
const udemy = document.querySelector('.udemy');
const udemyList = document.querySelector('.udemy-list');
const myProjects = document.querySelector('.my-projects');

const sideBarToggle = function () {
  if (udemy.classList.contains('hidden')) {
    udemyList.classList.remove('hidden');
    udemy.classList.remove('hidden');
  } else {
    udemyList.classList.add('hidden');
    udemy.classList.add('hidden');
  }
};

const myProjectsOrange = function () {
  if (myProjects.classList.contains('orangered')) {
    myProjects.classList.remove('orangered');
  } else {
    myProjects.classList.add('orangered');
  }
};

folderButton.addEventListener('click', sideBarToggle);
folderButton.addEventListener('click', myProjectsOrange);
