<?php
add_filter(
    'acf/pre_save_block',
    function ($attributes) {
        if (empty($attributes['id'])) {
            $attributes['id'] = 'acf-block-' . uniqid();
        }
        return $attributes;
    }
);
