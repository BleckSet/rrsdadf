
gsap.registerPlugin(ScrollTrigger);
  
const fadeElements = document.querySelectorAll('.appearance');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.6 // Порог пересечения 0.5 означает, что элемент считается видимым, если видно 50% его области
});

fadeElements.forEach((fadeElement) => {
  observer.observe(fadeElement);
});




$('.reviewSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
variableWidth:true,
    responsive: [
      {
        breakpoint: 1178,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 570,
        settings: {

          slidesToShow:2,
          slidesToScroll: 1,
        }
      }
    ]
 
});




$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 1, // Основной слайд
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav',
      arrows:false,
  });
  
  $('.slider-nav').slick({
      slidesToShow: 3, // Дополнительные слайды
      slidesToScroll: 1,
      infinite:true,
      asNavFor: '.slider',
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next')
  });

});
$(document).ready(function () {
  $('.choose_color_item').click(function () {
    const color = $(this).data('color');
    $('.choose_color_end.active').removeClass('active');
    $('.choose_color_item.active').removeClass('active');
    $('.choose_color_end[data-color="' + color + '"]').addClass('active');
    $(this).addClass('active');
  });
});


$(document).ready(function () {
  $('.choose_size_item').click(function () {
    const size = $(this).data('size');
    $('.choose_size_end.active').removeClass('active');
    $('.choose_size_item.active').removeClass('active');
    $('.choose_size_end[data-size="' + size + '"]').addClass('active');
    $(this).addClass('active');
  });
});



$(".burger").click(function() {
  $(".burger_inner").toggleClass("open");
  $(".burger").toggleClass("active");
  $("html").toggleClass("hold");
});



$(document).ready(function() {
  $(".accordion-button").on("click", function() {
    var clickedAccordion = $(this);
    if (!clickedAccordion.hasClass('active')) {
      $(".accordion-button").removeClass('active');
      $(".accordion-content").slideUp();
    }
    clickedAccordion.toggleClass('active');
    var content = clickedAccordion.siblings(".accordion-content");
    content.slideToggle();
  });
});


