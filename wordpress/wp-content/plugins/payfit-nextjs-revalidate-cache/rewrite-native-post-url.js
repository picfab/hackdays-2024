wp.domReady(() => {
  const { subscribe } = wp.data;

  subscribe(() => {
    const viewPostButton = document.querySelector(
      'a.components-button.has-icon'
    );

    if (
      viewPostButton &&
      viewPostButton?.getAttribute('aria-label') === 'View Post'
    ) {
      const postSlug = wp.data
        .select('core/editor')
        .getEditedPostAttribute('slug');

      viewPostButton.href = `${customGutenbergData.nextjsBaseUrl}/${postSlug}`;
    }
  });
});


