import { classNames } from '@/utils/classNames';
import { AutoScrollingCards } from '../AutoScrollingCards';
import { ImageWp } from '../image';

export interface LogosListProps {
  title?: string;
  logos: any[];
}

export const LogolistComponent = ({ title = '', logos }: LogosListProps) => {
  return (
    <div className={classNames('logos-list overflow-hidden bg-blue-21')}>
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
        <AutoScrollingCards inverse={true} gap={10} duration={42000}>
          {logos.map(({ className, ...logo }, key) => (
            <div
              key={key}
              className='Logo px-20 h-80 bg-neutral-1 flex items-center justify-center rounded-8'
            >
              <ImageWp
                draggable='false'
                className='Image max-h-[36px] w-full h-full'
                imageData={logo}
                width='20'
                height='10'
                sizes='10vw'
              />
            </div>
          ))}
        </AutoScrollingCards>
      </div>
    </div>
  );
};
