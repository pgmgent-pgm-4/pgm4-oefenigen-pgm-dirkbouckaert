const Search = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        className="w-full rounded-lg border border-zinc-200 p-2 text-zinc-800
                   focus:border-amber-600 focus:ring-amber-600"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
