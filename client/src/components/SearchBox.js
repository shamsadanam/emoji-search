import React from "react";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <input className="input-field" type="text" onChange={onChangeHandler} />
    </div>
  );
};
export default SearchBox;
