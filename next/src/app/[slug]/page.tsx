import { Content } from '@/components/Content';
import { BannerDraftMode } from '@/components/BannerDraftMode';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { getPostBySlug } from '@/utils/getPostBySlug';
import { draftMode } from 'next/headers';
import { ImageTabs } from '@/components/ImageTabs';
import { prepareRepeaterData } from '@/utils/prepareRepeaterData';
import { prepareImageData } from '@/utils/image';

const page = async ({ params }: any) => {
  const { isEnabled } = draftMode();

  const post = await getPostBySlug(params.slug, isEnabled);
  // console.log('post', post);
  // console.log('✅params', params);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className='single-blog-page'>
      {isEnabled ? <BannerDraftMode /> : ''}
      {post?.blocks.map(async (block: any, index: number) => {
        if (block.blockName === 'payfit/hero') {
          return <Hero key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/value-proposition') {
          return <ValueProposition key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/content') {
          return <Content key={index} {...block.attrs?.data} />;
        }
        if (block.blockName === 'payfit/image-tabs') {
          return <ImageTabs key={index} {...block.attrs?.data} />;
        }
      })}
    </div>
  );
};

export default page;
