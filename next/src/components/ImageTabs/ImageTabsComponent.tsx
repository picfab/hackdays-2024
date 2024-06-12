'use client';
import { ImageWp } from '../image';

export const ImageTabsComponent = ({ title, tabs, ...props }: any) => {
  console.log('tabs', tabs);

  return (
    <div className='SectionImageTabs mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 text-neutral-301 flex flex-col items-center'>
      <h2 className='mb-64 font-medium text-center md:w-6/12 md:text-40 md:leading-48 text-28 leading-32 font-sans'>
        Centralisez la gestion de votre paie et de vos RH
      </h2>
      <div className='ImageTabs w-full'>
        <div className='Tabindicator w-full overflow-x-auto relative'>
          <div className='relative flex flex-col w-fit'>
            <div className='relative flex justify-between w-full gap-16 md:w-full'>
              {tabs?.map((tab: any, index: number) => {
                return (
                  <div key={index} className='TabindicatorElement px-[30px]'>
                    <div
                      role='button'
                      tabIndex={0}
                      className='ImageTab max-w-max transition ease-out duration-500 opacity-50 hover:opacity-100 focus:opacity-100 tab flex flex-col items-center cursor-pointer outline-none h-full'
                    >
                      <div className='mb-16'>
                        <div className='rounded-6 p-[5px] w-56 h-56'>
                          <ImageWp
                            imageData={tab.logoData}
                            width={56}
                            height={56}
                          />
                        </div>
                      </div>
                      <div className='text-16 leading-22 font-sans mb-16 text-center w-max md:max-w-[140px] flex items-center justify-center h-full'>
                        {tab.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='left-0 bottom-0 w-full bg-blue-21'>
              <div
                className='relative h-[3px] bg-blue-101 rounded-full z-10 transition-all ease-bounce duration-500 origin-right px-[30px]'
                style={{ width: '161px', transform: 'translateX(648px)' }}
              ></div>
            </div>
          </div>
          <div className='w-full bg-blue-21 h-[3px] absolute bottom-0 left-0'></div>
        </div>
        <div className='mt-24'>
          <div
            className='relative transition-all duration-500'
            style={{ height: '174px' }}
          >
            <div className='relative'>
              {tabs?.map((tab: any, index: number) => {
                return (
                  <div key={index} className='absolute'>
                    <p className='relative inset-0 max-w-[504px] transition ease-in duration-200 md:text-20 md:leading-28 text-16 leading-22 font-sans opacity-0'>
                      {tab?.content}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className='absolute inset-0 transition-all ease-bounce duration-500'
              style={{ transform: 'translateY(128px)' }}
            >
              {tabs?.map((tab: any, index: number) => {
                return (
                  <div key={index} className='hidden'>
                    <a
                      href={tab?.button_url}
                      rel='noopener noreferrer'
                      data-cta-id='ImageTabs_0_0'
                    >
                      <div className='ButtonV2 items-center group flex items-center inline-flex cursor-pointer text-primary-1 hover:text-black'>
                        {tab.button_label}
                        <svg
                          className='h-16 w-16 ml-8 inline'
                          viewBox='0 0 16 12'
                          fill='currentColor'
                        >
                          <path d='M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM15.5303 6.53033C15.8232 6.23744 15.8232 5.76256 15.5303 5.46967L10.7574 0.696699C10.4645 0.403806 9.98959 0.403806 9.6967 0.696699C9.40381 0.989593 9.40381 1.46447 9.6967 1.75736L13.9393 6L9.6967 10.2426C9.40381 10.5355 9.40381 11.0104 9.6967 11.3033C9.98959 11.5962 10.4645 11.5962 10.7574 11.3033L15.5303 6.53033ZM1 6.75H15V5.25H1V6.75Z'></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='ViewerContent flex justify-center items-center rounded-18 relative transition-all duration-500 overflow-hidden bg-blue-51'>
            {tabs?.map((tab: any, index: number) => {
              return (
                <div
                  key={index}
                  className='ViewerElement top-0 transition-all duration-500 ease-in-out flex justify-center items-center p-8 '
                >
                  <ImageWp imageData={tab.imageData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
