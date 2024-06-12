import Image from 'next/image';

export const ImageWp = ({
  imageData,
  fill = false,
  objectFit = 'cover',
  height,
  width,
  alt,
  className,
  ...props
}: any) => {
  console.log('🚨', imageData);

  if (imageData) {
    return (
      <>
        <Image
          // alt={alt}
          src={imageData?.source_url}
          alt={imageData?.alt_text}
          // width={!fill ? width : undefined}
          // height={!fill ? height : undefined}
          width={!fill ? width || imageData?.media_details?.width : undefined}
          height={
            !fill ? height || imageData?.media_details?.height : undefined
          }
          placeholder={imageData.imgBase64 ? 'blur' : undefined}
          blurDataURL={imageData.imgBase64}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill={fill}
          style={{ objectFit: fill && objectFit }}
          className={className}
        />
      </>
    );
  }
  return null;
};
