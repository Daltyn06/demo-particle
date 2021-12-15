/**
 * Carousel
 */

import $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Module dependencies
import 'protons';
import 'atoms/image';
import '../../../../../apps/node-pl/pattern-lab/_patterns/04-templates-demo/U.S._Olympic_&_Paralympic_Museum_Web_B_for-HP-HERO.png';

// Module template
import './_carousel.twig';
import './_grid-carousel.twig';

// Module styles
import './_carousel.scss';

export const name = 'carousel';

export const defaults = {};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable() {
  // Initialize the carousel with (potentially) overridden settings
  $(document).ready(function slickinit() {
    $('.carousel').not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: false,
      speed: 2500,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
      cssEase: 'linear',
      lazyLoad: 'ondemand',
    });
    $(
      '.paragraph-type--st-cards .grid-carousel .field--name-field-st-cards-card, .grid-carousel .view-grid-carousel'
    )
      .not('.slick-initialized')
      .slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        infinite: false,
        speed: 2000,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
              infinite: false,
            },
          },
          {
            breakpoint: 1024,
            settings: 'unslick',
          },
        ],
      });
  });
}

export default enable;
