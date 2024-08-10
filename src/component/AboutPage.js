import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import '../css/about.css';
import VanillaTilt from 'vanilla-tilt';

const AboutPage = () => {
  const bioCard1 = useRef(null);
  const bioCard2 = useRef(null);

  useEffect(() => {
    if (bioCard1.current) {
      VanillaTilt.init(bioCard1.current, {
        max: 25,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }

    if (bioCard2.current) {
      VanillaTilt.init(bioCard2.current, {
        max: 25,
        speed: 400,
        glare: true,
        perspective: 1000,
        'max-glare': 0.2,
      });
    }
    const $window = $(window);
    const $body = $('body');

    class Slideshow {
      constructor(userOptions = {}) {
        const defaultOptions = {
          $el: $('.slideshow'),
          showArrows: false,
          showPagination: true,
          duration: 10000,
          autoplay: false,
        };

        let options = Object.assign({}, defaultOptions, userOptions);

        this.$el = options.$el;
        this.maxSlide = this.$el.find($('.js-slider-home-slide')).length;
        this.showArrows = this.maxSlide > 1 ? options.showArrows : false;
        this.showPagination = options.showPagination;
        this.currentSlide = 1;
        this.isAnimating = false;
        this.animationDuration = 1200;
        this.autoplaySpeed = options.duration;
        this.interval = null;
        this.$controls = this.$el.find('.js-slider-home-button');
        this.autoplay = this.maxSlide > 1 ? options.autoplay : false;

        this.$el.on('click', '.js-slider-home-next', () => this.nextSlide());
        this.$el.on('click', '.js-slider-home-prev', () => this.prevSlide());
        this.$el.on('click', '.js-pagination-item', (event) => {
          if (!this.isAnimating) {
            this.preventClick();
            this.goToSlide(event.target.dataset.slide);
          }
        });

        this.init();
      }

      init() {
        this.goToSlide(1);
        if (this.autoplay) {
          this.startAutoplay();
        }

        if (this.showPagination) {
          let pagination = '<div class="pagination"><div class="container">';

          for (let i = 0; i < this.maxSlide; i++) {
            let item = `<span class="pagination__item js-pagination-item ${i === 0 ? 'is-current' : ''}" data-slide=${i + 1
              }>${i + 1}</span>`;
            pagination += item;
          }

          pagination += '</div></div>';

          this.$el.append(pagination);
        }
      }

      preventClick() {
        this.isAnimating = true;
        this.$controls.prop('disabled', true);
        clearInterval(this.interval);

        setTimeout(() => {
          this.isAnimating = false;
          this.$controls.prop('disabled', false);
          if (this.autoplay) {
            this.startAutoplay();
          }
        }, this.animationDuration);
      }

      goToSlide(index) {
        this.currentSlide = parseInt(index);

        if (this.currentSlide > this.maxSlide) {
          this.currentSlide = 1;
        }

        if (this.currentSlide === 0) {
          this.currentSlide = this.maxSlide;
        }

        const newCurrent = this.$el.find(`.js-slider-home-slide[data-slide="${this.currentSlide}"]`);
        const newPrev =
          this.currentSlide === 1
            ? this.$el.find('.js-slider-home-slide').last()
            : newCurrent.prev('.js-slider-home-slide');
        const newNext =
          this.currentSlide === this.maxSlide
            ? this.$el.find('.js-slider-home-slide').first()
            : newCurrent.next('.js-slider-home-slide');

        this.$el.find('.js-slider-home-slide').removeClass('is-prev is-next is-current');
        this.$el.find('.js-pagination-item').removeClass('is-current');

        if (this.maxSlide > 1) {
          newPrev.addClass('is-prev');
          newNext.addClass('is-next');
        }

        newCurrent.addClass('is-current');
        this.$el.find(`.js-pagination-item[data-slide="${this.currentSlide}"]`).addClass('is-current');
      }

      nextSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide + 1);
      }

      prevSlide() {
        this.preventClick();
        this.goToSlide(this.currentSlide - 1);
      }

      startAutoplay() {
        this.interval = setInterval(() => {
          if (!this.isAnimating) {
            this.nextSlide();
          }
        }, this.autoplaySpeed);
      }

      destroy() {
        this.$el.off();
      }
    }

    function load() {
      const options = {
        showPagination: true,
      };

      new Slideshow(options);
    }

    function addLoadClass() {
      $body.addClass('is-loaded');

      setTimeout(function () {
        $body.addClass('is-animated');
      }, 600);
    }

    $window.on('load', function () {
      load();
    });

    addLoadClass();
    return () => {
      if (bioCard1.current) bioCard1.current.vanillaTilt.destroy();
      if (bioCard2.current) bioCard2.current.vanillaTilt.destroy();
    };
  }, []);

  const educationDetails = [
    {
      degree: "Bachelor of Engineering - BE, Data Science",
      institution: "VGEC - Ahmedabad",
      year: "2023 - 2026"
    },
    {
      degree: "Diploma Engineering, Information Technology",
      institution: "Tapi Diploma - Surat",
      year: "2020 - 2023"
    },
    {
      degree: "Higher Education",
      institution: "Ashadeep Vidhyalaya - Surat",
      year: "2020"
    }
  ];

  return (
    <div className="about sections">
      <div id="wrapper">
        <section class="slideshow" id="js-header">

          <div class="slideshow__slide js-slider-home-slide is-current" data-slide="1">
            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div class="slideshow__slide-background-load-wrap background-absolute">
                <div class="slideshow__slide-background-load background-absolute">
                  <div class="slideshow__slide-background-wrap background-absolute">
                    <div class="slideshow__slide-background background-absolute">
                      <div class="slideshow__slide-image-wrap background-absolute">
                        <div class="slideshow__slide-image background-absolute" >
                          <div className="bioCardContainer">
                            <p className='bioHeading'>About The <span>Behind The Code</span></p>
                            <div className="bioCard b1" ref={bioCard1}>
                              <div className="cardhHeader">
                                <p className='cardHeadig'>Welcome! i’m Darshan</p>
                                <p className='cardSubHeadig'>Innovation Architect</p>
                              </div>
                              <div className="cardDetail">
                                <p>Hey There! I’m Darshan Bhuva, a creative digital visionary
                                  with a passion for transforming ideas into
                                  cutting-edge digital experiences.</p>
                              </div>
                            </div>
                            <div className="bioCard b2" ref={bioCard2}>
                              <div className="cardhHeader">
                                <p className='cardHeadig'>Education</p>
                              </div>
                              <div className="cardDetail">
                                {
                                  educationDetails.map((education, index) => (
                                    <div key={index}>
                                      <p className="bioStudyHeading">{education.degree}</p>
                                      <p className="bioStudySubHeading">{education.institution} <span>({education.year})</span> </p>
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="slideshow__slide-caption">
              <div class="slideshow__slide-caption-text">
                <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                  <h1 class="slideshow__slide-caption-title">Everything broken can be repaired</h1>
                  <a class="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                    <span class="slideshow__slide-caption-subtitle-label">See how</span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          <div class="slideshow__slide js-slider-home-slide is-next" data-slide="2">
            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div class="slideshow__slide-background-load-wrap background-absolute">
                <div class="slideshow__slide-background-load background-absolute">
                  <div class="slideshow__slide-background-wrap background-absolute">
                    <div class="slideshow__slide-background background-absolute">
                      <div class="slideshow__slide-image-wrap background-absolute">
                        <div class="slideshow__slide-image background-absolute" ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="slideshow__slide-caption">
              <div class="slideshow__slide-caption-text">
                <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                  <h1 class="slideshow__slide-caption-title">See through the field</h1>
                  <a class="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                    <span class="slideshow__slide-caption-subtitle-label">Learn more about</span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          <div class="slideshow__slide js-slider-home-slide is-prev" data-slide="3">
            <div class="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div class="slideshow__slide-background-load-wrap background-absolute">
                <div class="slideshow__slide-background-load background-absolute">
                  <div class="slideshow__slide-background-wrap background-absolute">
                    <div class="slideshow__slide-background background-absolute">
                      <div class="slideshow__slide-image-wrap background-absolute">
                        <div class="slideshow__slide-image background-absolute">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="slideshow__slide-caption">
              <div class="slideshow__slide-caption-text">
                <div class="container js-parallax" data-speed="2" data-position="top" data-target="#js-header">
                  <h1 class="slideshow__slide-caption-title">Hey, take a time to relax!</h1>
                  <a class="slideshow__slide-caption-subtitle -load o-hsub -link" href="#">
                    <span class="slideshow__slide-caption-subtitle-label">Everybody needs</span>
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          <div class="c-header-home_footer">
            <div class="o-container">
              <div class="c-header-home_controls -nomobile o-button-group">
                <div class="js-parallax is-inview" data-speed="1" data-position="top" data-target="#js-header">
                  <button class="o-button -white -square -left js-slider-home-button js-slider-home-prev" type="button">
                    <span class="o-button_label">
                      <svg class="o-button_icon" role="img"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-prev"></use></svg>
                    </span>
                  </button>
                  <button class="o-button -white -square js-slider-home-button js-slider-home-next" type="button">
                    <span class="o-button_label">
                      <svg class="o-button_icon" role="img"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-next"></use></svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>


        </section>
        <div>

          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol viewBox="0 0 18 18" id="arrow-next">
              <path id="arrow-next-arrow.svg" d="M12.6,9L4,17.3L4.7,18l8.5-8.3l0,0L14,9l0,0l-0.7-0.7l0,0L4.7,0L4,0.7L12.6,9z" />
            </symbol>
            <symbol viewBox="0 0 18 18" id="arrow-prev">
              <path id="arrow-prev-arrow.svg" d="M14,0.7L13.3,0L4.7,8.3l0,0L4,9l0,0l0.7,0.7l0,0l8.5,8.3l0.7-0.7L5.4,9L14,0.7z" />
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
