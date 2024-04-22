const MovieTagList = ({ tags }) => {
  return (
    <ul className="my-6 flex items-center justify-center gap-4">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-lg bg-blue-600 px-4 py-1 text-sm text-white"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default MovieTagList;
