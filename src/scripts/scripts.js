'use strict';

(function () {
  function openedMenu() {
    let trigger = document.getElementById('menu-opener');
    let pageHeader = document.getElementById('page-header')
    let body = document.getElementsByTagName('body');

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      pageHeader.classList.add('active');
      body[0].classList.add('overflow');
    });
  }
  function closedMenu() {
    let trigger = document.getElementById('menu-closer');
    let pageHeader = document.getElementById('page-header')
    let body = document.getElementsByTagName('body');

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      pageHeader.classList.remove('active');
      body[0].classList.remove('overflow');
    });
  }
  openedMenu();
  closedMenu();
})();
