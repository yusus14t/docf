import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from "@fortawesome/free-solid-svg-icons";
import filterImage from '../../assets.app/img/icons/filter.png';
import Select from "react-select";
import { axiosInstance } from '../../constants/utils' 
import { ORGANIZATION_TYPE } from "../../constants/constant";

const Search = () => {
  const [ isFilterOpen, setIsFilterOpen ] = useState(false)
  const [ sepcializations, setSpecializations ] = useState([])
  const [ searchData, setSearchData ] = useState([]);
  const [ filter, setFilter ] = useState({ search: null, fee: null, city: null, specialization: null, type: null })

  useEffect(() => {
    getAllSpecializations()
  },[])

  useEffect( () => {
    getSearch()
  }, [ filter ] )

  const getAllSpecializations = async () => {
    try{
      let { data } = await axiosInstance.get('get-specializations')
      setSpecializations(data?.specializations)
    } catch(error){ console.error(error) }
  }

  const getSearch = async () => {
    try{
      let { data } = await axiosInstance.get('/search', { params: filter })
      console.log('sewarchdata', data)
    } catch(error){ console.error(error) }
  }

  return (
    <>
      <div className="box"></div>
      <div
        style={{ position: "fixed", zIndex: "800" }}
        className="seacrh-bar-container w-100 "
      >
        <ul className="d-flex flex-row justify-content-center seacrh-ul pt-2">
          <li>
              <img
                className="cursor-pointer"
                style={{ width: "30px", height: "35px", marginRight: "10px" }}
                src={filterImage}
                onClick={() => setIsFilterOpen(!isFilterOpen) }
              />

          </li>
          {/* <li>
            <div className="city-filter">
              <label htmlFor="">
                <FontAwesomeIcon icon={faLocationDot} />
              </label>
              <select name="" id="">
                <option value="">City</option>
              </select>
            </div>
          </li> */}
          <li>
            <div className="search-bar">
              <input
                placeholder="Doctors, Clinics and Hospitals etc"
                type="text"
                onChange={(e) => setFilter({ ...filter, search: e.target.value }) }
              />
              <FontAwesomeIcon className="search-ico" icon={faSearch} />
            </div>
          </li>
        </ul>
        {isFilterOpen && <div
          className="w-100" style={{ background: '#fff', height: '60px'}}
        >
          <div className="d-flex justify-content-around align-item-center">
            <div>
              <div className="d-flex justify-content-between" style={{ width: '15rem'}} >
                <div className="">Consultation Fee</div>
                <div className="">Rs.{ filter.fee }</div>
              </div>
              <input type="range" class="form-range" min="0" max="2000" step="50" id="feeRange" onChange={(e) => setFilter({ ...filter, fee: e.target.value})} />
            </div>
            <div>
              <Select
                isMulti={false}
                options={[{name: 'Aligarh', id:'ALIGARH'}, { id: 'MORADABAD', name: 'Moradabad'}]}
                getOptionLabel={({ name }) => name}
                getOptionValue={({ id }) => id}
                className={`form-control p-0 w-15`}
                classNamePrefix="select"
                placeholder="Select City"
                onChange={(e) => setFilter({ ...filter, city: e.name })}
              />
            </div>
            <div>
              <Select
                isMulti={false}
                options={ sepcializations?.length ? sepcializations : [] }
                getOptionLabel={({ name }) => name}
                getOptionValue={({ id }) => id}
                className={`form-control p-0 w-15`}
                classNamePrefix="select"
                placeholder="Select Specialization"
                onChange={(e) => setFilter({ ...filter, specialization: e.name })}
              />
            </div>
            <div>
              <Select
                isMulti={false}
                options={ ORGANIZATION_TYPE }
                getOptionLabel={({ name }) => name}
                getOptionValue={({ id }) => id}
                className={`form-control p-0 w-15`}
                classNamePrefix="select"
                placeholder="Select Type"
                onChange={(e) => setFilter({ ...filter, type: e.name })}
              />
            </div>
          </div>
        </div>}
        <div
          className="py-2 px-0 container main-ch"
          style={{ background: "black", width: "50%" }}
        >
          <div className="search-page container rounded">
            <div className="search-result-container p-0">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                (clini) => {
                  return (
                    <div className="w-50 mr-1 p-2 main-ch">
                      <div class="ms-card mb-0">
                        <div class="ms-card-body">
                          <div class="media mb-0 fs-14">
                            <div class="me-2 align-self-center">
                              <img
                                src="https://doctortime.in/images/doctortime-image-1691824570161.png"
                                class="ms-img-round"
                                alt="people"
                              />
                            </div>
                            <div class="media-body">
                              <h6>Test by yusuf5</h6>
                              <div class="float-end d-flex-colum justify-content-between">
                                <div class="div">
                                  <span
                                    class="badge badge-outline-danger"
                                    style={{ marginBottom: "50%" }}
                                  >
                                    Clinic
                                  </span>
                                </div>
                              </div>
                              <p class="fs-12 my-1 text-disabled">
                                lmkkklk llll@gmail.com
                              </p>
                              <h6 class="mt-0">
                                <span class="fs-14">
                                  <i class="fas fa-map-marker-alt"></i>
                                </span>
                                ( 963 ) - 145 - 2586
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
