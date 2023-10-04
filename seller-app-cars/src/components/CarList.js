import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CarCard from "./CarCard";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import data from "../data.json"; // Assuming you have a data.json file with the provided car data

function CarList(props) {
  const { page } = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const carsPerPage = 6;
  const totalPages = 10;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link
          key={i}
          to={`/page/${i}`}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </Link>
      );
    }

    return pageNumbers;
  };

  useEffect(() => {
    // Fetch data from mockData.json or your API here
    setCars(data.cars); // Access the 'cars' array in your data.json
  }, []);

  useEffect(() => {
    // Handle URL changes
    setCurrentPage(page ? parseInt(page) : 1); // Update currentPage based on URL
  }, [page]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // Filter cars based on search criteria if they exist and are a string
  const filteredCars =
    typeof props.filteredCars === "string"
      ? cars.filter((car) =>
          car.name.toLowerCase().includes(props.filteredCars.toLowerCase())
        )
      : cars.slice(indexOfFirstCar, indexOfLastCar);

  // If search bar is empty, only show the first 6 cars
  const displayedCars = props.filteredCars
    ? filteredCars
    : cars.slice(0, carsPerPage);

  return (
    <div className="car-list">
      <div className="list">
        {displayedCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
      <div className="pagination">
        <div className="current-total-page">
          
          {currentPage} from {totalPages}
        </div>
        <div className="prev-next">
          {currentPage > 1 && (
            <Link to={`/page/${currentPage - 1}`}><ArrowBackOutlinedIcon/></Link>
          )}
          {renderPageNumbers()}
          {currentPage < totalPages && (
            <Link to={`/page/${currentPage + 1}`}><ArrowForwardOutlinedIcon/></Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarList;
