/**
 * header
 */

import $ from 'jquery';
import 'bootstrap/js/dist/tab';

// Module dependencies
import 'protons';

// Module styles
import './_header.scss';

// Module template
import './_header.twig';

export const name = 'header';

export const defaults = {
  dummyClass: 'js-header-exists',
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
export function enable($context, { header = {} }) {
  // Find our component within the DOM
  const $header = $('.header', $context);
  // Bail if component does not exist
  if (!$header.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...header,
  };
  // An example of what could be done with this component
  $header.addClass(settings.dummyClass);
}

export default enable;
