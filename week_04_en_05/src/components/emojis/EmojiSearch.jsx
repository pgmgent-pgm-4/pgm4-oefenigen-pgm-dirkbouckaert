const EmojiSearch = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default EmojiSearch;
