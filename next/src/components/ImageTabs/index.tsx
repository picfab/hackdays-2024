import { prepareImageData } from '@/utils/image';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { ImageTabsComponent } from './ImageTab';
import { classNames } from '@/utils/classNames';

export const ImageTabs = async (props: any) => {
  const _tabs = prepareRepeaterData('tabs', props);
  const tabs = await Promise.all(
    _tabs.map(async (tab: any) => {
      const logoData = await prepareImageData(tab.logo);
      const imageData = await prepareImageData(tab.image);
      return { ...tab, logoData, imageData };
    })
  );

  return (
    <div
      className={classNames(
        'SectionImageTabs mx-24 sm:px-56 sm:max-w-719 md:px-0 md:mx-auto md:max-w-736 lg:max-w-1000 xl:max-w-1248 text-neutral-301 flex flex-col items-center'
      )}
    >
      <h2
        className={classNames(
          'mb-64 font-medium text-center md:w-6/12 md:text-40 md:leading-48 text-28 leading-32 font-sans'
        )}
      >
        {props?.title}
      </h2>
      <ImageTabsComponent {...props} tabs={tabs} />
    </div>
  );
};
