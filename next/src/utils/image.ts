const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : process.env.NEXT_PUBLIC_DOMAIN;

const myHeaders = new Headers();
const base64Credentials = btoa(`${process.env.NEXT_WORDPRESS_AUTHORIZATION}`);
const authorization: any = `Basic ${base64Credentials}`;

myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', authorization);

const requestOptions: any = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const getBase64 = async (url: string, mime: string) => {
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
export const getImage = async (id: number | string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${id}`,
      requestOptions
    );
    const image = await response.json();
    return image;
  } catch (error) {
    return null;
  }
};

export const getImages = async (ids: Array<number | string>) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media?include=${ids.join(
        ','
      )}`,
      { next: { revalidate: 3600 } }
    );
    const images = await response.json();
    return images;
  } catch (error) {
    return null;
  }
};

export const isSvg = (url: string) => url?.endsWith('.svg');
export const prepareImageData = async (id: number | string) => {
  const imageData = await getImage(id);

  if (imageData && isSvg(imageData?.source_url)) return imageData;

  const imageBase64 = await getBase64(
    imageData?.media_details?.sizes?.medium?.source_url ||
      imageData?.source_url,
    imageData.mime_type
  );
  return Object.assign(imageData, { imageBase64 });
};

export const prepareImagesData = async (ids: Array<number | string>) => {
  const imagesData = await getImages(ids);
  const images = imagesData.map(async (imageData: any) => {
    if (imageData && isSvg(imageData?.source_url)) return imageData;

    const imageBase64 = await getBase64(
      imageData?.media_details?.sizes?.medium?.source_url ||
        imageData?.source_url,
      imageData.mime_type
    );
    return Object.assign(imageData, { imageBase64 });
  });

  return await Promise.all(images);
};
