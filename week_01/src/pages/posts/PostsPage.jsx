import posts from '../../data/posts';
import Post from '../../components/Post';

const PostsPage = () => {
  return (
    <div
      className="container mx-auto my-8 flex flex w-[calc(100vw-4rem)]
                 max-w-2xl flex-wrap items-stretch justify-center gap-6"
    >
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default PostsPage;
