import Image from 'next/image';
const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : process.env.NEXT_PUBLIC_DOMAIN;

const getBase64 = async (url: string, mime: string) => {
  const base64str = await fetch(
    `${baseUrl}/_next/image?url=${url}&w=16&q=75`
  ).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString('base64')
  );

  const blurSvg = `
          <svg xmlns='http://www.w3.org/2000/svg'>
            <filter id='b' color-interpolation-filters='sRGB'>
              <feGaussianBlur stdDeviation='1' />
            </filter>
            <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
            href='data:${mime};base64,${base64str}' />
          </svg>
        `;

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
};

const getImage = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${id}`
    );
    const image = await response.json();
    return image;
  } catch (error) {
    return null;
  }
};

export const ImageWp = async ({
  id,
  fill = false,
  objectFit = 'cover',
}: any) => {
  const image = await getImage(id);
  if (image) {
    const base64 = await getBase64(
      image?.media_details?.sizes?.medium?.source_url || image?.source_url,
      image.mime_type
    );
    if (base64)
      return (
        <>
          <Image
            src={image?.source_url}
            alt={image?.alt_text}
            width={!fill ? image?.media_details?.width : undefined}
            height={!fill ? image?.media_details?.height : undefined}
            placeholder='blur'
            blurDataURL={base64}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill={fill}
            style={{ objectFit: fill && objectFit }}
          />
        </>
      );
  }
  return null;
};
