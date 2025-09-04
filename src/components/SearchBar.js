import useEmployee from '../hooks/useEmployee';

const SearchBar = () => {
  const { setSearchTerm } = useEmployee();

  return (
    <input
      type="text"
      placeholder="Search employees..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
