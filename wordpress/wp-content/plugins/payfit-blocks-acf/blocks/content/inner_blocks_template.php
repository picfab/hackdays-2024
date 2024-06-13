<?php

/**
 * A template string of blocks.
 * Need help converting block HTML markup to an array?
 * 👉 https://happyprime.github.io/wphtml-converter/
 *
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/
 */
$inner_blocks_template = array(
    array(
        'core/heading',
        array(
            'fontSize' => 'large',
            'content'  => 'Taylor Swift',
        ),
        array(),
    ),
    array(
        'core/paragraph',
        array(
            'style'    => array(
                'spacing' => array(
                    'margin' => array(
                        'bottom' => '0',
                        'top'    => '0',
                    ),
                ),
            ),
            'fontSize' => 'small',
            'content'  => 'Ea qui voluptate irure nulla aliquip nulla anim laborum exercitation eu incididunt.',
        ),
        array(),
    ),
);
