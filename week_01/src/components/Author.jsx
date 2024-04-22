const Author = ({ name, picture }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={picture}
        alt="avatar of the author"
        className="h-10 w-10 rounded-full"
      />
      <p>{name}</p>
    </div>
  );
};

export default Author;
