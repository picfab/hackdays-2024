<?php

/**
 * Plugin Name:       blocks to api rest
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



add_action(
    'rest_api_init',
    function () {
        $post_types = get_post_types_by_support(['editor']);
        foreach ($post_types as $post_type) {
            if (use_block_editor_for_post_type($post_type)) {
                register_rest_field(
                    $post_type,
                    'content_blocks',
                    [
                        'get_callback' => function (array $post) {
                            return parse_blocks($post['content']['raw']);
                        },
                    ]
                );
            }
        }
    }
);

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/slug/(?P<slug>[a-zA-Z0-9-]+)', array(
        'methods' => 'GET',
        'callback' => 'get_content_by_slug',
    ));
});

function get_content_by_slug($data)
{
    $args = array(
        'name' => $data['slug'],
        'post_type' => 'any', // Change 'any' to the desired post type if needed
        'post_status' => 'publish',
        'posts_per_page' => 1,
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) {
        $post = $query->posts[0];

        // Get blocks using the Gutenberg API
        $blocks = parse_blocks($post->post_content);

        // Get additional post data
        $post_data = get_post($post->ID);
        $post_author = get_userdata($post_data->post_author);

        // Prepare links
        $base_url = rest_url('/wp/v2');
        $post_type_object = get_post_type_object($post_data->post_type);
        $rest_base = $post_type_object->rest_base;
        $post_url = null;
        if (!$rest_base) {
            $rest_base = $post_data->post_type;
            $post_url = $base_url . '/' . $rest_base . '/' . $post_data->ID;
        }

        $author_url = $base_url . '/users/' . $post_author->ID;

        // Get meta fields (example fields)
        $meta_fields = array(
            '_acf_changed' => get_post_meta($post->ID, '_acf_changed', true),
            '_seopress_robots_primary_cat' => get_post_meta($post->ID, '_seopress_robots_primary_cat', true),
            '_seopress_titles_title' => get_post_meta($post->ID, '_seopress_titles_title', true),
            '_seopress_titles_desc' => get_post_meta($post->ID, '_seopress_titles_desc', true),
            '_seopress_robots_index' => get_post_meta($post->ID, '_seopress_robots_index', true),
            'footnotes' => get_post_meta($post->ID, 'footnotes', true),
        );

        $all_meta =  get_post_meta($post->ID);


        // Prepare response
        $response = array(
            'id' => $post_data->ID,
            'date' => $post_data->post_date,
            'slug' => $post_data->post_name,
            'status' => $post_data->post_status,
            'type' => $post_data->post_type,
            'title' => $post_data->post_title,
            'author' => $post_author->data->display_name,
            'blocks' => $blocks,
            '_links' => array(
                'self' => array(
                    'href' => $post_url,
                ),
                'author' => array(
                    'href' => $author_url,
                ),
            ),
            'meta' => $meta_fields,
            'all_meta' => $all_meta,
            // 'pt' => $post_type_object
        );

        return rest_ensure_response($response);
    } else {
        return new WP_Error('error', 'No content found with that slug.', array('status' => 404));
    }
}




// revision 

add_action('rest_api_init', function () {
    add_filter('rest_prepare_revision', 'extend_revision_response', 10, 3);
});

function extend_revision_response($response, $post, $request)
{
    if ($post->post_type === 'revision') {
        // Récupérer l'ID du post parent

        $blocks = parse_blocks($post->post_content);

        // Ajouter les révisions de blocs à la réponse
        $response->data['blocks'] = $blocks;
    }

    return $response;
}
