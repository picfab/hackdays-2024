import { classNames } from '@/utils/classNames';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { ImageWp } from '../image';
import { VideoModal } from '../VideoModal';
import { getBase64, getImage, prepareImageData } from '@/utils/image';

export const Hero = async ({
  title,
  content,
  image,
  video,
  logo,
  ...props
}: any) => {
  const buttons = prepareRepeaterData('buttons', props);
  const imageData = await prepareImageData(image);

  const logoData = await prepareImageData(logo);

  return (
    <section
      id='hero-video'
      className='hero overflow-hidden pt-[128px] pb-[64px] md:pt-[176px] md:pb-[104px] bg-blue-21'
    >
      <div className='mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 flex flex-col lg:flex-row mb-64 justify-center relative'>
        <div className='flex flex-col justify-center mb-24 lg:max-w-[483px] lg:w-1/2 lg:mb-0 xl:max-w-[736px]'>
          {title && (
            <h1 className='mb-24 text-neutral-301 font-noe sm:text-48 sm:leading-52 md:text-56 md:leading-60 xl:text-64 xl:leading-68 text-32 leading-38'>
              {title}
            </h1>
          )}
          {content && (
            <div
              className='md:text-20 md:leading-28 text-16 leading-22 font-sans text-neutral-101 mb-24'
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
          <div className='flex flex-col gap-12 md:flex-row'>
            {buttons?.map((button, index) => (
              <a key={index} href={button.link_url}>
                <div
                  className={classNames(
                    'ButtonV2',
                    'items-center group w-full md:w-auto justify-center text-center flex cursor-pointer',
                    index === 0 &&
                      'bg-primary-1 border-primary-1 text-white hover:bg-blue-301 hover:border-blue-301 rounded-6 border py-[13px] px-[24px] text-16',
                    index === 1 &&
                      'border-primary-1 text-primary-1 hover:bg-blue-301 hover:border-blue-301 hover:text-white rounded-6 border py-[13px] px-[24px] text-16'
                  )}
                >
                  {button.label}
                  <svg
                    className='h-16 left-0 m-0 w-0  opacity-0 group-hover:opacity-100 transition-all duration-500'
                    viewBox='0 0 16 12'
                    fill='currentColor'
                  >
                    <path d='M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z'></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className='relative flex w-full m-auto max-w-[380px]'>
          {!video && (
            <ImageWp
              draggable='false'
              style={{ objectFit: 'cover', opacity: 1 }}
              decoding='async'
              loading='eager'
              imageData={imageData}
              {...image}
              priority={true}
            />
          )}
          {video && (
            <VideoModal
              gradient={true}
              imageData={imageData}
              logoData={logoData}
              url={video}
              imagePriority={true}
            />
          )}
        </div>
      </div>
    </section>
  );
};
