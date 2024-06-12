<?php
function prepare_buttons($buttons)
{
    $prepared_buttons = [];
    foreach ($buttons as $button) {
        $prepared_buttons[] = [
            'label' => $button['label'],
            'url' => $button['link']['url'],
            'anchor' => $button['link']['anchor'],
            'type' => $button['link']['type'],
        ];
    }
    return $prepared_buttons;
}
