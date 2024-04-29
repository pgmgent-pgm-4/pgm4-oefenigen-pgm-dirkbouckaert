const StudentSearchForm = ({ setSearch }) => {
  return (
    <input
      type="text"
      name="search"
      id="search"
      className="mb-6 w-full max-w-xs rounded-md border border-slate-300 p-2 text-slate-700"
      placeholder="Search"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default StudentSearchForm;
