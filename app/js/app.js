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
          // when window width is >= 320px
          480: {
            slidesPerView: 1
          }
        }
      });
      const swiperPrev = document.getElementById('swiperPrev')
      const swiperNext = document.getElementById('swiperNext')

      swiperPrev.addEventListener('click', () => {
        eventsSlider.slidePrev();
      })
      swiperNext.addEventListener('click', () => {
        eventsSlider.slideNext();
      })

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
      })
      swiperNext.addEventListener('click', () => {
        eventsPhotoSlider.slideNext();
      })

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
        spaceBetween: 10,
        grid: {
          rows: 1,
          fill: 'row',
        },
        navigation: {
          nextEl: '.tovar-next',
          prevEl: '.tovar-prev',
        }
      });

      var modal = document.getElementById('myModal');
      var btn = document.getElementById("myBtn");
      var span = document.getElementsByClassName("close")[0];

      btn.onclick = function() {
          modal.style.display = "block";
      }
      span.onclick = function() {
          modal.style.display = "none";
      }
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }

      const swiperNewsPrev = document.getElementById('swiperNewsPrev')
      const swiperNewsNext = document.getElementById('swiperNewsNext')

      swiperNewsPrev.addEventListener('click', () => {
        newsSlider.slidePrev();
      })
      swiperNewsNext.addEventListener('click', () => {
        newsSlider.slideNext();
      })

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

      // var modal_1 = document.getElementById('myModal_1');
      // var btn_1 = document.getElementById("myBtn_1");
      // var span_1 = document.getElementById("close_1");
      // btn_1.onclick = function() {
      //     modal_1.style.display = "block";
      // }
      // span_1.onclick = function() {
      //     modal_1.style.display = "none";
      // }
      // window.onclick = function(event) {
      //     if (event.target == modal_1) {
      //         modal_1.style.display = "none";
      //     }
      // }
})