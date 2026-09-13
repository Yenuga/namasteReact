import RestrauntCard from "./restraunt-card";
import { restaurants } from "../mock/data";
import { useState, useEffect } from "react";
import { fetchData, updateNextResList } from "../services/fetch-res-data";
import { SearchInput } from "./searchBox";
import PlaceHolder from "./place-holder-newres";

const Body = () => {
  const [isVeg, setIsVeg] = useState(false);
  const [showTopRated, setShowTopRated] = useState(false);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestrants] = useState([]);
  const [nextOffset, setNextOffset] = useState();

  useEffect(() => {
    getData();
    // updateNextResList();
  }, []);

  const getData = async () => {
    const { pageOffset, resData } = await fetchData();
    setAllRestrants((prev) => {
      return [...resData, ...prev];
    });
    setFilteredRestraunts((prev) => {
      return [...resData, ...prev];
    });
    setNextOffset(pageOffset);
  };

  useEffect(() => {
    const filtered = allRestraunts?.filter((each) => {
      return (
        (isVeg ? each?.info?.veg : true) &&
        (showTopRated ? each?.info?.avgRating > 4.5 : true)
      );
    });
    setFilteredRestraunts(filtered);
  }, [isVeg, showTopRated]);

  return (
    <div className="Body">
      <div className="bodySelector">
        <SearchInput
          allRestraunts={allRestraunts}
          setFilteredRestraunts={setFilteredRestraunts}
        />
        <div className="filter">
          <button
            className={showTopRated ? "slider active" : "slider"}
            onClick={() => setShowTopRated(!showTopRated)}
          >
            Top rated restraunts
          </button>
          <button
            className={isVeg ? "slider active" : "slider"}
            onClick={() => setIsVeg(!isVeg)}
          >
            Veg
          </button>
        </div>
      </div>

      <div className="restraunt-container">
        {filteredRestraunts?.map((res) => {
          return <RestrauntCard key={res?.info?.id} resData={res} />;
        })}
      </div>
      <PlaceHolder getData={getData} />
    </div>
  );
};

export default Body;
