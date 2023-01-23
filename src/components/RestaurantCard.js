import { IMG_CDN_URL } from "../constant";

const RestrauntCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  }) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{area}</h5>
        <span>
         
          <h4>•</h4>
          <h4>{lastMileTravelString}</h4>
          <h4>•</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
  };
  
  export default RestrauntCard;