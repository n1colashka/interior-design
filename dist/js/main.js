"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function initMenu() {
    var $menuBtn = document.querySelector('.navigation__btn');
    var $menuWrapper = document.querySelector('.navigation__inner');
    document.body.addEventListener('click', function (event) {
      if (event.target.closest('.navigation__btn')) {
        $menuWrapper.classList.toggle('active');
        $menuBtn.classList.toggle('active');
      }
    });
  }

  function initHeaderAccordions() {
    var $navigationList = document.querySelector('.navigation__list');
    var $navigationitems = document.querySelectorAll('.navigation__list > li');
    $navigationList.addEventListener('click', function (event) {
      event.preventDefault(); // $navigationitems.forEach(item => {
      //     item.classList.remove('open');
      // });

      if (event.target.closest('li') && event.target.closest('ul').classList.contains('navigation__list')) {
        event.target.closest('li').classList.toggle('open');
      }
    });
  }

  initMenu();
  initHeaderAccordions();
});