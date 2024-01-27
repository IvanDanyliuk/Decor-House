import PostForm from '@/components/forms/PostForm';
import { getCategories } from '@/lib/queries/category.queries';
import { getPost } from '@/lib/queries/post.queries';


const UpdatePost = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { data } = await getPost(id);
  const categories = await getCategories({});

  return (
    <>
      <section className='w-full py-10 bg-main-bg'>
        <h2 className='container mx-auto page-heading-primary'>Update Post</h2>
      </section>
      <section className='container mx-auto py-10 box-border'>
        {data && (
          <PostForm categories={categories.data.categories!} postToUpdate={data} />
        )}
      </section>
    </>
  );
};

export default UpdatePost;