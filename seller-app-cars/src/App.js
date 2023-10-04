import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import SearchBar from './components/SearchBar';
import data from './data.json'

function App() {
  const [filteredCars, setFilteredCars] = useState(data.cars);
  //console.log(filteredCars);
  return (
    <Router>
      <div className="App">
      <div className='container'>
        <SearchBar setFilteredCars={setFilteredCars}/>
        <Routes>
          <Route path="/" element={<CarList filteredCars={filteredCars}/>} />
          <Route path="/page/:page" element={<CarList filteredCars={filteredCars}/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
