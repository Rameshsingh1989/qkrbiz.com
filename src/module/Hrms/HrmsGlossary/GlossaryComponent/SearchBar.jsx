
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ value, onChange }) => {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="search-bar">
      {value ? (
        <FaTimes onClick={handleClear} className={`search-text ${value ? 'text-danger' : ''}`} />
      ) : (
        <FaSearch onClick={undefined} className={`search-text ${value ? 'text-danger' : ''}`} />
      )}
      <input type="text"  placeholder="Search HR terms..." value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default SearchBar;

