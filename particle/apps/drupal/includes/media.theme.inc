<?php

/**
 * @file
 * Functions to support theming media entities in the Particle theme.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
// Disabled since it throws errors.
function particle_theme_suggestions_image_alter(array &$suggestions, array $variables) {
  $node = \Drupal::request()->attributes->get('node');
  if (!empty($node)) {
    $suggestions[] = 'image__' . $node->getType();
  }
}

function particle_preprocess_field(&$variables) {


  $field_name = $variables['field_name'];
  if ($field_name == 'field_media_oembed_video') {
    $src = $variables['element']['0']['#attributes']['src'];
    $src = str_replace('/media/oembed?url=', '', urldecode($src));

    // https://stackoverflow.com/questions/3392993/php-regex-to-get-youtube-video-id
    $pattern = "/^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/";
    preg_match($pattern, $src, $matches);

    if(!empty($matches)) {
      $variables['element']['0']['#attributes']['youtube'] = $matches[1];
    }
  }
}


/**
 * Implements hook_preprocess_image().
 */
function particle_preprocess_image(&$variables) {
  if ($variables['style_name'] == 'thumbnail') {
    $variables['attributes']['class'][] = 'img-thumbnail';
  }
}
