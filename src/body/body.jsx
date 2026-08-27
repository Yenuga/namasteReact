import RestrauntCard from "./restraunt-card";
import { restaurants } from "../mock/data";

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">search</div>
      <div className="restraunt-container">
        {restaurants.map((res) => {
          return <RestrauntCard key={res?.info?.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
