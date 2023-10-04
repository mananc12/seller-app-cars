import React,{useState} from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import NoiseControlOffOutlinedIcon from "@mui/icons-material/NoiseControlOffOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
function CarCard({ car }) {

  const [clicked, setClicked] = useState(true)
  return (
    <div className="car-card">
      <div>
        <img src={car.image} alt={car.name} />
      </div>
      <div className="all-details">
      <div className="name-year">
        <span className="name">{car.name}</span>
        <span className="year">{Math.floor(Math.random() * 23) + 2000}</span>
      </div>
      <div className="details">
        <p>
          <PeopleAltOutlinedIcon className="icon"/>
          <span> {car.seats} People</span>
        </p>
        <p>
          <LocalGasStationOutlinedIcon className="icon"/>
          <span>{car.fuel_type}</span>
        </p>
        <p>
          <SpeedOutlinedIcon className="icon"/>
          <span>{car.mileage}</span>
        </p>
        <p>
          <NoiseControlOffOutlinedIcon className="icon"/>
          <span>{car.transmission}</span>
        </p>
      </div>
      <hr />
      <div className="rate-heart-rent">
        <p>
          <span className="rate">${Math.floor(Math.random() * 300) + 200}</span>
          <span className="per-month"> /month</span>
        </p>
        <div className="heart-rent">
          <div className="heart-div" onClick={()=>setClicked(!clicked)}>
            {clicked?<FavoriteBorderOutlinedIcon className="heart" />:<FavoriteOutlinedIcon className="heart"/>}
          </div>
          <button>Rent now</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default CarCard;
