document.addEventListener('DOMContentLoaded', () => {
  const barSlider = new Swiper('#bar-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.bar-next',
      prevEl: '.bar-prev',
    }
  });

  const warmSlider = new Swiper('#warm-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.warm-next',
      prevEl: '.warm-prev',
    }
  });

  const shopSlider = new Swiper('#shop-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.shop-next',
      prevEl: '.shop-prev',
    }
  });

  const activitySlider = new Swiper('#activity-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.activity-next',
      prevEl: '.activity-prev',
    }
  });

  const snacksSlider = new Swiper('#snacks-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.snacks-media-button-next',
      prevEl: '.snacks-media-button-prev',
    }
  });

  const eventsSlider = new Swiper('#events-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.activity-media-button-next',
      prevEl: '.activity-media-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      paginationBulletRender: function (swiper, index, className) {
        return '< div class=" '+ className +' ">< div class="inner-dot">< /div>< /div>';
      }
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      }
    }
  });

  const swiperPrev = document.getElementById('swiperPrev')
  const swiperNext = document.getElementById('swiperNext')

 if (swiperPrev && swiperNext) {
  swiperPrev.addEventListener('click', () => {
    eventsSlider.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    eventsSlider.slideNext();
  });
 }

  const eventsPhotoSlider = new Swiper('#events-photo-slider', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.activity-media-button-next',
      prevEl: '.activity-media-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1.45,
        spaceBetween: 20
      }
    }
  });

  swiperPrev.addEventListener('click', () => {
    eventsPhotoSlider.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    eventsPhotoSlider.slideNext();
  });

  const newsSlider = new Swiper('#news-slider', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.activity-media-button-next',
      prevEl: '.activity-media-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1.6,
        spaceBetween: 0
      }
    }
  });

  const tovarSlider = new Swiper('#tovar-slider', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-next',
      prevEl: '.tovar-prev',
    }
  });

  const tovarSlider1 = new Swiper('#tovar-slider1', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-nextCold',
      prevEl: '.tovar-prevCold',
    }
  });

  const tovarSlider2 = new Swiper('#tovar-slider2', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-nextBig',
      prevEl: '.tovar-prevBig',
    }
  });

  const tovarSliderMobile = new Swiper('#tovar-slider-mobile', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-next-mobile',
      prevEl: '.tovar-prev-mobile',
    }
  });

  const tovarSlider1Mobile = new Swiper('#tovar-slider1-mobile', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-nextColdMobile',
      prevEl: '.tovar-prevColdMobile',
    }
  });

  const tovarSlider2Mobile = new Swiper('#tovar-slider2-mobile', {
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.tovar-nextBigMobile',
      prevEl: '.tovar-prevBigMobile',
    }
  });

  const swiperNewsPrev = document.getElementById('swiperNewsPrev')
  const swiperNewsNext = document.getElementById('swiperNewsNext')

  if (swiperNewsPrev && swiperNewsNext) {
    swiperNewsPrev.addEventListener('click', () => {
      newsSlider.slidePrev();
    });
    swiperNewsNext.addEventListener('click', () => {
      newsSlider.slideNext();
    });
  }

  const imgSlider = new Swiper('#img-slider', {
    spaceBetween: 10,
    grid: {
      rows: 1,
      fill: 'row',
    },
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    }
  });

    // ?????????????? ?? ???????????????????? ??????
    if (document.querySelectorAll('.slider').length !== 0) {
      var slider = new SimpleAdaptiveSlider('.slider', {
        loop: true,
        autoplay: false,
        swipe: true
    });
    }
    var thumbnailsItem = document.querySelectorAll('.slider__thumbnails-item');

    if (slider && thumbnailsItem) {
      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItem.length; i < length; i++) {
        if (i !== index) {
            thumbnailsItem[i].classList.remove('active');
        } else {
            thumbnailsItem[index].classList.add('active');
        }
        }
      }
      setActiveThumbnail();
      document.querySelector('.slider').addEventListener('slider.set.active', setActiveThumbnail);
      var sliderThumbnails = document.querySelector('.slider__thumbnails');
      sliderThumbnails.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          slider._moveTo(index);
      });
    }

    // ?????????????? ?? ???????????????????? ????????????????
    if (document.querySelectorAll('.slider-cold').length !== 0) {
      var sliderCold = new SimpleAdaptiveSlider('.slider-cold', {
        loop: true,
        autoplay: false,
        swipe: true
      });
    }
    var thumbnailsItemCold = document.querySelectorAll('.slider__thumbnails-item-cold');

    if (sliderCold && thumbnailsItemCold) {
      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItemCold.length; i < length; i++) {
        if (i !== index) {
            thumbnailsItemCold[i].classList.remove('active');
        } else {
            thumbnailsItemCold[index].classList.add('active');
        }
        }
      }
      setActiveThumbnail();
      document.querySelector('.slider-cold').addEventListener('slider.set.active', setActiveThumbnail);
      var sliderThumbnails = document.querySelector('.slider__thumbnails-cold');
      sliderThumbnails.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item-cold');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderCold._moveTo(index);
      });
    }

    // ?????????????? ?? ???????????????????? ??????????????
    if (document.querySelectorAll('.slider-big').length !== 0) {
      var sliderBig = new SimpleAdaptiveSlider('.slider-big', {
        loop: true,
        autoplay: false,
        swipe: true
      });
    }
    var thumbnailsItemBig = document.querySelectorAll('.slider__thumbnails-item-big');

    if (sliderBig && thumbnailsItemBig) {
      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItemBig.length; i < length; i++) {
        if (i !== index) {
            thumbnailsItemBig[i].classList.remove('active');
        } else {
            thumbnailsItemBig[index].classList.add('active');
        }
        }
      }
      setActiveThumbnail();
      document.querySelector('.slider-big').addEventListener('slider.set.active', setActiveThumbnail);
      var sliderThumbnails = document.querySelector('.slider__thumbnails-big');
      sliderThumbnails.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item-big');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderBig._moveTo(index);
      });
    }

    // ?????????????? ?? ???????????????????? ??????????????
    if (document.querySelectorAll('.slider-shop').length !== 0) {
      var sliderShop = new SimpleAdaptiveSlider('.slider-shop', {
        loop: true,
        autoplay: false,
        swipe: true
      });
    }
    var thumbnailsItemShop = document.querySelectorAll('.slider__thumbnails-item-shop');

    if (sliderShop && thumbnailsItemShop) {
      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItemShop.length; i < length; i++) {
        if (i !== index) {
            thumbnailsItemShop[i].classList.remove('active');
        } else {
            thumbnailsItemShop[index].classList.add('active');
        }
        }
      }
      setActiveThumbnail();
      document.querySelector('.slider-shop').addEventListener('slider.set.active', setActiveThumbnail);
      var sliderThumbnails = document.querySelector('.slider__thumbnails-shop');
      sliderThumbnails.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item-shop');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderShop._moveTo(index);
      });
    }

    // ?????????????? ?? ???????????????????? ????????????????????
    if (document.querySelectorAll('.slider-food').length !== 0) {
      var sliderFood = new SimpleAdaptiveSlider('.slider-food', {
        loop: true,
        autoplay: false,
        swipe: true
      });
    }
    var thumbnailsItemFood = document.querySelectorAll('.slider__thumbnails-item-food');

    if (sliderFood && thumbnailsItemFood) {
      function setActiveThumbnail() {
        var sliderItemActive = document.querySelector('.slider__item_active');
        var index = parseInt(sliderItemActive.dataset.index);
        for (var i = 0, length = thumbnailsItemFood.length; i < length; i++) {
        if (i !== index) {
            thumbnailsItemFood[i].classList.remove('active');
        } else {
            thumbnailsItemFood[index].classList.add('active');
        }
        }
      }
      setActiveThumbnail();
      document.querySelector('.slider-food').addEventListener('slider.set.active', setActiveThumbnail);
      var sliderThumbnails = document.querySelector('.slider__thumbnails-food');
      sliderThumbnails.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item-food');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderFood._moveTo(index);
      });
    }

  function showModal(modal) {
    modal.style.display = "block";
  }

  function closeModal(modal) {
    modal.style.display = "none";
  }

  // ?????????????? ??????
  var modal_1 = document.getElementById('myModal_1');
  var btn_1 = document.getElementById("myBtn_1");
  var span_1 = document.getElementById("close_1");

  if (modal_1 && btn_1 && span_1) {
    btn_1.onclick = function() {
      showModal(modal_1);
    };
  
    span_1.onclick = function() {
      closeModal(modal_1);
    };
  }

  // ?????????????? ????????????????
  var modal_cold = document.getElementById('myModal_cold');
  var btn_cold = document.getElementById("myBtn_cold");
  var span_cold = document.getElementById("close_cold");

  if (modal_cold && btn_cold && span_cold) {
    btn_cold.onclick = function() {
      showModal(modal_cold);
    };
  
    span_cold.onclick = function() {
      closeModal(modal_cold);
    };
  }

  // ?????????????? ??????????????
  var modal_big = document.getElementById('myModal_big');
  var btn_big = document.getElementById("myBtn_big");
  var span_big = document.getElementById("close_big");

  if (modal_big && btn_big && span_big) {
    btn_big.onclick = function() {
      showModal(modal_big);
    };
  
    span_big.onclick = function() {
      closeModal(modal_big);
    };
  }

  // ?????????????? ??????????????
  var modal_shop = document.getElementById('myModal_shop');
  var btn_shop = document.getElementById("myBtn_shop");
  var span_shop = document.getElementById("close_shop");

  if (modal_shop && btn_shop && span_shop) {
    btn_shop.onclick = function() {
      showModal(modal_shop);
    };
  
    span_shop.onclick = function() {
      closeModal(modal_shop);
    };
  }

  // ?????????????? ????????????????
  var modal_food = document.getElementById('myModal_food');
  var btn_food = document.getElementById("myBtn_food");
  var span_food = document.getElementById("close_food");

  if (modal_food && btn_food && span_food) {
    btn_food.onclick = function() {
      showModal(modal_food);
    };
  
    span_food.onclick = function() {
      closeModal(modal_food);
    };
  }

  var modal = document.getElementById('myModal');
  var btn = document.getElementById('myBtn');
  var span = document.getElementById('close');

  var modalMobile = document.getElementById('myModalMobile');
  var spanMobile = document.getElementById('closeMobile');

  // ?????????????????????????? ?????????? ????????????????
  var modalColdMini = document.getElementById('myModal_ColdMini');
  var btnColdMini = document.getElementById("myBtn_ColdMini");
  var spanColdMini = document.getElementById("close_ColdMini");

  var modalMobileCold = document.getElementById('myModal_ColdMini_Mobile');
  var spanMobileCold = document.getElementById('close_ColdMini_Mobile');

  // ?????????????????????????? ?????????? ??????????????
  var modalBigMini = document.getElementById('myModal_BigMini');
  var btnBigMini = document.getElementById("myBtn_BigMini");
  var spanBigMini = document.getElementById("close_BigMini");

  var modalMobileBig = document.getElementById('myModal_BigMini_Mobile');
  var spanMobileBig = document.getElementById('close_BigMini_Mobile');

  let screenWidth = window.screen.width;
  if (screenWidth > 769) {
    if (modal && btn && span) {
      btn.onclick = function() {
        modal.style.display = "block";
      };
      span.onclick = function() {
          modal.style.display = "none";
      };
    }
    if(modalColdMini && btnColdMini && spanColdMini) {
      btnColdMini.onclick = function() {
        modalColdMini.style.display = "block";
      };
      spanColdMini.onclick = function() {
        modalColdMini.style.display = "none";
      };
    }
    if(modalBigMini && btnBigMini && spanBigMini) {
      btnBigMini.onclick = function() {
        modalBigMini.style.display = "block";
      };
      spanBigMini.onclick = function() {
        modalBigMini.style.display = "none";
      };
     }     
  } else {
    if (modalMobile && btn && spanMobile) {
      btn.onclick = function() {
        modalMobile.style.display = "block";
      };
      spanMobile.onclick = function() {
          modalMobile.style.display = "none";
      };
    }
    if(modalMobileCold && btnColdMini && spanMobileCold) {
      btnColdMini.onclick = function() {
        modalMobileCold.style.display = "block";
      };
      spanMobileCold.onclick = function() {
        modalMobileCold.style.display = "none";
      };
    }
    if(modalMobileBig && btnBigMini && spanMobileBig) {
      btnBigMini.onclick = function() {
        modalMobileBig.style.display = "block";
      };
      spanMobileBig.onclick = function() {
        modalMobileBig.style.display = "none";
      };
    }
  }
});