'use strict';

/*! My project scripts */
(function ($) {
  // Проверка заполненности поля формы
  let inputIsEmpty = function (input) {
    $(input).focusout(function(){
      let textLength = $(this).val().length;
      if (textLength > 0) {
        $(this).addClass('not-empty');
      } else {
        $(this).removeClass('not-empty');
      }
    });
  }
  inputIsEmpty('.input-text');
})(jQuery);

(function ($) {
  // Маска телефона
  $('.form__field--phone').mask('+375 (99) 999-99-99');
})(jQuery);

(function ($) {
  // Валидация формы
  $(".form--validate").each(function() {
    let $form = $(this);
    $form.validate();
  });

  $.extend($.validator.messages, {
    required: 'Обязательное поле',
    email: 'Ошибочный email',
  });
})(jQuery);

(function ($) {
  // Аккордион
  function accordion(list) {
    let itemTrigger = $(list).find('.faq-item__title');
    if ($(itemTrigger).hasClass('active')) {
      $(list).find('.active').next().slideDown();
    }

    $(itemTrigger).click(function (e) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().slideUp();
      } else {
        $(this).parent().siblings('.faq-item').children('.faq-item__title').removeClass('active');
        $(this).parent().siblings('.faq-item').children('.faq-item_description').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
      }
      return false;
    });
  }
  accordion('.faq-list');
})(jQuery);

(function ($) {
  // Открываем боковое меню
  let openAsideMenu = function (el) {
    $(el).click(function () {
      $(this).parents('.page-header').toggleClass('active');
      $('body').toggleClass('overflow');
      return false;
    });
  }
  openAsideMenu('.js--menu-toggler');
})(jQuery);

(function ($) {
  // Мобильное подменю
  let mobileStart = 1200;
  let openSubMenu = function (el) {
    $(el).click(function () {
      $(this).next().slideToggle();
      $(this).parent().toggleClass('active');
      return false;
    });
  }
  if($(window).width() <= mobileStart) {
    openSubMenu('.has-child > a');
  }
})(jQuery);

(function ($) {
  const modalOverlay = $('.overlay');
  const buttonEscKey = 27;

  function closeModal(targetWindow) {
    $(modalOverlay).removeClass('show');
    $(targetWindow).removeClass('show');
    $('body').removeClass('overflow');
  }

  // Open modal window
  function openModalClick(element) {
    $(element).click(function(event) {
      const linkAnchor = $(this).attr('href');

      $(linkAnchor).addClass('show');
      $(modalOverlay).addClass('show');
      $('.js--header-toggle').removeClass('active');
      $('.js--page-header').removeClass('active');
      $('body').addClass('overflow');
      $('.page-header').removeClass('active');

      return false;
    });
  }
  openModalClick('.js--modal-trigger');

  // Close modal window
  function closeModalWindow(trigger) {
    $(document).on('click', trigger, function(event){
      const parentWindow = $(this).parents('.modal');
      closeModal(parentWindow);

      return false;
    });
  }
  closeModalWindow('.js--modal-close');

  // Close modal window ESC
  $(window).on('keydown', function (evt) {
    if (evt.keyCode === buttonEscKey) {
      closeModal('.modal');

      return false;
    }
  });

  // Close modal in overlay
  $(document).on('click', '.overlay', function(event){
    closeModal('.modal');

    return false;
  });
})(jQuery);

(function() {
  let breakPoint = 1024;
  const screenWidth = window.screen.width;
  // Swiper slider
  function swipeCarousel(el, sl) {
    let swiper = new Swiper(el, {
      slidesPerView: sl,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
    });
  }
  if (screenWidth <= breakPoint) {
    swipeCarousel('.js--logos-swiper', 4);
  }
})();

(function() {
  let breakPoint = 960;
  const screenWidth = window.screen.width;
  // Swiper slider
  function swipeCarousel(el, sl) {
    let swiper = new Swiper(el, {
      slidesPerView: 2,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: sl,
        }
      },
    });
  }
  if (screenWidth <= breakPoint) {
    swipeCarousel('.js--last-news', 3);
  }
})();

(function() {
  // Swiper slider
  function swipeCarousel(el, sl) {
    let swiper = new Swiper(el, {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      loop: true,
      IOSEdgeSwipeDetection: true,
      onTouchStart: function()
      {
        return false;
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: sl,
        },
        1024: {
          slidesPerView: 6,
        }
      },
    });
  }
  swipeCarousel('.js--auto-models', 4);
})();

(function() {
  // Yandex map
  function yandexMap(coords) {
    ymaps.ready(init);
    function init() {
      var zoom = 17;
      var iconImageSize = [75, 79];
      var iconImageOffset = [-37, -65];
      var center = coords;
      var siteMap = new ymaps.Map('map', {
        center: center,
        zoom: zoom,
        controls: []
      });
      var zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small"
        }
      });
      siteMap.controls.add(zoomControl);
      var elamarPlacemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/icon-pin.png',
        iconImageSize: iconImageSize,
        iconImageOffset: iconImageOffset
      });
      siteMap.geoObjects.add(elamarPlacemark);
    }
  }
  yandexMap([53.93821, 27.48181]);
})();
