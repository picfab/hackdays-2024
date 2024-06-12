import { useContext, useEffect, useState } from 'react';
import { ViewerContext } from './ViewerContext';
import { classNames } from '@/utils/classNames';

export interface ViewerElementProps {
  index: number;
  className?: string;
  children?: React.ReactNode;
}

export const ViewerElement = ({
  className,
  index,
  children,
}: ViewerElementProps) => {
  const context = useContext(ViewerContext);
  const [selected, setSelected] = useState<any>(0);
  const [animation, setAnimation] = useState<any>(null);

  useEffect(() => {
    setSelected((prev: any) => {
      const getAnimation = () => {
        if (index !== context.indexSelected) return null;
        if (context.way === 'horizontal') {
          return prev > index ? 'right' : 'left';
        }
        if (context.way === 'vertical') {
          return prev > index ? 'top' : 'bottom';
        }
      };

      setAnimation(getAnimation());

      return context.indexSelected;
    });
  }, [context.indexSelected, context.way, index]);

  const AnimClassNames = !context?.reverse
    ? classNames(
        animation === 'top' && `animate-slide-bottom`,
        animation === 'bottom' && `animate-slide-top`,
        animation === 'left' && `animate-slide-right`,
        animation === 'right' && `animate-slide-left`
      )
    : classNames(
        animation === 'bottom' && `animate-slide-bottom`,
        animation === 'top' && `animate-slide-top`,
        animation === 'right' && `animate-slide-right`,
        animation === 'left' && `animate-slide-left`
      );

  return (
    <div
      className={classNames(
        'ViewerElement',
        'top-0 transition-all duration-500',
        'ease-in-out flex justify-center items-center p-8',
        className,
        selected !== index ? 'opacity-0 w-0 hidden' : 'opacity-100',
        AnimClassNames
      )}
    >
      {children}
    </div>
  );
};
