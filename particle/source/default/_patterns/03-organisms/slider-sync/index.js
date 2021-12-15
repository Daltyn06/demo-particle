/**
 * slider-sync
 */

import $ from 'jquery';
import 'slick-carousel/slick/slick.min';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Module dependencies
import 'protons';

// Module styles
import './_slider-sync.scss';

// Module template
import './_slider-sync.twig';

export const name = 'slider-sync';

export const defaults = {
  dummyClass: 'js-slider-sync-exists',
};

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
export function enable($context, { sliderSync = {} }) {
  // Find our component within the DOM
  const $sliderSync = $('.slider-sync', $context);
  // Bail if component does not exist
  if (!$sliderSync.length) {
    return;
  }

  $(document).ready(function slickinit() {
    $('.slider-sync .featured').not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-sync .thumbnails',
    });
    $('.slider-sync .thumbnails')
      .not('.slick-initialized')
      .slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-sync .featured',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
      });
  });
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...sliderSync,
  };
  // An example of what could be done with this component
  $sliderSync.addClass(settings.dummyClass);
}

export default enable;
