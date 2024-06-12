import { ImageWp } from '@/components/image';
import { getPostBySlug } from '@/utils/getPostBySlug';
import { draftMode } from 'next/headers';

const page = async ({ params }: any) => {
  const { isEnabled } = draftMode();

  const post = await getPostBySlug(params.slug, isEnabled);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div className='single-blog-page'>
      {isEnabled ? 'Draft' : 'NOOOO'}
      <ImageWp id={post?.blocks?.[2]?.attrs?.data?.image} />

      {/* <h2>{post.title.rendered}</h2>
      <div className='blog-post'>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div> */}
    </div>
  );
};

export default page;
