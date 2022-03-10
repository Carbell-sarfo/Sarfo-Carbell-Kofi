$(".testimonials-container").slick({
    infinite: true,
    autoplay: true,
    dots: true,
    pauseOnDotsHover: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-circle-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-circle-chevron-right"></i></button>',

    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      },
  
    ]
  });