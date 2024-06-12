import { classNames } from '@/utils/classNames';
import { useWindowResize } from '@/utils/useWindowResize';
import { ReactNode, useCallback, useEffect, useRef } from 'react';

export interface TabIndicatorProps {
  children?: ReactNode;
  selectedIndex?: number;
}

export const TabIndicator = ({
  selectedIndex = 0,
  children,
}: TabIndicatorProps) => {
  const indicator = useRef<any>();
  const tabRefs = useRef<any[]>([]);

  const handleIndicatorDimensions = useCallback(() => {
    const selectedTab: any = tabRefs.current[selectedIndex];

    if (indicator.current) {
      const indicatorWidth = selectedTab?.offsetWidth || 0;
      const indicatorOffset = selectedTab?.offsetLeft || 0;

      // Translation needs to be set with fixed unit (and have manually resized).
      // Safari translations with percentages is buggy
      indicator.current.style.width = `
        ${indicatorWidth}px`;
      indicator.current.style.transform = `translateX(${indicatorOffset}px)`;
    }
  }, [selectedIndex]);

  useWindowResize(handleIndicatorDimensions);

  useEffect(() => {
    handleIndicatorDimensions();
  }, [handleIndicatorDimensions]);

  return (
    <div className='Tabindicator w-full overflow-x-auto relative'>
      <div className='relative flex flex-col w-fit'>
        <div className='relative flex justify-between w-full gap-16 md:w-full'>
          {Object.values(children as ReactNode[]).map((item, i) => (
            <div
              key={i}
              ref={(el) => (tabRefs.current[i] = el as any)}
              className='TabindicatorElement px-[30px]'
            >
              {item}
            </div>
          ))}
        </div>
        <div className='left-0 bottom-0 w-full bg-blue-21'>
          <div
            ref={indicator}
            className={classNames(
              'relative',
              'h-[3px]',
              'bg-blue-101 rounded-full z-10',
              'transition-all ease-bounce duration-500 origin-right',
              'px-[30px]'
            )}
          />
        </div>
      </div>
      <div className='w-full bg-blue-21 h-[3px] absolute bottom-0 left-0' />
    </div>
  );
};
