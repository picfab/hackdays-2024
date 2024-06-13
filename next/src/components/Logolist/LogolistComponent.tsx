'use client';

import { classNames } from '@/utils/classNames';
import { AutoScrollingCards } from '../AutoScrollingCards';
import { ImageWp } from '../image';

export interface LogosListProps {
  title?: string;
  logos: any[];
}

export const LogolistComponent = ({ title = '', logos }: LogosListProps) => {
  // console.log('LogosListLogosListLogosListLogosListLogosListLogosList', { title, logos });

  return (
    <div className={classNames('logos-list overflow-hidden')}>
      {title && (
        <div
          className={classNames(
            'logos-list__title-container flex flex-col text-center items-center z-[1]'
          )}
        >
          {title && (
            <h2
              className={classNames(
                'logos-list__title md:w-5/8 lg:w-6/12',
                'text-neutral-101',
                'pb-24'
              )}
            >
              {title}
            </h2>
          )}
        </div>
      )}

      <div className='mb-12'>
        {/* <AutoScrollingCards inverse={true} gap={10} duration={42000}>
          {logos.map(({ className, ...logo }, key) => (
            <ImageWp
              className={classNames(className, 'rounded-8')}
              key={key}
              imageData={logo}
            />
          ))}
        </AutoScrollingCards> */}
      </div>
    </div>
  );
};
