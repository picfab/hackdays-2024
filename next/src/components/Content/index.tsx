import { prepareImageData } from '@/utils/image';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import React from 'react';
import { ImageWp } from '../image';

export interface ContentProps {
  title: string;
  content: string;
  image: string;
}

export const Content = async ({
  title,
  content,
  image,
  ...props
}: ContentProps) => {
  const buttons = prepareRepeaterData('buttons', props);
  console.log('props', props);
  console.log('image', image);

  const imageData = await prepareImageData(image);
  return (
    <div
      className="Content mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248"
      id="B-n-ficiez-d-un-accompagnement-adapt-vos-besoins"
    >
      <div className="bg-neutral-1 px-24 sm:px-48 md:px-40 py-24 sm:py-40 rounded-18 translate-y-[30px] [&amp;:not(.wait)]:animate-slide-in-top-30">
        <div className="md:flex md:gap-14 items-center md:flex-row-reverse">
          <div className="flex flex-col mb-40 space-y-6 md:mb-0 md:w-1/2 lg:w-auto">
            <h2 className="flex flex-col">
              <span className="md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301">
                {title}
              </span>
            </h2>
            <p className="md:text-20 md:leading-28 text-16 leading-22 font-sans text-neutral-301">
              {content}
            </p>
            <div className="w-full md:flex  flex-row md:space-x-2 md:space-y-0 space-y-2">
              {/* <div className="ButtonV2 items-center group flex items-center justify-center text-center flex cursor-pointer border-primary-1 text-primary-1 hover:bg-blue-301 hover:border-blue-301 hover:text-white rounded-6 border py-[13px] px-[24px] text-16">
                  En savoir plus
                </div> */}
              {buttons.map((button, index) => (
                <div
                  key={index}
                  className="ButtonV2 group flex items-center justify-center text-center cursor-pointer border-primary-1 text-primary-1 hover:bg-blue-301 hover:border-blue-301 hover:text-white rounded-6 border py-[13px] px-[24px] text-16"
                >
                  {button.text}
                </div>
              ))}
            </div>
          </div>
          <div className="Image rounded-12">
            <div className="max-w-[556px] block">
              <ImageWp
                draggable="false"
                loading="lazy"
                imageData={imageData}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
