import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFeatured,
  addStatusType,
} from "../../../features/filter/filterSlice";

const FilterTopBar = () => {
  const { length } = useSelector((state) => state.properties);
  const { statusType, featured } = useSelector((state) => state.filter);
  const [getStatus, setStatus] = useState(statusType);
  const [getFeatured, setFeatured] = useState(featured);

  const dispatch = useDispatch();

  // add status
  useEffect(() => {
    dispatch(addStatusType(getStatus));
  }, [dispatch, addStatusType, getStatus]);

  // add featured
  useEffect(() => {
    dispatch(addFeatured(getFeatured));
  }, [dispatch, addFeatured, getFeatured]);

  // clear filter
  useEffect(() => {
    statusType === "" && setStatus("");
    featured === "" && setFeatured("");
  }, [statusType, setStatus, featured, setFeatured]);

  return (
    <>
      <div className="col-12">
        <div className="right_area text-end tac-xsd">
          <ul className="d-flex align-items-center">
            <li className="list-inline-item d-flex align-items-center">
              <span className="stts me-2">SHOW:</span>
              <select class="custom-select border py-2 px-2 rounded" name="entries_per_page" id="entries_per_page">
                <option value="15">15</option>
                <option value="30">30</option>
                <option value="60">60</option>
              </select>
            </li>
            <li className="list-inline-item d-flex align-items-center">
              <span className="stts me-2">SORT BY:</span>
              <select class="custom-select border rounded py-2 px-1" name="sort_by" id="sort_by">
                <option value="">Sort By</option>
                <option value="popularity">Popularity</option>
                <option value="price_low_to_high">Price (Low To High)</option>
                <option value="price_high_to_low">Price (High To Low)</option>
                <option value="newly_added">Newly Added</option>
              </select>
            </li>
            <li className="list-inline-item d-none">
              <span className="stts">Status:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setStatus(e.target.value)}
                value={getStatus}
              >
                <option value="">All Status</option>
                <option value="old">Old</option>
                <option value="recent">Recent</option>
              </select>
            </li>
            <li className="list-inline-item d-none">
              <span className="shrtby">Sort by:</span>
              <select
                className="selectpicker show-tick"
                onChange={(e) => setFeatured(e.target.value)}
                value={getFeatured}
              >
                <option value="">Featured All</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default FilterTopBar;
