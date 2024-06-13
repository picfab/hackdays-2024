<?php

/**
 * Content template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
$title = get_field('title');
$content = get_field('content');
$image = get_field('image');
$buttons = get_field('buttons');

?>

<div class="Content mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248" id="B-n-ficiez-d-un-accompagnement-adapt-vos-besoins">
    <div class="bg-neutral-1 px-24 sm:px-48 md:px-40 py-24 sm:py-40 rounded-18 translate-y-[30px] [&amp;:not(.wait)]:animate-slide-in-top-30">
        <div class="md:flex md:gap-14 items-center md:flex-row-reverse">
            <div class="flex flex-col mb-40 space-y-6 md:mb-0 md:w-1/2 lg:w-auto">
                <?php if ($title) : ?>
                    <h2 class="flex flex-col">
                        <span class="md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301">
                            <?= esc_html($title); ?>
                        </span>
                    </h2>
                <?php endif; ?>
                <?php if ($content) : ?>
                    <p class="md:text-20 md:leading-28 text-16 leading-22 font-sans text-neutral-301">
                        <?= esc_html($content); ?>
                    </p>
                <?php endif; ?>
                <div class="w-full md:flex flex-row md:space-x-2 md:space-y-0 space-y-2">
                    <?php if ($buttons) : ?>
                        <?php foreach ($buttons as $index => $button) : ?>
                            <div class="ButtonV2 group flex items-center justify-center text-center cursor-pointer border-primary-1 text-primary-1 hover:bg-blue-301 hover:border-blue-301 hover:text-white rounded-6 border py-[13px] px-[24px] text-16">
                                <?= esc_html($button['text']); ?>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            </div>
            <div class="Image rounded-12">
                <div class="max-w-[556px] block">
                    <?php if ($image) : ?>
                        <?php echo wp_get_attachment_image($image, 'full', false, [
                            'class' => 'object-cover w-full h-full',
                            'draggable' => 'false',
                            'loading' => 'lazy',
                        ]); ?>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
