/**
 * Base css generation and global js logic.
 */
import $ from 'jquery';
import 'tokens/sass/tokens.scss';
import './_protons.scss';
import './img/background-shadow.png';
import './img/placeholder-lsi.png';
import './_product-builder.scss';
// Export global variables.

export function enable() {
  $(document).ready(function ready() {
    const grid = $('.grid-toggle');
    const list = $('.list-toggle');
    const view = $('.view-gallery-search-index');

    function showGrid() {
      sessionStorage.setItem('gallery-toggle', false);
      $('.card--style--secondary').removeClass('hide');
      $('.card--style--list').addClass('hide');
      list.removeClass('active');
      grid.addClass('active');
      view.find('.row li').removeClass('col-12 col-md-6');
      view.find('.row li').addClass('col-12 col-md-4');
    }

    function showList() {
      sessionStorage.setItem('gallery-toggle', true);
      $('.card--style--secondary').addClass('hide');
      $('.card--style--list').removeClass('hide');
      grid.removeClass('active');
      list.addClass('active');
      view.find('.row li').removeClass('col-12 col-md-4');
      view.find('.row li').addClass('col-12 col-md-6');
    }

    const galleryToggle = sessionStorage.getItem('gallery-toggle');

    // Expects string instead of boolean. May not be the case in all browsers.
    if (galleryToggle === 'true') {
      showList();
    } else {
      showGrid();
    }

    $(list).on('click touch', function clickList() {
      showList();
    });
    $(grid).on('click touch', function clickGrid() {
      showGrid();
    });
    const country = $(
      '#views-exposed-form-representatives-block-1 [data-drupal-selector=edit-country]'
    );
    const area = $(
      '#views-exposed-form-representatives-block-1 [data-drupal-selector=edit-area]'
    );

    country.on('click touch', function click() {
      area.val('- Any -');
    });

    const country2 = $(
      '#views-exposed-form-designers-block-1 [data-drupal-selector=edit-country-code]'
    );
    const area2 = $(
      '#views-exposed-form-designers-block-1 [data-drupal-selector=edit-area]'
    );

    country2.on('click touch', function click() {
      area2.val('- Any -');
    });
  });
}

export default enable;
