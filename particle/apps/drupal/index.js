/**
 * Apply the Design System to a single Drupal behavior
 */

// ECMAScript polyfills, but NOT fetch(). Fetch() is web standard, not ECMAScript.
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { enableAllComponents } from '../../source/default';
import 'bootstrap/js/dist/tooltip';

require('./scss/_drupal-styles.scss');

(function drupal($, Drupal, once) {
  /* eslint-disable */
  Drupal.behaviors.facetWidget = {
    attach: function context($context, settings) {
      $('.facets-widget-checkbox', $context).each(function each() {
        const $this = $(this);
        if ($this.parent().hasClass('facet-active')) {
          if (!$this.hasClass('open')) {
            $this.addClass('open');
          }
        }
        const elements = once('facet-title', '.facet-title', this);
        elements.forEach(facetTitleCallback);
        // The parameters are reversed in the callback between jQuery `.each` method
        // and the native `.forEach` array method.
        function facetTitleCallback(value, index) {
          $(value).on('click touch', function click() {
            if ($this.hasClass('open')) {
              // console.log('close');
              $this.removeClass('open');
              $this.parents('.facets-widget-checkbox').removeClass('open');
            }
            else {
              // console.log('open');
              $(value).addClass('open');
              $(value).parents('.facets-widget-checkbox').addClass('open');
            }
          })
        }
      });
      // bind change event to select
      $('#pblist').on('change', function () {
        const url = $(this).val(); // get selected value
        if (url) { // require a URL
          $('.pblist-submit').on('click touch', function (e) {
            e.stopPropagation();
            e.preventDefault();
            window.location = url; // redirect
          });
        }
        return false;
      });
      const { customCarouselModule = { interval: 5000 } } = settings;
      // Provide overrides to components from Drupal settings
      const componentSettings = {
        carousel: {
          interval: customCarouselModule.interval,
        },
        // .. other component overrides go here
      };
      // Now enable all components with a custom componentSettings object
      enableAllComponents($context, componentSettings);
    },
  };
  // $('.navbar .tabs-title a').on('click touch', function tabClick(e) {
  //   e.preventDefault();
  //   $(this).tab('show');
  // });
  // $('.dropdown-menu').on('click.bs.dropdown', function disableMegaNav(e) {
  //   e.stopPropagation();
  // });
  $('#block-exposedformglobal-search-indexpage-1').on('shown.bs.modal', function() {
    $('#edit-saq--2').trigger('focus');
  });
  $('.navbar .dropdown-menu.megamenu').on('click', function meganav(event) {
    let events = $._data(document, 'events') || {};
    events = events.click || [];
    for(let i = 0; i < events.length; i++) {
      if(events[i].selector) {

        //Check if the clicked element matches the event selector
        if($(event.target).is(events[i].selector)) {
          events[i].handler.call(event.target, event);
        }

        // Check if any of the clicked element parents matches the
        // delegated event selector (Emulating propagation)
        $(event.target).parents(events[i].selector).each(function emulatingProp() {
          events[i].handler.call(this, event);
        });
      }
    }
    event.stopPropagation(); //Always stop propagation
  });
  $('.body-trimmed .read-more').on('click touch', function click() {
    $(this).parent().toggleClass('clamp');
    if ($('.body-trimmed').hasClass('clamp')) {
      $('.body-trimmed.clamp .read-more').text('Read Less -');
    } else {
      $('.body-trimmed .read-more').text('Read More +');
    }
  });
  // Init tooltips as bootstrap does not do it by default.
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  $('.navbar-nav .dropdown.has-megamenu').on({
      'show.bs.dropdown':
        function meganavOpen() {
          $('.layout-container').prepend('<div class="bg-overlay"></div>');
        },
      'hide.bs.dropdown':
        function meganavClose() {
          $('.bg-overlay').remove();
        }
    }
  );

  $('.navbar-nav .has-megamenu').each(function () {
    $(this).find('.close-nav').on('click touch', function () {
      $(this).parents('.has-megamenu.dropdown').removeClass('show');
      $(this).parents('.megamenu.dropdown-menu').removeClass('show');
      $('.bg-overlay').remove();
    });
  });

})(jQuery, Drupal, once);
/* eslint-enable */
