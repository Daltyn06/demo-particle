/**
 * awards
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module styles
import './_awards.scss';

// Module template
import './_awards.twig';
import './awards.png';

export const name = 'awards';

export const defaults = {
  dummyClass: 'js-awards-exists',
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
export function enable($context, { awards = {} }) {
  // Find our component within the DOM
  const $awards = $('.awards', $context);
  // Bail if component does not exist
  if (!$awards.length) {
    return;
  }

  const listToggle = $('.awards-list--toggle');
  const listToggleTrigger = $('.awards-toggle');
  if (listToggle) {
    listToggleTrigger.on('click touch', function awardToggle() {
      listToggle.toggleClass('closed');
      listToggleTrigger.toggleClass('closed');
    });
  }
  // Merge defaults with incoming settings
  const settings = {
    ...defaults,
    ...awards,
  };
  // An example of what could be done with this component
  $awards.addClass(settings.dummyClass);
}

export default enable;
