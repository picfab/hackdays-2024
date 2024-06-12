import { classNames } from '@/utils/classNames';
import React from 'react';

export interface ViewerContentProps {
  className?: string;
  children?: React.ReactNode;
}

export const ViewerContent = ({ className, children }: ViewerContentProps) => {
  return (
    <div
      className={classNames(
        'ViewerContent',
        'bg-blue-51 rounded-18',
        'flex justify-center items-center rounded-18',
        className,
        'relative transition-all duration-500 overflow-hidden'
      )}
    >
      {children}
    </div>
  );
};
