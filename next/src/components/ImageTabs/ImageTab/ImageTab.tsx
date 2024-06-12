import { ImageWp } from '@/components/image';
import { classNames } from '@/utils/classNames';
import React, {
  EventHandler,
  KeyboardEvent,
  MouseEvent,
  useCallback,
} from 'react';

interface ImageTabLayoutProps {
  selected: boolean;
  title?: string;
  onClick?: EventHandler<MouseEvent | KeyboardEvent>;
  logoData?: any;
  className?: string;
  imageData: any;
}

export const ImageTab = ({
  selected = false,
  onClick,
  logoData,
  title,
  className,
  imageData,
  ...props
}: ImageTabLayoutProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' && onClick) onClick(event);
    },
    [onClick]
  );

  return (
    <div
      role={'button'}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={classNames(
        'ImageTab',
        className,
        selected
          ? 'opacity-100'
          : 'transition ease-out duration-500 opacity-50',
        'hover:opacity-100 focus:opacity-100',
        'tab flex flex-col items-center cursor-pointer',
        'outline-none h-full'
      )}
      {...props}
    >
      {logoData && (
        <div className='mb-16'>
          <ImageWp imageData={logoData} size={'big'} width={56} height={56} />
        </div>
      )}
      {title && (
        <div
          className={classNames(
            // textBody,
            'mb-16 text-center',
            'w-max md:max-w-[140px]',
            'flex items-center',
            'justify-center h-full'
          )}
        >
          {title}
        </div>
      )}
    </div>
  );
};
