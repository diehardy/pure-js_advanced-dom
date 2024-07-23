'use strict';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });


// selecting
const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')

const allBtns = document.getElementsByTagName('button')

// creating and inserting
const cookie = document.createElement('div')
cookie.classList.add('cookie-message')
cookie.innerHTML = 'We use cookie for something... Please give your permission to check on you :) <button class="btn btn--close-cookie">Yeah yeah..</button>'

header.append(cookie)

const cookieBtn = document.querySelector('.btn--close-cookie')

cookieBtn.addEventListener('click', () => {
  cookie.remove()
})