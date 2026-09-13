import { useEffect, useState } from "react";
import { useDeounce } from "../utils/useDebounce";
import { FaSearch } from "react-icons/fa";

export const SearchInput = ({ allRestraunts, setFilteredRestraunts }) => {
  const [searchText, setSearchText] = useState("");
  const [useDebounceInput] = useDeounce(searchText, 1000);
  const [searchFiltered, setSearchFiltered] = useState(allRestraunts);

  const onsearchInputChange = (e) => {
    setSearchText(e?.target?.value);
  };

  useEffect(() => {
    const filtered = allRestraunts.filter((res) => {
      return res.info?.name
        ?.toLowerCase()
        ?.includes(useDebounceInput?.toLowerCase());
    });

    setFilteredRestraunts(filtered);
    setSearchFiltered(filtered);
  }, [useDebounceInput]);

  return (
    <div className="Search">
      <div className="SearchInputcontainer">
        <input
          type="text"
          id="search"
          value={searchText}
          onChange={onsearchInputChange}
          autoComplete="off"
          className="SearchInput"
        />
        <FaSearch className="searchIcon" />
      </div>
      <button
        onClick={() => {
          setFilteredRestraunts(allRestraunts);
          setSearchFiltered(allRestraunts);
          setSearchText("");
        }}
      >
        Clear
      </button>

      {searchFiltered?.length === 0 && (
        <div>
          No Results found for your search. Please try in a different way
        </div>
      )}
    </div>
  );
};
