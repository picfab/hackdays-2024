import { Content } from '@/components/Content';
import { BannerDraftMode } from '@/components/BannerDraftMode';
import { Hero } from '@/components/Hero';
import { ValueProposition } from '@/components/ValueProposition';
import { TestimonialSection } from '@/components/TestimonialSection';
import { getPostBySlug } from '@/utils/getPostBySlug';
import { draftMode } from 'next/headers';
import { ImageTabs } from '@/components/ImageTabs';
import { LogosList } from '@/components/Logolist';

const page = async ({ params }: any) => {
  const { isEnabled } = draftMode();

  const post = await getPostBySlug(params.slug, isEnabled);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className='single-blog-page'>
      {isEnabled ? <BannerDraftMode /> : ''}
      {post?.blocks?.map(async (block: any, index: number) => {
        if (block.blockName === 'payfit/hero') {
          return <Hero key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/value-proposition') {
          return <ValueProposition key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/content') {
          return (
            <Content
              key={index}
              {...block.attrs?.data}
              inverse={index / 2 === 0 ? true : false}
            />
          );
        }
        if (block.blockName === 'payfit/image-tabs') {
          return <ImageTabs key={index} {...block.attrs?.data} />;
        }
        if (block.blockName === 'payfit/testimonial') {
          return <TestimonialSection key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/logo-list') {
          return <LogosList key={index} {...block.attrs?.data} />;
        }
      })}
    </div>
  );
};

export default page;
