import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import filter from "../../assets.app/img/icons/filter.png";

const Search = () => {
  return (
    <>
      <div className="box"></div>
      <div
        style={{ position: "fixed", zIndex: "800" }}
        className="seacrh-bar-container w-100 "
      >
        <ul className="d-flex flex-row justify-content-center seacrh-ul  p-2">
          <li>
            <label htmlFor="">
              <img
                style={{ width: "30px", height: "35px", marginRight: "10px" }}
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
