import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDown, FaAngleUp, FaSearch, FaFilter } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import Button from "./Button";

const SearchModal = () => {
  return (
    <div className="contact-filter">
      <div className="input-con">
        <AiOutlineSearch />
        <input type="text" placeholder="Street, City, State, or Price" />
      </div>
      <div className="home-flex">
        <button className="btn">SEARCH</button>
      </div>
      <div className="home-flex">
        <button className="btn reset">RESET</button>
      </div>
      <div className="home-flex">
        <button className="btn">
          <FaFilter />
        </button>
      </div>
      <div className="show-mobile">
        <Button icon={<FaSearch />} />
        <Button icon={<FaFilter />} />
      </div>
    </div>
  );
};

export default SearchModal;
