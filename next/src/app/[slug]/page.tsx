import { Content } from '@/components/Content';
import { ImageWp } from '@/components/image';
import { ValueProposition } from '@/components/ValueProposition';
import { getPostBySlug } from '@/utils/getPostBySlug';
import { draftMode } from 'next/headers';

const page = async ({ params }: any) => {
  const { isEnabled } = draftMode();

  const post = await getPostBySlug(params.slug, isEnabled);
  console.log('post', post);
  console.log('✅params', params);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className="single-blog-page">
      {isEnabled ? 'Draft' : 'NOOOO'}
      {post?.blocks.map((block: any, index: number) => {
        if (block.blockName === 'payfit/hero') {
          return <div key={index}>{block.blockName}</div>;
        }
        if (block.blockName === 'payfit/value-proposition') {
          return <ValueProposition key={index} {...block.attrs.data} />;
        }
        if (block.blockName === 'payfit/content') {
          console.log('block.attrs.data', block.attrs?.data);
          return <Content key={index} {...block.attrs?.data} />;
        }
      })}
      {/* <ImageWp id={post?.blocks?.[2]?.attrs?.data?.image} /> */}
    </div>
  );
};

export default page;
