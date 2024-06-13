import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ElementsWrapper } from './ElementsWrapper';
import { classNames } from '@/utils/classNames';

export interface AutoScrollingCardsProps {
  children: ReactElement[];
  inverse?: boolean;
  auto?: boolean;
  duration?: number;
  gap?: number;
}

export const AutoScrollingCards: FC<AutoScrollingCardsProps> = ({
  children,
  inverse = false,
  duration = 15000,
  auto = true,
  gap = 16,
}) => {
  const [displaySecondWrapper, setDisplaySecondWrapper] = useState(false);
  const [width, setWidth] = useState<number | undefined>(0);
  const [height, setHeight] = useState<number | undefined>(0);

  const firstWrapperRef = useRef<HTMLDivElement>(null);

  const checkPosition = useCallback(() => {
    const wrapper = firstWrapperRef.current;
    if (wrapper && !displaySecondWrapper) {
      const rect = wrapper.getBoundingClientRect();

      if (!displaySecondWrapper) {
        const displaySecond = inverse
          ? rect.right > 0 && rect.right < window.innerWidth + 400
          : rect.left > -400;
        if (displaySecond) {
          setDisplaySecondWrapper(true);
        } else {
          requestAnimationFrame(checkPosition);
        }
      }
    }
  }, [displaySecondWrapper, inverse]);

  useEffect(() => {
    const handleResize = () => {
      checkPosition(); // Recalculer la position lors du redimensionnement de la fenêtre
    };

    if (typeof window !== undefined && !displaySecondWrapper) {
      window.addEventListener('resize', handleResize);
      checkPosition(); // Initialiser la vérification de la position
    }

    if (displaySecondWrapper) {
      window.removeEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [checkPosition, displaySecondWrapper, inverse]);

  useEffect(() => {
    setWidth(firstWrapperRef.current?.offsetWidth);
    setHeight(firstWrapperRef.current?.offsetHeight);
  }, [firstWrapperRef]);

  return (
    <div
      className={classNames(
        'AutoScrollingCards',
        'flex items-center',
        auto && 'overflow-hidden',
        !auto && 'overflow-x-scroll',
        !inverse && 'flex-row-reverse justify-start'
      )}
      style={{
        gap: `${gap}px`,
      }}
    >
      <ElementsWrapper
        ref={firstWrapperRef}
        className={classNames('original flex-1')}
        inverse={inverse}
        duration={duration}
        gap={gap}
        auto={auto}
      >
        {children}
      </ElementsWrapper>
      {auto && (
        <ElementsWrapper
          inverse={inverse}
          duration={duration}
          gap={gap}
          hidden={!displaySecondWrapper}
          className='flex-1'
          styleTmp={{ width, height }}
        >
          {children}
        </ElementsWrapper>
      )}
    </div>
  );
};
