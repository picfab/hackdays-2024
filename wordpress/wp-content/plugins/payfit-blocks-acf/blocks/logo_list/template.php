<?php

/**
 * Hero Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
$title = get_field('title');
$logos = get_field('logos');
?>

<div class="logos-list overflow-hidden">
    <div class="logos-list__title-container flex flex-col text-center items-center z-[1]">
        <h2 class="logos-list__title md:w-5/8 lg:w-6/12 text-neutral-101 pb-24">
            <?php echo esc_html($title); ?>
        </h2>
    </div>
    <div class="mb-12">
        <div class="AutoScrollingCards flex items-center overflow-hidden" style="gap:10px">
            <div style="animation-duration:42000ms;gap:10px" class="ElementsWrapper animate-scroll-inverse flex items-center min-w-fit original flex-1">
                <?php foreach ($logos as $key => $image_id) : ?>
                    <div class="w-fit h-full relative">
                        <div class="Logo px-20 h-80 bg-neutral-1 flex items-center justify-center rounded-8">
                            <?php echo wp_get_attachment_image($image_id, 'full', false, array(
                                'class' => 'Image max-h-[36px] !h-full',
                                'draggable' => 'false',
                                'loading' => 'lazy',
                                'decoding' => 'async',
                                'style' => 'color:transparent'
                            )); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <div style="animation-duration:42000ms;gap:10px" class="ElementsWrapper animate-scroll-inverse flex items-center min-w-fit flex-1">
                <?php foreach ($logos as $key => $image_id) : ?>
                    <div class="w-fit h-full relative">
                        <div class="Logo px-20 h-80 bg-neutral-1 flex items-center justify-center rounded-8">
                            <?php echo wp_get_attachment_image($image_id, 'full', false, array(
                                'class' => 'Image max-h-[36px] !h-full',
                                'draggable' => 'false',
                                'loading' => 'lazy',
                                'decoding' => 'async',
                                'style' => 'color:transparent'
                            )); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>