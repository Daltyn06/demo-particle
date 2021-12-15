/**
 * homepage-cta-icons
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module styles
import './_homepage-cta-icons.scss';

// Module template
import './_homepage-cta-icons.twig';

export const name = 'homepage-cta-icons';

export const defaults = {
  dummyClass: 'js-homepage-cta-icons-exists',
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
export function enable($context, { homepageCtaIcons = {} }) {
  // Find our component within the DOM
  const $homepageCtaIcons = $('.homepage-cta-icons', $context);
  // Bail if component does not exist
  if (!$homepageCtaIcons.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...homepageCtaIcons,
  };
  // An example of what could be done with this component
  $homepageCtaIcons.addClass(settings.dummyClass);
}

export default enable;
