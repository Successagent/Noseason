import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown, FaAngleUp, FaSearch, FaFilter } from "react-icons/fa";
import Button from "./Button";

const SearchModal = () => {
  const [zipCode, setZipCodes] = useState(false);
  const handleZipCon = () => {
    setZipCodes(!zipCode);
  };
  return (
    <div className="contact-filter">
      <div className="input-con">
        <AiOutlineSearch />
        <input type="text" placeholder="Street, City, State, or Zip" />
      </div>
      <div className="input-con">
        <p>All Status</p>
        <FaAngleDown />
      </div>
      <div className="input-con">
        <p>All Cities</p>
        <FaAngleDown />
      </div>
      <div className="input-con zip-codes-con" onClick={handleZipCon}>
        <p>All Zipcodes</p>
        <div className="zip-con" data-visible={zipCode}>
          <p>56001</p>
          <p>54501</p>
          <p>54531</p>
          <p>56631</p>
          <p>56001</p>
          <p>54501</p>
          <p>54531</p>
          <p>56631</p>
          <p>56001</p>
          <p>54501</p>
          <p>54531</p>
          <p>56631</p>
        </div>
        <FaAngleDown />
      </div>
      <div className="home-flex">
        <Button title="SEARCH" />
        <Button title="MORE" />
      </div>
      <div className="show-mobile">
        <Button icon={<FaSearch />} />
        <Button icon={<FaFilter />} />
      </div>
    </div>
  );
};

export default SearchModal;
