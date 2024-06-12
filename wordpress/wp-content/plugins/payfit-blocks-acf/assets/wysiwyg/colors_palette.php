<?php

/**
 * @link https://pixelsandthings.co.uk/snippets/syncing-your-custom-block-editor-colour-palette-with-advanced-custom-fields/
 */
// Sync ACF Wysiwyg Editor font colour options with Themes registered Colour Palette
function wp_override_tinymce_color_options($init)
{

    // Get Block Editor Theme colours
    // WE CAN SET PAYFIT COLORS ON OUR CHILD THEME
    // $color_palette = current( (array) get_theme_support( 'editor-color-palette' ) );
    $color_palette = [
        array(
            'name'  => esc_attr__('strong magenta', 'payfit-blocks-acf'),
            'slug'  => 'strong-magenta',
            'color' => '#a156b4',
        ),
        array(
            'name'  => esc_attr__('light grayish magenta', 'payfit-blocks-acf'),
            'slug'  => 'light-grayish-magenta',
            'color' => '#d0a5db',
        ),
        array(
            'name'  => esc_attr__('very light gray', 'payfit-blocks-acf'),
            'slug'  => 'very-light-gray',
            'color' => '#eee',
        ),
        array(
            'name'  => esc_attr__('very dark gray', 'payfit-blocks-acf'),
            'slug'  => 'very-dark-gray',
            'color' => '#444',
        ),
    ];

    // Create empty Array for Colour Values
    $color_values = [];

    // Loop through each Colour and grab the Colours Hex Value
    foreach ($color_palette as $color_value) {

        // Get Colour value, remove '#' & add it to the Array
        $color_values[] = str_replace('#', '', $color_value['color']);

        // Get Colour name & add it to the Array
        $color_values[] = $color_value['name'];
    }

    // Add Array to Editor font colour options
    $init['textcolor_map'] = json_encode($color_values);

    // Create enough 'Rows' to show all your Theme colours within the Colour Grid
    $init['textcolor_rows'] = 2;

    // Return Colour Values & Names within the Colour Grid
    return $init;
}
add_filter('tiny_mce_before_init', 'wp_override_tinymce_color_options');
