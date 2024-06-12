export const lockScroll = (
  lock: boolean,
  queryElt: keyof HTMLElementTagNameMap = 'body'
) => {
  const elt: any = document.querySelector(queryElt);

  if (lock) {
    elt.classList.add('overflow-hidden');
  } else {
    elt.classList.remove('overflow-hidden');
  }
};
