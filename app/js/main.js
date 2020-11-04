document.addEventListener('DOMContentLoaded', function () {

    function initMenu() {
        const menuBtn = document.querySelector('.header__btn');
        const menuWrapper = document.querySelector('.profile-menu');

        document.body.addEventListener('click', event => {
            if (event.target.closest('.profile-menu')) {
                menuWrapper.classList.add('active');
                menuBtn.classList.add('active');
            } else if (event.target.closest('.header__btn')) {
                menuWrapper.classList.toggle('active');
                menuBtn.classList.toggle('active');
            } else {
                menuWrapper.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    function changePageType() {
        const types = document.querySelectorAll('.header__links a');
        const activeType = document.querySelector('.header__links .active');

        document.body.addEventListener('click', event => {
            if (event.target === activeType) {
                event.preventDefault();
            }
            if (!(event.target.closest('.header__links a'))) {
                types.forEach(type => {
                    type.style.display = "none";
                });
            } else {
                types.forEach(type => {
                    type.style.display = "inline-block";
                });
            }
            activeType.style.display = "inline-block";
        });
    }

    function initFilter() {
        const filter = document.querySelector('.filter');

        if (filter) {
            filter.addEventListener('click', event => {
                if (event.target.classList.contains('filter__item-title')) {
                    event.target.parentElement.classList.toggle('active');
                }
            });
            initMobileFilter();
        }
    }

    function initMobileFilter() {
        const filterBtn = document.querySelector('.filter__mobile-btn');
        const filterTitle = document.querySelector('.filter__mobile-title');
        const filter = document.querySelector('.filter');

        filterBtn.addEventListener('click', event => {
            event.preventDefault();
            filter.classList.add('active');
            filterBtn.style.display = 'none';
        });

        filterTitle.addEventListener('click', event => {
            filter.classList.remove('active');
            filterBtn.style.display = 'flex';
        });
    }

    function initPaymentsAccordion() {
        const paymentBlock = document.querySelector('.tariffs__payment');
        const paymentsTitle = document.querySelector('.tariffs__payment-title');

        if (paymentBlock) {
            paymentsTitle.addEventListener('click', () => {
                paymentBlock.classList.toggle('active');
            });
        }
    }

    function initReadMore() {
        const tariffPageBtn = document.querySelector('.tariff-page__btn');
        const tariffPageText = document.querySelector('.tariff-page__text');

        if (tariffPageBtn) {
            tariffPageBtn.addEventListener('click', () => {
                tariffPageText.classList.add('active');
            });
        }
    }

    function initTariffSliders() {
        var tariffSlider = new Swiper('.tariffs-slider--1', {
            // Optional parameters
            initialSlide: 1,
            slidesPerView: 4,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: '.slider-next-1',
                prevEl: '.slider-prev-1',
            },
            breakpoints: {

                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            }
        });

        var tariffSlider2 = new Swiper('.tariffs-slider--2', {
            // Optional parameters
            initialSlide: 1,
            slidesPerView: 4,
            spaceBetween: 40,
            // Navigation arrows
            navigation: {
                nextEl: '.slider-next-2',
                prevEl: '.slider-prev-2',
            },
            breakpoints: {

                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            }
        });
    }

    function initStickyFilter() {
        var a = document.querySelector('.filter'),
            b = null,
            P = 100;
        window.addEventListener('scroll', Ascroll, false);
        document.body.addEventListener('scroll', Ascroll, false);

        function Ascroll() {
            var offset = window.pageYOffset;
            console.log(offset);
            if (offset > 1300) {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''),
                        s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    b = document.createElement('div');
                    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.trains').getBoundingClientRect().bottom); // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = -R + 'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
                window.addEventListener('resize', function () {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);
            } else {
                var stop = document.querySelector('.stop');
                stop.style.cssText = '';
                console.log(stop);
            }
            }
            
    }

    function stickyFilter() {
        let filterHeight = 1300;
        let nextPosition = 1450;
        let previousPosition = 0;
        const filter = document.querySelector('.filter form');

        window.addEventListener('scroll', function() {

            let offsetY = window.pageYOffset;

            if (offsetY < filterHeight) {
                filter.style.cssText = '';
            } else if (offsetY >= document.body.scrollHeight - 1200) {
                document.body.style.position = 'relative';
                filter.style.cssText = 'position: absolute; bottom: 200px; top: auto';
            }

            else if (offsetY >= nextPosition - 250) {
                document.body.style.position = '';
                filter.style.cssText = `top: ${nextPosition}px; position: absolute; 'bottom: auto;`;
                previousPosition = nextPosition;
                nextPosition += filterHeight;

            } else {
                nextPosition -= filterHeight;
                filter.style.cssText = `top: ${previousPosition}px; position: absolute; 'bottom: auto;`;
            }
        });
    }

    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 768) {
        changePageType();
        initReadMore();
    }

    if (window.innerWidth > 768) {
        if (document.querySelector('.filter')) {
            initStickyFilter();
            // stickyFilter();
        }
    }

    initMenu();
    initFilter();
    initTariffSliders();
    initPaymentsAccordion();

});