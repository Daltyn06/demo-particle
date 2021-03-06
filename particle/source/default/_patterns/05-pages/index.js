/**
 * Full Page Demos
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

import $ from 'jquery';

// Ensure all assets required by demos are present.
import 'protons';
import 'templates/site-container.twig';

// Demo templates.
import './article.twig';
import './homepage.twig';
import './product-landing.twig';
import './gallery-detail.twig';
import './product-detail.twig';
import './gallery-landing.twig';
import './node.twig';

export const name = 'demoPages';

export function disable() {}

export function enable(context = $(document), settings) {
  $('.homepage__header', context).css('color', settings.color);
  $('.homepage__text', context).html(
    'The header color should be overwritten by settings in pl/index.js. this text was overwritten from js in 05-pages/demo/index.js.'
  );
}

export default enable;
