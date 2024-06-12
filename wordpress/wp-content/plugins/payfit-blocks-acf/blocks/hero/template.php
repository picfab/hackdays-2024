<?php
include_once(plugin_dir_path(__FILE__) . '../../assets/prepare_buttons.php');
/**
 * Hero Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
$title = get_field('title');
$content = get_field('content');
$image = get_field('image');
$size = 'full'; // (thumbnail, medium, large, full or custom size)

$buttons = get_field('buttons');
if ($buttons)
    $buttons = prepare_buttons($buttons);
$anchor = '';
if (!empty($block['anchor'])) {
    $anchor = 'id="' . esc_attr($block['anchor']) . '" ';
}

// Create class attribute allowing for custom "class" and "align" values.
$class_name = 'Hero';
// if (!empty($block['class'])) {
//     $class_name .= ' ' . $block['class'];
// }
// if (!empty($block['align'])) {
//     $class_name .= ' align' . $block['align'];
// }

?>

<div <?php echo esc_attr($anchor); ?>class="<?php echo esc_attr($class_name); ?>" block-id="<?php echo $block['id']; ?>">
    <div class="w-full mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col lg:flex-row mb-64 justify-center relative">
        <div class="flex flex-col justify-center mb-24 lg:max-w-[483px] lg:w-1/2 lg:mb-0 xl:max-w-[736px]">
            <?php echo $title; ?>
            <?php echo $content; ?>
            <?php
            if ($buttons) : ?>
                <div class="flex flex-col lg:flex-row">
                    <?php
                    foreach ($buttons as $button) :
                    ?>
                        <a href="<?php echo $button['url']; ?>" class="bg-neutral-301 btn btn--primary btn--lg mt-24" target="<?php echo $button['type']; ?>"><?php echo $button['label']; ?></a>
                    <?php
                    endforeach; ?>
                </div>
            <?php
            endif
            ?>
            <?php if (!$is_preview) { ?>
                <div <?php
                        /* echo wp_kses_data(
            get_block_wrapper_attributes(
                array(
                    'id'    => $block_id,
                    'class' => esc_attr( $class_name ),
                )
            )
        );*/
                        ?>>
                <?php } ?>

                <?php if (!$is_preview) { ?>
                </div>
            <?php } ?>
        </div>
        <div class="relative flex w-full m-auto max-w-[380px]">
            <div class="relative flex w-full m-auto max-w-[380px]">
                <div class="aspect-square overflow-hidden rounded-18">
                    <?php
                    if ($image) {
                        echo wp_get_attachment_image($image, $size, false, array('class' => 'object-cover object-center w-full h-full'));
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>