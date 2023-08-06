import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import filter from '../../assets.app/img/icons/filter.png'

const Search = () => {
  return (
    <>
      <div className="seacrh-bar-container container">
        <ul className="d-flex flex-row justify-content-center seacrh-ul  p-2">
          <li>
            <label htmlFor="">
              <img
                style={{ width: "20px", height: "20px" }}
                src={filter}
                alt=""
              />{" "}
            </label>
          </li>
          <li>
            <div className="city-filter">
              <label htmlFor="">
                <FontAwesomeIcon icon={faLocationDot} />
              </label>
              <select name="" id="">
                <option value="">City</option>
              </select>
            </div>
          </li>
          <li>
            <div className="search-bar">
              <input
                placeholder="Doctors, Clinics and Hospitals etc"
                type="text"
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Search;
