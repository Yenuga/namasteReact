import { useEffect, useState } from "react";
import { useDeounce } from "../utils/useDebounce";

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
      <input
        type="text"
        id="search"
        value={searchText}
        onChange={onsearchInputChange}
        autoComplete={"false"}
      />
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
