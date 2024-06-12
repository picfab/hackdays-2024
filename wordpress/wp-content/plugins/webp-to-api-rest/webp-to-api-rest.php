<?php

/**
 * Plugin Name:       webp to api rest
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

function add_webp_to_media_details($data, $post, $request)
{
    // Vérifier que le post type est bien attachment
    if ('attachment' === $data->data['type']) {
        $upload_dir = wp_upload_dir();
        $meta = wp_get_attachment_metadata($post->ID);
        $file_path = get_attached_file($post->ID);

        // Ajouter le lien WebP pour chaque taille d'image
        if (isset($meta['sizes']) && is_array($meta['sizes'])) {
            foreach ($meta['sizes'] as $size => $size_info) {
                $size_file_path = str_replace(basename($file_path), $size_info['file'], $file_path);
                $webp_file_path = $size_file_path . '.webp';

                // Vérifier si le fichier WebP existe
                if (file_exists($webp_file_path)) {
                    $webp_url = str_replace($upload_dir['basedir'], $upload_dir['baseurl'], $webp_file_path);
                    $data->data['media_details']['sizes'][$size]['webp_source_url'] = $webp_url;
                }
            }
        }

        // Ajouter le lien WebP pour l'image originale
        $original_webp_file_path = $file_path . '.webp';
        $original_webp_url = str_replace($upload_dir['basedir'], $upload_dir['baseurl'], $original_webp_file_path);

        if (file_exists($original_webp_file_path)) {
            $data->data['media_details']['sizes']['full']['webp_source_url'] = $original_webp_url;
        }
    }
    return $data;
}

// Ajouter le filtre pour étendre les points de terminaison de l'API REST
add_filter('rest_prepare_attachment', 'add_webp_to_media_details', 10, 3);
