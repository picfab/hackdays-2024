import { ImageWp } from '@/components/image';
import { getPostBySlug } from '@/utils/getPostBySlug';
import { draftMode } from 'next/headers';

const page = async ({ params }: any) => {
  const { isEnabled } = draftMode();

  const post = await getPostBySlug(params.slug, isEnabled);
  console.log('post', post);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className='single-blog-page'>
      {isEnabled ? 'Draft' : 'NOOOO'}
      {post?.blocks.map((block: any, index: number) => {
        if (block.blockName === 'payfit/hero') {
          return <div key={index}>{block.blockName}</div>;
        }
      })}
      {/* <ImageWp id={post?.blocks?.[2]?.attrs?.data?.image} /> */}
    </div>
  );
};

export default page;
