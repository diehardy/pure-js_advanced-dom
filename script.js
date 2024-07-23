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
cookie.style.backgroundColor = '#37383d'
cookie.style.width = '70%'
cookie.style.padding = '15px'
cookie.style['border-radius'] = '10px';
header.append(cookie)

console.log(getComputedStyle(cookie));


const cookieBtn = document.querySelector('.btn--close-cookie')

cookieBtn.addEventListener('click', () => {
  cookie.remove()
})

const btnScroll = document.querySelector('.btn--scroll-to')
console.log(btnScroll);
const section2 = document.getElementById('section--2')
console.log(section2);
btnScroll.addEventListener('click', () => {
  section2.scrollIntoView({ behavior: 'smooth' })
})