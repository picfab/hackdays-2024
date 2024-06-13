import { classNames } from '@/utils/classNames';
import { ReactNode, forwardRef } from 'react';

export type ElementsWrapperProps = {
  children: ReactNode[];
  inverse: boolean;
  duration: number;
  gap: number;
  className?: string;
  styleTmp?: any;
  hidden?: boolean;
  auto?: boolean;
};

export const ElementsWrapper = forwardRef<HTMLDivElement, ElementsWrapperProps>(
  (
    {
      children,
      inverse,
      duration,
      gap,
      className,
      styleTmp,
      hidden,
      auto = true,
    },
    ref
  ) => {
    const style = hidden && styleTmp;

    return (
      <div
        ref={ref}
        style={{
          animationDuration: `${duration}ms`,
          gap: `${gap}px`,
          ...style,
        }}
        className={classNames(
          'ElementsWrapper',

          auto && inverse && 'animate-scroll-inverse',
          auto && !inverse && 'animate-scroll-normal',
          'flex items-center min-w-fit',
          className
        )}
      >
        {!hidden &&
          children.map((e, i) => (
            <div key={i} className='w-fit h-full relative'>
              {e}
            </div>
          ))}
      </div>
    );
  }
);

ElementsWrapper.displayName = 'ElementsWrapper';
