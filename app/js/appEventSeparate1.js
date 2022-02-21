document.addEventListener('DOMContentLoaded', () => {

      // Слайдер с миниатюрой Мероприятие 5
      var sliderEvent5 = new SimpleAdaptiveSlider('.slider-event5', {
        loop: true,
        autoplay: false,
        swipe: true
      });
      var thumbnailsItem5 = document.querySelectorAll('.slider__thumbnails-item-event5');
  
      function setActiveThumbnail5() {
          var sliderItemActive5 = document.querySelector('.slider__item_active');
          var index = parseInt(sliderItemActive5.dataset.index);
          for (var i = 0, length = thumbnailsItem5.length; i < length; i++) {
          if (i !== index) {
              thumbnailsItem5[i].classList.remove('active');
          } else {
              thumbnailsItem5[index].classList.add('active');
          }
          }
      }
      setActiveThumbnail5();
      document.querySelector('.slider-event5').addEventListener('slider.set.active', setActiveThumbnail5);
      var sliderThumbnails5 = document.querySelector('.slider__thumbnails-event5');
      sliderThumbnails5.addEventListener('click', function(e) {
          $target = e.target.closest('.slider__thumbnails-item-event5');
          if (!$target) {
          return;
          }
          var index = parseInt($target.dataset.slideTo, 10);
          sliderEvent5._moveTo(index);
      });

    function showModal(modal) {
      modal.style.display = "block";
    }

    function closeModal(modal) {
      modal.style.display = "none";
    }


    // Галерея Мероприятие 5
    var modal_event5 = document.getElementById('myModal_event5');
    var btn_event5 = document.getElementById("myBtn_event5");
    var span_event5 = document.getElementById("close_event5");
  
    if (modal_event5 && btn_event5) {
      btn_event5.onclick = function() {
        showModal(modal_event5);
      };
  
      span_event5.onclick = function() {
        closeModal(modal_event5);
      };
    }
});