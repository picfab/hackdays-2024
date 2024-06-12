const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/'
    : process.env.NEXT_PUBLIC_DOMAIN;

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
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${id}`
    );
    const image = await response.json();
    return image;
  } catch (error) {
    return null;
  }
};

export const prepareImageData = async (id: number | string) => {
  const imageData = await getImage(id);
  const imageBase64 = await getBase64(
    imageData?.media_details?.sizes?.medium?.source_url ||
      imageData?.source_url,
    imageData.mime_type
  );
  return Object.assign(imageData, { imageBase64 });
};
