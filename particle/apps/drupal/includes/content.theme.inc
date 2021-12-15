<?php

/**
 * @file
 * Functions to support theming content layout in the Particle theme.
 */

/**
 * Implements hook_theme_suggestions_taxonomy_term_alter().
 */
function particle_theme_suggestions_taxonomy_term_alter(array &$suggestions, array $variables) {
  /** @var \Drupal\taxonomy\TermInterface $term */
  $term = $variables['elements']['#taxonomy_term'];
  $sanitized_view_mode = strtr($variables['elements']['#view_mode'], '.', '_');
  // Add view mode theme suggestions.
  $suggestions[] = 'taxonomy_term__' . $sanitized_view_mode;
  $suggestions[] = 'taxonomy_term__' . $term->bundle() . '__' . $sanitized_view_mode;
  $suggestions[] = 'taxonomy_term__' . $term->id() . '__' . $sanitized_view_mode;
}

/**
 * Implements hook_theme_suggestions_page_alter().
 */
// Disabled since it throws errors.
function particle_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node) {
    $suggestions[] = 'page__' . $node->bundle();
  }
}


/**
 * Implements hook_theme_suggestions_paragraph_alter().
 */
function particle_theme_suggestions_paragraph_alter(array &$suggestions, array $variables) {

  $paragraph = $variables['elements']['#paragraph'];
  $bundle = $paragraph->bundle();

  if ($bundle == 'st_cards') {
    if (array_key_exists('field_st_cards_carousel', $variables['elements'])) {
      $suggestions[] = 'paragraph__st_cards__carousel';
    }
  }
}
