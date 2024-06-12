<?php

if (class_exists('acf')) {
    add_filter('acf/fields/wysiwyg/toolbars', 'wysiwyg_toolbars');
}

function wysiwyg_toolbars($toolbars)
{
    $toolbars['Title bar'] = array();
    $toolbars['Title bar'][1] = array(
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'charmap',
        'removeformat',
        'pastetext',
        'forecolor',
    );

    $toolbars['Content bar'] = array();
    $toolbars['Content bar'][1] = array(
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'link',
        'bullist',
        'numlist',
        'charmap',
        'removeformat',
        'pastetext',
        'forecolor',
    );

    return $toolbars;
}
