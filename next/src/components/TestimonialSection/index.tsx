import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { ImageWp } from '../image';
import { prepareImagesData } from '@/utils/image';

interface Card {
  quote: string;
  photo: string;
  name: string;
  job_position: string;
  button_label: string;
  button_url: string;
  button: string;
  link: string;
  imageData?: any;
  [key: string]: any;
}

export interface testimonialSectionProps {
  title: string;
  [key: string]: any;
}

export const TestimonialSection = async ({
  title,
  ...props
}: testimonialSectionProps) => {
  const cards: Card[] = prepareRepeaterData('cards', props);

  const images = cards.map((card) => card.photo);
  const imagesData = await prepareImagesData(images);

  const cardsWithImageData = cards.map((card, index) => {
    return {
      ...card,
      imageData: imagesData[index],
    };
  });

  return (
    <div className='Section pt-[34px] md:pt-[52px] pb-[34px] md:pb-[52px] bg-neutral-1'>
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
            {cardsWithImageData.map((card, index) => {
              console.log(card?.link);

              return (
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
                            <ImageWp
                              draggable='false'
                              style={{ objectFit: 'cover', opacity: 1 }}
                              loading='lazy'
                              imageData={card.imageData}
                            />
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
                        <div className='flex flex-col gap-12 md:flex-row'>
                          {card.button_label && (
                            <div key={index}>
                              <span>
                                <div className='ButtonV2 items-center group mt-auto self-start inline-flex cursor-pointer text-primary-1 hover:text-black'>
                                  {card.button_label}
                                  <svg
                                    className='h-16 w-16 ml-8 inline'
                                    viewBox='0 0 16 12'
                                    fill='currentColor'
                                  >
                                    <path d='M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z' />
                                  </svg>
                                </div>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
