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

  function initTabs() {
    var $tabs = document.querySelector('.works__tabs');
    var $tabsElems = document.querySelectorAll('.works__tab');
    var $tabsItems = document.querySelectorAll('.works__item');

    if ($tabs) {
      $tabs.addEventListener('click', function (event) {
        if (event.target.classList.contains('works__tab')) {
          $tabsElems.forEach(function (tab) {
            tab.classList.remove('active');
          });
          $tabsItems.forEach(function (item) {
            if (event.target.dataset.tab === item.dataset.tab) {
              item.classList.add('active');
              event.target.classList.add('active'); // galleryTop2.init();
              // galleryThumbs2.init();
            } else {
              item.classList.remove('active');
            }
          });
        }
      });
    }
  }

  function initWorksSliders() {
    if (document.querySelector('.works__slider')) {
      var galleryThumbs1 = new Swiper('.works__slider-thumbs--1', {
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryTop1 = new Swiper('.works__slider--1', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: galleryThumbs1
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryThumbs2 = new Swiper('.works__slider-thumbs--2', {
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryTop2 = new Swiper('.works__slider--2', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: galleryThumbs2
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryThumbs3 = new Swiper('.works__slider-thumbs--3', {
        spaceBetween: 5,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryTop3 = new Swiper('.works__slider--3', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: galleryThumbs3
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
    }
  }

  function initAboutSlider() {
    if (document.querySelector('.achievements__slider')) {
      var mySwiper = new Swiper('.achievements__slider', {
        slidesPerView: '4',
        navigation: {
          nextEl: '.achievements__button-next',
          prevEl: '.achievements__button-prev'
        },
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: '3',
            spaceBetween: 20
          },
          480: {
            slidesPerView: '4',
            spaceBetween: 30
          }
        }
      });
    }
  }

  function initReviewsSlider() {
    if (document.querySelector('.reviews__slider')) {
      var mySwiper = new Swiper('.reviews__slider', {
        slidesPerView: '2',
        navigation: {
          nextEl: '.reviews__button-next',
          prevEl: '.reviews__button-prev'
        },
        spaceBetween: 60,
        loop: false,
        autoplay: {
          delay: 3000
        },
        breakpoints: {
          320: {
            slidesPerView: '1',
            spaceBetween: 0,
            loop: true
          },
          980: {
            slidesPerView: '2',
            spaceBetween: 60,
            loop: false,
            autoplay: false
          }
        }
      });
    }
  }

  function initTextPageSlider() {
    if (document.querySelector('.text-page__slider-wrapper')) {
      var galleryThumbs = new Swiper('.text-page__slider-thumbs', {
        spaceBetween: 5,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
      var galleryTop = new Swiper('.text-page__slider', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: galleryThumbs
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
    }
  }

  function initItemSlider() {
    if (document.querySelector('.item__slider-wrapper')) {
      var galleryThumbs = new Swiper('.item__slider-thumbs', {
        spaceBetween: 5,
        direction: 'vertical',
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          480: {
            direction: 'horizontal',
            slidesPerView: 3
          },
          800: {
            direction: 'horizontal',
            slidesPerView: 4
          },
          1171: {
            direction: 'vertical',
            slidesPerView: 3
          }
        }
      });
      var galleryTop = new Swiper('.item__slider', {
        spaceBetween: 10,
        thumbs: {
          swiper: galleryThumbs
        },
        autoplay: {
          delay: 3000
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      });
    }
  }

  function initListSliders() {
    var galleryTop = new Swiper('.list__img', {
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      pagination: {
        el: '.swiper-pagination'
      }
    });
  }

  initMenu();
  initHeaderAccordions();
  initTabs();
  initWorksSliders();
  initAboutSlider();
  initReviewsSlider();
  initTextPageSlider();
  initItemSlider();
  initListSliders();
});