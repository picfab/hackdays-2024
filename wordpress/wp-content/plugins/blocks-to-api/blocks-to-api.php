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


function remove_leading_underscore_from_string($string)
{
    // Vérifiez si le premier caractère est un underscore
    if (strpos($string, '_') === 0) {
        // Supprimez le premier caractère
        return substr($string, 1);
    }
    return $string;
}

function str_replace_first($search, $replace, $subject)
{
    $pos = strpos($subject, $search);
    if ($pos !== false) {
        $subject = substr_replace($subject, $replace, $pos, strlen($search));
    }
    return $subject;
}

function prepare_repeater_acf_field($acf_blocks)
{
    foreach ($acf_blocks as $key => $block) {
        if ($block['type'] === 'repeater' && $block['value'] > 0) {
            $nb_field = $block['value'];

            $repeater_fields = array();
            for ($i = 0; $i < $nb_field; $i++) {
                foreach ($acf_blocks as $_key => $_value) {
                    if (strpos($_key, $key . '_' . $i) === 0) {
                        $clean_name = str_replace_first($key . '_' . $i . '_', '', $_key);
                        $repeater_fields[$i][$clean_name] = $_value;
                        unset($acf_blocks[$_key]);
                    }
                }
            }


            $acf_blocks[$key]['value'] = $repeater_fields;


            // foreach ($acf_blocks[$key]['value'] as $_key => $value) {
            //     foreach ($value as $__key => $__value) {
            //         if ($__value['type'] === 'group') {
            //             $acf_blocks[$key]['value'][] = prepare_group_acf_field($value);
            //         }
            //     }
            // }
        }

        if (in_array($block['type'], ['group'])) {
            // foreach ($block['value'] as $_key => $_value) {
                // var_dump($_value);
                $acf_blocks[$key]['value']  = prepare_repeater_acf_field($block['value']);
            // }
        }
    }

    return $acf_blocks;
}

function prepare_group_acf_field($acf_blocks)
{
    // var_dump($acf_blocks);
    // echo '<hr>';
    foreach ($acf_blocks as $key => $block) {
        if ($block['type'] === 'group') {

            $group_fields = array();
            foreach ($acf_blocks as $_key => $_value) {
                if (strpos($_key, $key . '_') === 0) {
                    $clean_name = str_replace_first($key .  '_', '', $_key);
                    $group_fields[$clean_name] = $_value;
                    unset($acf_blocks[$_key]);
                }
            }

            $acf_blocks[$key]['value'] = $group_fields;

            // foreach ($acf_blocks[$key]['value'] as $_key => $value) {
            //     // $acf_blocks[$key]['value'] = check_parent_field_acf($value, $acf_blocks[$key]['value']);
            //     $acf_blocks[$key]['value'] = prepare_group_acf_field($acf_blocks[$key]['value']);

            // }
        }
    }

    return $acf_blocks;
}

function check_parent_field_acf($block, $acf_blocks)
{
    if ($block['type'] === 'group') {
        // var_dump($acf_blocks, $block['name']);

        $acf_blocks = prepare_group_acf_field($acf_blocks);
    }
    // var_dump($block);
    // echo '<hr>';
    // if ($block['type'] === 'repeater') {
    //     $acf_blocks = prepare_repeater_acf_field($acf_blocks);
    // }

    return $acf_blocks;
}

add_action('rest_api_init', function () {
    register_rest_route('custom/v1', '/slug/(?P<slug>[a-zA-Z0-9-]+)', array(
        'methods' => 'GET',
        'callback' => 'get_content_by_slug',
        'permission_callback' => '__return_true',
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




        $acf_blocks = array();
        foreach ($blocks as $block) {
            if (strpos($block['blockName'], 'payfit/') === 0) {
                $data = $block['attrs']['data'];

                foreach ($data as $key => $value) {
                    if (strpos($key, '_') === 0) {
                        $field_name = remove_leading_underscore_from_string($key);
                        $acf_field = acf_get_field($value);
                        $acf_blocks[$field_name] = array(
                            'name' => $acf_field['name'],
                            'label' => $acf_field['label'],
                            'value' =>  $data[$field_name],
                            'type' => $acf_field['type'],
                            'acf_id' => $value,
                        );
                    }
                }
            }
        }

        // die(var_dump($acf_blocks));
        $acf_blocks = prepare_group_acf_field($acf_blocks);
        $acf_blocks = prepare_repeater_acf_field($acf_blocks);


        // Prepare response
        $response = array(
            'acf_blocks' => $acf_blocks,
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
