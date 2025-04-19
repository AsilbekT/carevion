import $ from "jquery";
import "slick-carousel";

export const useSlickSliders = () => {
  const initScrollToTop = () => {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 70) {
        $(".backtop").addClass("reveal");
      } else {
        $(".backtop").removeClass("reveal");
      }
    });
  };

  const initPortfolioSlider = () => {
    $(".portfolio-single-slider").slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  };

  const initClientsLogoSlider = () => {
    $(".clients-logo").slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  };

  const initTestimonialSlider = () => {
    $(".testimonial-wrap").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      vertical: true,
      verticalSwiping: true,
      autoplaySpeed: 6000,
    });
  };

  const initTestimonialSlider2 = () => {
    $(".testimonial-wrap-2").slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  return {
    initScrollToTop,
    initPortfolioSlider,
    initClientsLogoSlider,
    initTestimonialSlider,
    initTestimonialSlider2,
  };
};
