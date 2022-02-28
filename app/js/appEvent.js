document.addEventListener('DOMContentLoaded', () => {

      // Слайдер с миниатюрой Мероприятие1
      if (document.querySelectorAll('.slider-event').length !== 0) {
        var sliderEvent = new SimpleAdaptiveSlider('.slider-event', {
          loop: true,
          autoplay: false,
          swipe: true
        });
      }
      var thumbnailsItem = document.querySelectorAll('.slider__thumbnails-item-event');

      if(sliderEvent && thumbnailsItem) {
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
        document.querySelector('.slider-event').addEventListener('slider.set.active', setActiveThumbnail);
        var sliderThumbnails = document.querySelector('.slider__thumbnails-event');
        sliderThumbnails.addEventListener('click', function(e) {
            $target = e.target.closest('.slider__thumbnails-item-event');
            if (!$target) {
            return;
            }
            var index = parseInt($target.dataset.slideTo, 10);
            sliderEvent._moveTo(index);
        });
      }


      // Слайдер с миниатюрой Мероприятие2
      if (document.querySelectorAll('.slider-event1').length !== 0) {
        var sliderEvent1 = new SimpleAdaptiveSlider('.slider-event1', {
          loop: true,
          autoplay: false,
          swipe: true
        });
      }
      var thumbnailsItem1 = document.querySelectorAll('.slider__thumbnails-item-event1');

      if (sliderEvent1 && thumbnailsItem1) {
        function setActiveThumbnail1() {
          var sliderItemActive1 = document.querySelector('.slider__item_active');
          var index = parseInt(sliderItemActive1.dataset.index);
          for (var i = 0, length = thumbnailsItem1.length; i < length; i++) {
          if (i !== index) {
              thumbnailsItem1[i].classList.remove('active');
          } else {
              thumbnailsItem1[index].classList.add('active');
          }
          }
        }
        setActiveThumbnail1();
        document.querySelector('.slider-event1').addEventListener('slider.set.active', setActiveThumbnail1);
        var sliderThumbnails1 = document.querySelector('.slider__thumbnails-event1');
        sliderThumbnails1.addEventListener('click', function(e) {
            $target = e.target.closest('.slider__thumbnails-item-event1');
            if (!$target) {
            return;
            }
            var index = parseInt($target.dataset.slideTo, 10);
            sliderEvent1._moveTo(index);
        });
      }
      
      // Слайдер с миниатюрой Мероприятие3
      if (document.querySelectorAll('.slider-event3').length !== 0) {
        var sliderEvent3 = new SimpleAdaptiveSlider('.slider-event3', {
          loop: true,
          autoplay: false,
          swipe: true
        });
      }
      var thumbnailsItem3 = document.querySelectorAll('.slider__thumbnails-item-event3');

      if(sliderEvent3 && thumbnailsItem3) {
        function setActiveThumbnail3() {
          var sliderItemActive3 = document.querySelector('.slider__item_active');
          var index = parseInt(sliderItemActive3.dataset.index);
          for (var i = 0, length = thumbnailsItem3.length; i < length; i++) {
          if (i !== index) {
              thumbnailsItem3[i].classList.remove('active');
          } else {
              thumbnailsItem3[index].classList.add('active');
          }
          }
        }
        setActiveThumbnail3();
        document.querySelector('.slider-event3').addEventListener('slider.set.active', setActiveThumbnail3);
        var sliderThumbnails3 = document.querySelector('.slider__thumbnails-event3');
        sliderThumbnails3.addEventListener('click', function(e) {
            $target = e.target.closest('.slider__thumbnails-item-event3');
            if (!$target) {
            return;
            }
            var index = parseInt($target.dataset.slideTo, 10);
            sliderEvent3._moveTo(index);
        });
      }


      // Слайдер с миниатюрой Мероприятие 4
      if (document.querySelectorAll('.slider-event4').length !== 0) {
        var sliderEvent4 = new SimpleAdaptiveSlider('.slider-event4', {
          loop: true,
          autoplay: false,
          swipe: true
        });
      }
      var thumbnailsItem4 = document.querySelectorAll('.slider__thumbnails-item-event4');

      if (sliderEvent4 && thumbnailsItem4) {
        function setActiveThumbnail4() {
          var sliderItemActive4 = document.querySelector('.slider__item_active');
          var index = parseInt(sliderItemActive4.dataset.index);
          for (var i = 0, length = thumbnailsItem4.length; i < length; i++) {
          if (i !== index) {
              thumbnailsItem4[i].classList.remove('active');
          } else {
              thumbnailsItem4[index].classList.add('active');
          }
          }
        }
        setActiveThumbnail4();
        document.querySelector('.slider-event4').addEventListener('slider.set.active', setActiveThumbnail4);
        var sliderThumbnails4 = document.querySelector('.slider__thumbnails-event4');
        sliderThumbnails4.addEventListener('click', function(e) {
            $target = e.target.closest('.slider__thumbnails-item-event4');
            if (!$target) {
            return;
            }
            var index = parseInt($target.dataset.slideTo, 10);
            sliderEvent4._moveTo(index);
        });
      }

    function showModal(modal) {
      modal.style.display = "block";
    }

    function closeModal(modal) {
      modal.style.display = "none";
    }

    // Галерея Мероприятие 1
    var modal_event = document.getElementById('myModal_event');
    var btn_event = document.getElementById("myBtn_event");
    var span_event = document.getElementById("close_event");

    if (modal_event && btn_event) {
      btn_event.onclick = function() {
        showModal(modal_event);
      };

      span_event.onclick = function() {
        closeModal(modal_event);
      };
    }

    // Галерея Мероприятие 2
    var modal_event1 = document.getElementById('myModal_event1');
    var btn_event1 = document.getElementById("myBtn_event1");
    var span_event1 = document.getElementById("close_event1");

    if (modal_event1 && btn_event1) {
      btn_event1.onclick = function() {
        showModal(modal_event1);
      };

      span_event1.onclick = function() {
        closeModal(modal_event1);
      };
    }

    // Галерея Мероприятие 3
    var modal_event3 = document.getElementById('myModal_event3');
    var btn_event3 = document.getElementById("myBtn_event3");
    var span_event3 = document.getElementById("close_event3");

    if (modal_event3 && btn_event3) {
      btn_event3.onclick = function() {
        showModal(modal_event3);
      };

      span_event3.onclick = function() {
        closeModal(modal_event3);
      };
    }

    // Галерея Мероприятие 4
    var modal_event4 = document.getElementById('myModal_event4');
    var btn_event4 = document.getElementById("myBtn_event4");
    var span_event4 = document.getElementById("close_event4");
  
    if (modal_event4 && btn_event4) {
      btn_event4.onclick = function() {
        showModal(modal_event4);
      };
  
      span_event4.onclick = function() {
        closeModal(modal_event4);
      };
    }
});