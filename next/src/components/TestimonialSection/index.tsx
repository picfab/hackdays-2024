'use client';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import React from 'react';

export interface testimonialSectionProps {
  title: string;
}
export const TestimonialSection = ({
  title,
  ...props
}: testimonialSectionProps) => {
  const cards = prepareRepeaterData('cards', props);
  console.log('cards', cards);
  return (
    <div
      className='Section pt-[34px] md:pt-[52px] pb-[34px] md:pb-[52px] bg-neutral-1'
      id='DatoCmscard-19195297'
    >
      <div className='card bg-neutral-1' id='Nos-clients-parlent-de-nous-'>
        <div className='mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col items-center mb-64 space-y-32'>
          {title && (
            <h2 className='w-full text-center md:w-1/2 md:text-40 md:leading-48 text-28 leading-32 font-sans text-neutral-301'>
              {title}
            </h2>
          )}
        </div>
        <div
          className='AutoScrollingCards flex items-center overflow-hidden'
          style={{ gap: '24px' }}
        >
          <div
            className='animate-scroll-inverse flex items-center original flex-1'
            style={{ animationDuration: '100000ms', gap: '24px' }}
          >
            {cards.map((card, index) => (
              <div className='w-fit h-full relative' key={index}>
                <a
                  href={card.link}
                  className=''
                  data-cta-id={`7_DatoCmscard_${index}`}
                >
                  <div className='QuoteCard max-w-[356px] rounded-18 flex gap-24 border-2 border-neutral-51 h-[428px] w-[356px] lg:max-w-auto lg:w-[360px] xl:w-[400px] overflow-hidden px-24 py-32 sm:px-40 sm:py-56 Card bg-neutral-1 w-[356px] transition-all duration-500'>
                    <div className='flex flex-col'>
                      <figure>
                        <blockquote
                          className='text-neutral-301 md:text-20 md:leading-28 text-16 leading-22 font-sans'
                          style={{ quotes: '"« "' + '" »"' }}
                        >
                          <q>{card.quote}</q>
                        </blockquote>
                      </figure>
                      <div className='flex gap-16 mt-24'>
                        <div
                          className='hidden sm:block overflow-hidden relative rounded-6'
                          style={{ height: '60px', width: '60px' }}
                        >
                          <div
                            data-gatsby-image-wrapper=''
                            className='gatsby-image-wrapper gatsby-image-wrapper-constrained Image w-full h-full object-cover transition-all duration-500 group-two-hover:scale-110'
                          >
                            <div
                              style={{ maxWidth: '64px', display: 'block' }}
                            ></div>
                            <div
                              className='absolute inset-0'
                              style={{
                                background:
                                  'linear-gradient(rgba(0, 0, 0, 0.13), rgba(0, 0, 0, 0.13))',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className='flex flex-col justify-center'>
                          <div className='text-16 leading-22 font-sans text-neutral-301'>
                            {card.name}
                          </div>
                          <div className='text-12 leading-16 font-sans text-neutral-101'>
                            {card.job_position}
                          </div>
                        </div>
                      </div>
                      <span></span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
