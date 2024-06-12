<?php
function remove_html_tags($content)
{

    $content = preg_replace('/<(h1|h2|h3|h4|h5|h6|p)[^>]*>/', "", $content);
    $content = preg_replace('/<\/(h1|h2|h3|h4|h5|h6|p)>/', "\n", $content);

    return $content;
}
remove_filter('acf_the_content', 'wpautop');
add_filter('acf_the_content', 'remove_html_tags', 10);
add_filter('acf_the_content', 'wpautop', 9);


function filtrer_remove_html_tags_before_save($value, $post_id, $field)
{
    // Supprimer les balises <h1>, <h2>, <h3>, <h4>, <h5>, <h6> et <p> du contenu
    $value = preg_replace('/<(h1|h2|h3|h4|h5|h6|p)[^>]*>/', "", $value);
    $value = preg_replace('/<\/(h1|h2|h3|h4|h5|h6|p)>/', "\n", $value);
    return $value;
}

add_filter('acf/update_value', 'filtrer_remove_html_tags_before_save', 10, 3);
// add_filter('acf/update_value/name=content', 'filtrer_remove_html_tags_before_save', 10, 3);
// add_filter('acf/update_value/name=title', 'filtrer_remove_html_tags_before_save', 10, 3);
