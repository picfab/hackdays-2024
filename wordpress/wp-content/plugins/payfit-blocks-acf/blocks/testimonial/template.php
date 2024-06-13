<?php

/**
 * Testimonial Section template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
$title = get_field('title');
$cards = get_field('cards');

?>

<div class="Section pt-[34px] md:pt-[52px] pb-[34px] md:pb-[52px] bg-neutral-1" id="DatoCmscard-19195297">
    <div class="bg-neutral-1" id="Nos-clients-parlent-de-nous-">
        <div class="mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col items-center mb-64 space-y-32">
            <?php if ($title) : ?>
                <h2 class="w-full text-center md:w-1/2 md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301">
                    <?= esc_html($title); ?>
                </h2>
            <?php endif; ?>
        </div>
        <div class="AutoScrollingCards flex items-center overflow-hidden" style="gap: 24px;">
            <div class="animate-scroll-inverse flex items-center original flex-1" style="animation-duration: 100000ms; gap: 24px;">
                <?php foreach ($cards as $index => $card) : ?>
                    <div class="w-fit h-full relative" key="<?= $index; ?>">
                        <a href="<?= esc_url($card['link']); ?>" class="" data-cta-id="7_DatoCmscard_<?= $index; ?>">
                            <div class="QuoteCard max-w-[356px] rounded-18 flex gap-24 border-2 border-neutral-51 h-[428px] w-[356px] lg:max-w-auto lg:w-[360px] xl:w-[400px] overflow-hidden px-24 py-32 sm:px-40 sm:py-56 Card bg-neutral-1 w-[356px] transition-all duration-500">
                                <div class="flex flex-col">
                                    <figure>
                                        <blockquote class="text-neutral-301 md:text-20 md:leading-28 text-16 leading-22 font-sans" style="quotes: '« ' ' »'">
                                            <q><?= esc_html($card['quote']); ?></q>
                                        </blockquote>
                                    </figure>
                                    <div class="flex gap-16 mt-24">
                                        <div class="hidden sm:block overflow-hidden relative rounded-6" style="height: 60px; width: 60px;">
                                            <?php echo wp_get_attachment_image($card['photo'], 'thumbnail', false, ['style' => 'object-fit: cover; opacity: 1;', 'class' => 'draggable="false"', 'decoding' => 'async', 'loading' => 'eager']); ?>
                                        </div>
                                        <div class="flex flex-col justify-center">
                                            <div class="text-16 leading-22 font-sans text-neutral-301">
                                                <?= esc_html($card['name']); ?>
                                            </div>
                                            <div class="text-12 leading-16 font-sans text-neutral-101">
                                                <?= esc_html($card['job_position']); ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col gap-12 md:flex-row">
                                        <?php if ($card['button_label']) : ?>
                                            <a href="<?= esc_url($card['button_url']); ?>">
                                                <span>
                                                    <div class="ButtonV2 items-center group mt-auto self-start inline-flex cursor-pointer text-primary-1 hover:text-black">
                                                        <?= esc_html($card['button_label']); ?>
                                                        <svg class="h-16 w-16 ml-8 inline" viewBox="0 0 16 12" fill="currentColor">
                                                            <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z" />
                                                        </svg>
                                                    </div>
                                                </span>
                                            </a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>
