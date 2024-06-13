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
$buttons = get_field('buttons');; 
$video = get_field('video');;


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
<section <?php echo esc_attr($anchor); ?> class="<?php echo esc_attr($class_name); ?> overflow-hidden pt-[128px] pb-[64px] md:pt-[176px] md:pb-[104px] bg-blue-21" block-id="<?php echo $block['id']; ?>">
    <div class="mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col lg:flex-row mb-64 justify-center relative">
        <div class="flex flex-col justify-center mb-24 lg:max-w-[483px] lg:w-1/2 lg:mb-0 xl:max-w-[736px]">
            <?php if ($title) : ?>
                <h1 class="mb-24 text-neutral-301 font-noe sm:text-48 sm:leading-52 md:text-56 md:leading-60 xl:text-64 xl:leading-68 text-32 leading-38">
                    <?php echo $title ?>
                </h1>
            <?php endif; ?>
            <?php if ($content) : ?>
                <div class="md:text-20 md:leading-28 text-16 leading-22 font-sans text-neutral-101 mb-24">
                    <?php echo $content; ?>
                </div>
            <?php endif; ?>
            <div class="flex flex-col gap-12 md:flex-row">
                <?php if ($buttons) : ?>
                    <?php foreach ($buttons as $index => $button) : ?>
                        <?php //var_dump($button); 
                        ?>
                        <a href="<?php esc_url($button['link']['url']); ?>">
                            <div class="<?php echo $index === 0 ? 'ButtonV2 items-center group w-full md:w-auto justify-center text-center flex cursor-pointer bg-primary-1 border-primary-1 text-white hover:bg-blue-301 hover:border-blue-301 rounded-6 border py-[13px] px-[24px] text-16' : 'ButtonV2 items-center group w-full md:w-auto justify-center text-center flex cursor-pointer border-primary-1 text-primary-1 hover:bg-blue-301 hover:border-blue-301 hover:text-white rounded-6 border py-[13px] px-[24px] text-16'; ?>">
                                <?php echo esc_html($button['label']); ?>
                                <svg class="h-16 left-0 m-0 w-0 opacity-0 group-hover:opacity-100 transition-all duration-500" viewBox="0 0 16 12" fill="currentColor">
                                    <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z"></path>
                                </svg>
                            </div>
                        </a>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
        <div class="relative flex w-full m-auto max-w-[380px]">
            <div class="VideoModal">
                <div role="button" tabindex="0" class="VideoThumbnail relative overflow-hidden group flex items-center justify-center h-full cursor-pointer w-full">
                    <?php echo wp_get_attachment_image($image, 'full', false, [
                        'draggable' => 'false',
                        'style' => 'object-fit: cover; opacity: 1;',
                        'decoding' => 'async',
                        'loading' => 'eager',
                        'class' => 'object-cover w-full h-full rounded-18'
                    ]); ?>
                    <div class="absolute w-full h-full rounded-18 bg-thumbnail-overlay"></div>
                    <div class="absolute flex justify-end h-24 overflow-hidden md:h-48 lg:h-64 bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-24 lg:right-24 rounded-6"></div>
                    <?php if ($video) : ?><div class="ButtonV2 items-center group VideoOpenButton absolute bottom-24 left-1/2 -translate-x-1/2 justify-center text-center flex cursor-pointer border-white text-white hover:bg-peach-100 hover:border-peach-100 hover:text-black rounded-6 border py-[13px] px-[24px] text-16">▶ Voir la vidéo</div><?php endif; ?>
                </div>
            </div>

        </div>
</section>