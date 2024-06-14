import { isSvg } from '@/utils/image';
import Image from 'next/image';

export const ImageWp = ({
  imageData,
  fill = false,
  objectFit = 'cover',
  height,
  width,
  alt,
  className,
  draggable,
  priority,
  sizes,
  ...props
}: any) => {
  if (imageData) {
    return (
      <>
        <Image
          // alt={alt}
          draggable={draggable}
          src={imageData?.source_url}
          alt={imageData?.alt_text}
          // width={!fill ? width : undefined}
          // height={!fill ? height : undefined}
          width={!fill ? width || imageData?.media_details?.width : undefined}
          height={
            !fill ? height || imageData?.media_details?.height : undefined
          }
          unoptimized={isSvg(imageData?.source_url) ? true : false}
          placeholder={imageData.imgBase64 ? 'blur' : undefined}
          blurDataURL={imageData.imgBase64}
          sizes={
            sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          }
          fill={fill}
          style={{ objectFit: fill && objectFit }}
          className={className}
          priority={priority}
        />
      </>
    );
  }
  return null;
};
