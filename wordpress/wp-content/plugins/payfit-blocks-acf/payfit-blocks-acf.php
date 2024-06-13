<?php

/**
 * Plugin Name:       Payfit blocks acf
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

include_once(plugin_dir_path(__FILE__) . 'assets/global_fields/buttons.php');
include_once(plugin_dir_path(__FILE__) . 'assets/wysiwyg/toolbars.php');
include_once(plugin_dir_path(__FILE__) . 'assets/wysiwyg/colors_palette.php');
include_once(plugin_dir_path(__FILE__) . 'assets/wysiwyg/remove_html_tags.php');
include_once(plugin_dir_path(__FILE__) . 'assets/add_id_block.php');

// Import the ACF block
include_once(plugin_dir_path(__FILE__) . 'blocks/hero/acf.php');
include_once(plugin_dir_path(__FILE__) . 'blocks/image_tabs/acf.php');
include_once(plugin_dir_path(__FILE__) . 'blocks/testimonial/acf.php');
include_once(plugin_dir_path(__FILE__) . 'blocks/logo_list/acf.php');
include_once(plugin_dir_path(__FILE__) . 'blocks/value_proposition/acf.php');


/**
 * We use WordPress's init hook to make sure
 * our blocks are registered early in the loading
 * process.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 */


function tt3child_register_acf_blocks()
{
	/**
	 * We register our block's with WordPress's handy
	 * register_block_type();
	 *
	 * @link https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	register_block_type(__DIR__ . '/blocks/hero');
	register_block_type(__DIR__ . '/blocks/value_proposition');
	register_block_type(__DIR__ . '/blocks/image_tabs');
	register_block_type(__DIR__ . '/blocks/logo_list');
	register_block_type(__DIR__ . '/blocks/testimonial');

	remove_filter('acf_the_content', 'wpautop');
}
// Here we call our tt3child_register_acf_block() function on init.
add_action('init', 'tt3child_register_acf_blocks');


function payfit_blocks_acf_enqueue_style()
{
	wp_register_style('payfit-blocks-acf', plugin_dir_url(__FILE__) . 'build/styles.css');
	wp_enqueue_style('payfit-blocks-acf');
}
add_action('wp_enqueue_scripts', 'payfit_blocks_acf_enqueue_style');
add_action('admin_enqueue_scripts', 'payfit_blocks_acf_enqueue_style');
