export async function getPostBySlug(slug: string, isDraft: boolean = false) {
  const myHeaders = new Headers();
  const base64Credentials = btoa(
    `${process.env.NEXT_PUBLIC_WORDPRESS_AUTHORIZATION}`
  );
  const authorization: any = `Basic ${base64Credentials}`;

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', authorization);

  const requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_CUSTOM_API_URL}/slug/${slug}`
  );
  const post = await response.json();

  let draft;
  if (isDraft) {
    const draftResponse = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/posts/${post.id}/revisions`,
      requestOptions
    );
    if (draftResponse.status === 200) {
      draft = await draftResponse.json();
    }
  }

  return isDraft && draft?.length > 0 ? { ...draft[0], slug: post.slug } : post;
}
