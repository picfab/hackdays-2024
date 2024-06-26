import { classNames } from '@/utils/classNames';
import { ImageWp } from '../image';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { prepareImageData } from '@/utils/image';

export interface ValuePropositionColumnsItemsProps {
  title?: string;
  paragraph?: string;
}

export interface ValuePropositionProps {
  title?: string;
  subtitle?: string;
}

export const ValueProposition = ({ title, subtitle, ...props }: any) => {

  const valueContents = prepareRepeaterData('valueContents', props);

  return (
    <div className='ValueProposition bg-neutral-1 pt-[68px]' id=''>
      <div className='mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col items-center'>
        <div className='max-w-[624px] flex flex-col item-start md:items-center pb-48 text-left md:text-center lg:pb-64'>
          {title && (
            <h2 className='md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301'>
              {title}
            </h2>
          )}
          {subtitle && (
            <div className='text-neutral-101'>
              <p className='md:text-28 text-24 leading-tight font-sans font-medium mt-24  text-neutral-101'>
                {subtitle}
              </p>
            </div>
          )}
        </div>
        <div className='flex flex-wrap md:flex-nowrap'>
          <div className='undefined'>
            <div className='flex gap-y-48 justify-center  flex-wrap'>
              {valueContents?.map(async (item: any, index: number) => {
                const imageData = await prepareImageData(item.logo);
                return (
                  <div
                    key={index}
                    className='w-full md:w-1/3 md:px-12 lg:px-32 flex text-neutral-101'
                  >
                    {item?.logo && (
                      <div className='flex justify-center'>
                        <div className='mb-16 mr-16 w-48 h-48 rounded-6 p-[10px] bg-blue-21'>
                          <ImageWp
                            imageData={imageData}
                            width='48'
                            height='48'
                          />
                        </div>
                      </div>
                    )}
                    <div className='text-left'>
                      {item?.title && (
                        <p className='text-neutral-301 mb-8  md:text-28 text-24 leading-tight font-sans font-medium'>
                          {item?.title}
                        </p>
                      )}
                      {item?.content && (
                        <p className='text-neutral-101 text-16 leading-22 font-sans'>
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
