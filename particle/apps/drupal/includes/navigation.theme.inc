<?php

/**
 * @file
 * Functions to support theming navigation in the Particle theme.
 */

/**
 * Implements hook_preprocess_breadcrumb().
 */
function particle_preprocess_breadcrumb(&$variables) {
  $route_match = \Drupal::routeMatch();

  if ($route_match->getRouteName() == 'entity.node.canonical' && $variables['breadcrumb']) {
    $node = \Drupal::routeMatch()->getParameter('node');
    $variables['breadcrumb'][] = [
      'text' => $node->getTitle(),
    ];
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 *
 * Provide region based menu suggestions.
 */
function particle_theme_suggestions_menu_alter(&$suggestions, array $variables) {
  if (isset($variables['attributes']['region'])) {
    $suggestions[] = 'menu__' . $variables['menu_name'];
    $suggestions[] = 'menu__' . $variables['menu_name'] . '__' . $variables['attributes']['region'];
  }
}

