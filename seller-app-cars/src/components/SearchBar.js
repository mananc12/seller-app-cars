import React, { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = (props) => {
  const [val, setVal] = useState();
  const handleChange=(e)=>{
    setVal(e.target.value)
    props.setFilteredCars(e.target.value)
  }
  return (
    <div className="search-bar-container">
      <div>
      <input
        type="search"
        className="search-bar"
        value={val}
        onChange={handleChange}
        placeholder="     Search..."
      />
<SearchOutlinedIcon className="search-icon"/>
</div>
    </div>
  );
};

export default SearchBar;
