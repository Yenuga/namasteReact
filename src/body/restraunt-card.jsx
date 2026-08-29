import { RES_IMAGE_URL } from "../utils/constants";
const RestrauntCard = ({ resData }) => {
  const resDeatils = resData?.info;
  // console.log(resDeatils);
  const { name, cloudinaryImageId, areaName, costForTwo, cuisines, avgRating } =
    resDeatils ?? {};
  return (
    <div className="res-card">
      <img className="img-restraunt" src={RES_IMAGE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ") + areaName}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestrauntCard;
