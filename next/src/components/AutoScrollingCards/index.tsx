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
        // ref={firstWrapperRef}
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
          // hidden={!displaySecondWrapper}
          className='flex-1'
          // styleTmp={{ width, height }}
        >
          {children}
        </ElementsWrapper>
      )}
    </div>
  );
};
