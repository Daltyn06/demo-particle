<?php

/**
 * @file
 * Functions to support theming page layout in the Particle theme.
 */
use Drupal\Component\Utility\Html;
/**
 * Implements hook_preprocess_HOOK().
 */
function particle_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
  }
}
