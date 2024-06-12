<?php

/**
 * Plugin Name:       Payfit Nextjs revalidate cache
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            LMS
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       payfit-blocks-acf
 *
 * @package CreateBlock
 */

if (!defined('ABSPATH')) {
   exit; // Exit if accessed directly.
}

// Next revalidate

function revalidate_next($path)

{

   $path = urlencode($path);

   $curl = curl_init();

   curl_setopt_array($curl, array(

      CURLOPT_URL => 'https://hackdays-2024.vercel.app/api/revalidate?secret=' . NEXTJS_TOKEN . '&path=' . $path,

      CURLOPT_RETURNTRANSFER => true,

      CURLOPT_ENCODING => '',

      CURLOPT_MAXREDIRS => 10,

      CURLOPT_TIMEOUT => 0,

      CURLOPT_FOLLOWLOCATION => true,

      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

      CURLOPT_CUSTOMREQUEST => 'GET',

   ));

   curl_exec($curl);

   curl_close($curl);

   return;
}




function get_rest_base($post_type_name)
{

   $post_types = get_post_types(['name' => $post_type_name], 'object');

   $post_type = $post_types[$post_type_name];

   return $post_type->rest_base;
}




add_action('save_post', 'revalide_nextjs_page', 99, 3);

function revalide_nextjs_page($post_id, $post, $update)

{

   $allowPostType = ['post', 'page'];

   if (in_array($post->post_type, $allowPostType) && $update) {

      $rest_base = get_rest_base($post->post_type);

      $path = "/$rest_base/$post->post_name";

      revalidate_next($path);
   }
}



add_filter('preview_post_link', 'custom_preview_post_link', 10, 2);

function custom_preview_post_link($preview_link, $post)
{
   if ($post->post_type == 'post') {
      // Personnalisez l'URL de prévisualisation ici
      $custom_url = NEXTJS_URL . 'api/draft?secret=' . NEXTJS_TOKEN . '&slug=' . $post->post_name;

      return $custom_url;
   }
   return $preview_link;
}


// function modify_post_link($actions, $post)
// {
//    if ($post->post_type == 'post') {
//       if (isset($actions['view'])) {
//          $new_url  = NEXTJS_URL  . $post->post_name;
//          $actions['view'] = '<a href="' . esc_url($new_url) . '" target="_blank">View Post</a>';
//       }
//    }
//    return $actions;
// }
// add_filter('post_row_actions', 'modify_post_link', 10, 2);
// add_filter('page_row_actions', 'modify_post_link', 10, 2);



// function enqueue_custom_gutenberg_script()
// {
//    wp_enqueue_script(
//       'custom-gutenberg-view-link-script',
//       plugin_dir_url(__FILE__) . 'rewrite-native-post-url.js',
//       array('wp-blocks', 'wp-dom-ready', 'wp-edit-post'),
//       filemtime(plugin_dir_path(__FILE__) . 'rewrite-native-post-url.js'),
//       true
//    );

//    // Localize the script with the Next.js base URL
//    $nextjs_base_url = NEXTJS_URL;
//    wp_localize_script(
//       'custom-gutenberg-view-link-script',
//       'customGutenbergData',
//       array(
//          'nextjsBaseUrl' => $nextjs_base_url,
//       )
//    );
// }
// add_action('enqueue_block_editor_assets', 'enqueue_custom_gutenberg_script');




add_filter('the_content', 'replace_internal_links');
add_filter('post_link', 'replace_internal_links');
add_filter('page_link', 'replace_internal_links');
add_filter('the_permalink', 'replace_internal_links');

function replace_internal_links($content)
{
   // Définir votre nouvelle URL de base Next.js
   $new_base_url = NEXTJS_URL;

   // Récupérer l'URL actuelle de WordPress
   $current_base_url = get_site_url();

   // Remplacer les URLs internes de WordPress par celles de Next.js
   $content = str_replace($current_base_url . '/', $new_base_url, $content);

   return $content;
}
