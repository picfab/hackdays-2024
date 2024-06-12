import { prepareImageData } from '@/utils/image';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { ImageTabsComponent } from './ImageTabsComponent';

export const ImageTabs = async (props: any) => {
  const _tabs = prepareRepeaterData('tabs', props);
  const tabs = await Promise.all(
    _tabs.map(async (tab: any) => {
      const logoData = await prepareImageData(tab.logo);
      const imageData = await prepareImageData(tab.image);
      return { ...tab, logoData, imageData };
    })
  );

  return <ImageTabsComponent {...props} tabs={tabs} />;
};
