import { classNames } from '@/utils/classNames';
import React, { forwardRef, useEffect } from 'react';

export interface ImageTabTextProps {
  content: string;
  isSelected: boolean;
  onSelection: () => void;
}

const ImageTabsText = forwardRef<HTMLDivElement, ImageTabTextProps>(
  ({ content, isSelected, onSelection, ...props }, ref) => {
    useEffect(() => {
      if (isSelected && onSelection) onSelection();
    }, [isSelected, onSelection]);

    return (
      <div ref={ref} className='absolute'>
        <p
          className={classNames(
            'relative inset-0',
            'max-w-[504px]',
            'transition ease-in duration-200',
            isSelected ? 'opacity-100' : 'opacity-0'
          )}
        >
          {content}
        </p>
      </div>
    );
  }
);

ImageTabsText.displayName = 'ImageTabsText';

export default ImageTabsText;
