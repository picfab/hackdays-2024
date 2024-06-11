
async function getSinglePost(postId: string) {
  console.log(
    postId,
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/${postId}`
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages/${postId}`
  );
  const post = await response.json();
  return post;
}

const page = async ({ params }: any) => {
  console.log(params);

  const post = await getSinglePost(params.postID);
  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-blog-page'>
      <h2>{post.title.rendered}</h2>
      <div className='blog-post'>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </div>
    </div>
  );
};

export default page;
