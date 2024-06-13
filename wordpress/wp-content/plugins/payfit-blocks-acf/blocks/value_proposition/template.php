<?php

/**
 * Value Proposition template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
$title = get_field('title');
$subtitle = get_field('subtitle');
$valueContents = get_field('valueContents');



// Create class attribute allowing for custom "class" and "align" values.
$class_name = 'ValueProposition';
// if (!empty($block['class'])) {
//     $class_name .= ' ' . $block['class'];
// }
// if (!empty($block['align'])) {
//     $class_name .= ' align' . $block['align'];
// }

?>

<div class="<?php echo esc_attr($class_name); ?>" block-id="<?php echo $block['id']; ?>">


    <div class="<?php echo esc_attr($class_name); ?> bg-neutral-1" block-id="<?php echo $block['id']; ?>">
        <div class="mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col items-center">
            <div class="max-w-[624px] flex flex-col item-start md:items-center pb-48 text-left md:text-center lg:pb-64">
                <?php if ($title) : ?>
                    <h2 class="md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301">
                        <?= $title ?>
                    </h2>
                <?php endif; ?>
                <?php if ($subtitle) : ?>
                    <div class="text-neutral-101">
                        <p class="md:text-28 text-24 leading-tight font-sans font-medium mt-24 text-neutral-101">
                            <?= $subtitle ?>
                        </p>
                    </div>
                <?php endif; ?>
            </div>
            <div class="flex flex-wrap md:flex-nowrap">
                <div class="undefined">
                    <div class="flex gap-y-48 justify-center flex-wrap">
                        <?php foreach ($valueContents as $index => $item) : ?>
                            <div class="w-full md:w-1/3 md:px-12 lg:px-32 flex text-neutral-101">
                                <?php if ($item['logo']) : ?>
                                    <div class="flex justify-center">
                                        <div class="mb-16 mr-16 w-48 h-48 rounded-6 p-[10px] bg-blue-21">
                                            <?php echo wp_get_attachment_image($item['logo'], 'full'); ?>

                                        </div>
                                    </div>
                                <?php endif; ?>
                                <div class="text-left">
                                    <?php if ($item['title']) : ?>
                                        <p class="text-neutral-301 mb-8 md:text-28 text-24 leading-tight font-sans font-medium">
                                            <?= $item['title'] ?>
                                        </p>
                                    <?php endif; ?>
                                    <?php if ($item['content']) : ?>
                                        <p class="text-neutral-101 text-16 leading-22 font-sans">
                                            <?= $item['content'] ?>
                                        </p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>