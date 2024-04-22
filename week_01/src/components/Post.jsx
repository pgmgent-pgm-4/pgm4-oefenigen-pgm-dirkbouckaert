import Author from './Author';

const Post = ({ title, synopsis, text, author, publishDate }) => {
  return (
    <article className="block w-full border p-4 shadow">
      <h2 className="font mb-2 text-xl font-semibold uppercase tracking-wide ">
        {title}
      </h2>
      <p className="mb-4 text-sm">{publishDate}</p>

      <Author name={author.name} picture={author.picture} />

      <p className="my-2 rounded bg-gray-100 p-2 italic">{synopsis}</p>

      <p>{text}</p>
    </article>
  );
};

export default Post;
