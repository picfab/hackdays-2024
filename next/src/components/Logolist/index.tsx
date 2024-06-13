import { prepareImagesData } from '@/utils/image';
import { LogolistComponent } from './LogolistComponent';

export interface LogosListProps {
  title?: string;
  logos?: Array<string | number>;
}

export const LogosList = async ({ title, logos }: LogosListProps) => {
  let _imagesData = [];
  if (logos) _imagesData = await prepareImagesData(logos);

  return <LogolistComponent title={title} logos={_imagesData} />;
};
