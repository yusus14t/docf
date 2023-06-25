import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <>
      <div className="seacrh-bar-container">
        <ul className="d-flex flex-row justify-content-center seacrh-ul  p-2">
          <li className='search'>
            <FontAwesomeIcon className="search-icon" icon={faLocationDot} />
          </li>
          <li>
            <input
              type="text"
              placeholder="Agra"
              className="form-control city-input"
            />
          </li>
          <li>
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
          </li>
          <li className='sm-col-3'>
            <input type="text" placeholder="Doctor, Hospital and Doctor" className="form-control dsearch-doctor text-center" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Search