import PricingRangeSlider from "../../common/PricingRangeSlider";
import static_data from "../../../../static_data"

const SidebarListing = ({ sub_categories, category_name, filterFunction }) => {


  return (
    <ul className="sasw_list mb0">
      {/* keyword */}
      <li className="search_area">
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="keyword"
            name=""
          />
          <label>
            <span className="flaticon-magnifying-glass"></span>
          </label>
        </div>
      </li>
      {/* country */}
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="country"
              name="country"
              onChange={filterFunction}
            >
              <option value="">Country</option>
              {
                static_data[0].country_list?.map((item, index) => {
                  return (
                    <option value={item} key={item._id}>{item}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </li>
      {/* city */}
      <li>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="city"
              name="city"
              onChange={filterFunction}
            >
              <option value="">City</option>
              {
                static_data[0].city_list?.map((item, index) => {
                  return (
                    <option value={item} key={item}>{item}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </li>
      {/* category */}
      <li>
        <strong className="text-uppercase">filter by category</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="parent_category_id"
              name="parent_category_id"
              onChange={filterFunction}
            >
              <option value="">{category_name}</option>
              {
                sub_categories[0].map(item => {
                  return (
                    <option value={item._id} key={item._id}>{item.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </li>
      {/* maker */}
      <li>
        <strong>Product Maker</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="maker"
              name="maker"
              onChange={filterFunction}
            >
              <option value="">Select Maker</option>
              <option value="honda">Honda</option>
            </select>
          </div>
        </div>
      </li>

      {/* model */}
      <li>
        <strong>Model</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="model"
              name="model"
              onChange={filterFunction}
            >
              <option value="">Select Model</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
      </li>

      {/* Kilometers */}
      <li>
        <strong>Kilometers</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select d-flex justify-content-between">
            <input type="number" placeholder="MIN" name="min" id="min" className="kilometers" onChange={filterFunction}/>
            <input type="number" placeholder="MAX" name="max" id="max" className="kilometers" onChange={filterFunction}/>
          </div>
        </div>
      </li>

      {/* Transmission type */}
      <li>
        <strong>Transmission type</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="transmission_type"
              name="transmission_type"
              onChange={filterFunction}
            >
              <option value="">Select Transmisson</option>
              <option value="automatic transmission">Automatic Transmission</option>
              <option value="manual transmission">Manual Transmission</option>
            </select>
          </div>
        </div>
      </li>

      {/* Seller type */}
      <li>
        <strong>Seller type</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="seller_type"
              name="seller_type"
              onChange={filterFunction}
            >
              <option value="">Select Owner</option>
              <option value="owner">Owner</option>
              <option value="agent">Agent</option>
            </select>
          </div>
        </div>
      </li>

      {/* Year */}
      <li>
        <strong>Year</strong>
        <div className="search_option_two">
          <div className="candidate_revew_select">
            <select
              className="selectpicker w100 show-tick form-select"
              id="build_year"
              name="build_year"
              onChange={filterFunction}
            >
              <option value="">Select Build Year</option>
              <option value="2017-02-14T00:00:00.000+00:00">2017</option>
            </select>
          </div>
        </div>
      </li>


      {/* pricing */}
      <li>
        <div className="small_dropdown2">
          <div
            id="prncgs2"
            className="btn dd_btn"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="false"
          >
            <span>Price Range</span>
            <label htmlFor="prncgs2">
              <span className="fa fa-angle-down"></span>
            </label>
          </div>
          <div className="dd_content2 style2 dropdown-menu">
            <div className="pricing_acontent ">
              <PricingRangeSlider filterFunction={filterFunction}/>
            </div>
          </div>
        </div>
      </li>
      {
        category_name !== 'vehicles' && (
          <>
            {/* bathrooms */}
            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    id="bathrooms"
                    name="bathrooms"
                    onChange={filterFunction}
                    className="selectpicker w100 show-tick form-select"
                  >
                    <option value="">Bathrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
            </li>
            {/* bedrooms */}
            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    onChange={hadleFilter}
                    className="selectpicker w100 show-tick form-select"
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
              </div>
            </li>
            {/* area */}
            <li className="min_area list-inline-item">
              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputName2"
                  placeholder="Min Area"
                />
              </div>
            </li>
            <li className="max_area list-inline-item">
              <div className="form-group mb-4">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputName3"
                  placeholder="Max Area"
                />
              </div>
            </li>
            {/* amenties */}
            <li>
              <div className="search_option_two">
                <div className="candidate_revew_select">
                  <select
                    id="amenties"
                    name="amenties"
                    onChange={hadleFilter}
                    className="selectpicker w100 show-tick form-select"
                  >
                    <option value="">Amenties</option>
                    {
                      static_data[0].amenties?.map(item => {
                        return (
                          <option value={item}>{item}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>
            </li>
          </>
        )
      }

      <li>
        <div className="search_option_button">
          <button

            type="button"
            className="btn btn-block btn-thm w-100"
          >
            Clear Filters
          </button>
        </div>
      </li>
    </ul>
  );
};

export default SidebarListing;
