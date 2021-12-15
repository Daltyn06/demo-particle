/**
 * Navbar
 */

import 'bootstrap/js/dist/collapse';

// Custom
import $ from 'jquery';
import 'protons';
import './placeholder-light.png';

// Module template
import './_navbar.twig';

// Import custom sass, includes Bootstrap sass
import './_navbar.scss';

export const name = 'navbar';

export function disable() {}

export function enable($context) {
  const $tabs = $('.tabs', $context);
  if ($tabs.length) {
    // let previousActiveTabIndex = 0;
    // $('.tabs-title a').on('click touch', function tabClick(e) {
    //   e.preventDefault();
    //   const tabIdClass = `.${$(this).parents('.tabs').attr('id')}`;
    //   console.log(tabIdClass);
    //   const tabId = `#${$(this).parents('.tabs').attr('id')}`;
    //   console.log(tabId);
    //   const tabClicked = $(this).parent().data('tab-index');
    //   if (tabClicked !== previousActiveTabIndex) {
    //     $(tabIdClass)
    //       .find('.tabs-panel')
    //       .each(function tabPanel() {
    //         if ($(this).data('tab-index') === tabClicked) {
    //           $(tabIdClass).find('.tabs-panel').removeClass('open');
    //           $(this).addClass('open');
    //           previousActiveTabIndex = $(this).parent().data('tab-index');
    //         }
    //       });
    //     $(tabId)
    //       .find('.tabs-title')
    //       .each(function tabTitle() {
    //         if ($(this).data('tab-index') === tabClicked) {
    //           $(tabId).find('.tabs-title').removeClass('open');
    //           $(this).addClass('open');
    //           previousActiveTabIndex = $(this).parent().data('tab-index');
    //         }
    //       });
    //   }
    // });
  }
  $('#block-exposedformglobal-search-indexpage-1').on(
    'shown.bs.modal',
    function searchModal() {
      $('#mobileNav').collapse('hide');
    }
  );

  $('#mobileNav .has-megamenu .dropdown-toggle').one(
    'click touch',
    function clickNav() {
      const parent = $(this).parent();
      const menu = parent.find('.megamenu .nav-tabs');
      const parentLink = $(this).attr('href');
      const parentText = $(this).find('.link-text').text();
      const listLink = `<li class="tab-title nav-item parent-nav-item"><a class="nav-link" href="${parentLink}">${parentText}</a></li>`;
      menu.find('.parent-nav-item').remove();
      menu.prepend(listLink);
    }
  );
  $('#mobileNav .nav-tabs .nav-item').each(function removeTab() {
    $(this).find('a[data-toggle="tab"]').removeAttr('data-toggle');
    $(this).find('.nav-link.active').removeClass('active');
  });
}

export default enable;
