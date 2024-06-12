export const applyImageBgColor = (color?: string): string => {
  switch (color) {
    case 'mint':
      return 'bg-mint-51';
    case 'purple':
      return 'bg-purple-51';
    case 'coral':
      return 'bg-coral-51';
    case 'azur':
      return 'bg-azur-51';
    case 'yellow':
      return 'bg-yellow-51';
    case 'white':
      return 'bg-neutral-1';
    default:
      // blue
      return 'bg-blue-51';
  }
};

export const getTranslationDirection = (
  selectedIndex?: number,
  previousIndex?: number,
) => {
  if (!selectedIndex) return;
  if (!previousIndex) return;
  if (previousIndex > selectedIndex) return 'left';
  if (previousIndex < selectedIndex) return 'right';
};
