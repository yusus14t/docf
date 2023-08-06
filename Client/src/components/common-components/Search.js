import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import filter from '../../assets.app/img/icons/filter.png'

const Search = () => {
  return (
    <>
      <div className="box"></div>
      <div
        style={{ position: "fixed", zIndex: "999" }}
        className="seacrh-bar-container w-100 "
      >
        <ul className="d-flex flex-row justify-content-center seacrh-ul  p-2">
          <li>
            <label htmlFor="">
              <img
                style={{ width: "30px", height: "40px", marginRight: "10px" }}
                src={filter}
                alt=""
              />
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
              <FontAwesomeIcon className="search-ico" icon={faSearch} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Search;
