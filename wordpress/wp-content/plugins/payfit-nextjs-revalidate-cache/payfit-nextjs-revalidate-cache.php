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

      CURLOPT_URL => 'http://localhost:3000/api/revalidate?secret=' . NEXTJS_TOKEN . '&path=' . $path,

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
