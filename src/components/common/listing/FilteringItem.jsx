import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PricingRangeSlider from "../../common/PricingRangeSlider";
import { filterdProducts } from "../../../features/products/productsSlice";
import static_data from "../../../../static_data"
import { setSearchFilters } from "../../../features/filters/filterSlice";

const FilteringItem = () => {
  const dispath = useDispatch();
  const hadleFilter = (event) => {
    if (event.target.id === 'amenties') {
      if (searchFilter['amenties'] !== undefined) {
        dispath(setSearchFilters({ [event.target.id]: [...searchFilter['amenties'], event.target.value] }))
      }
      if (searchFilter['amenties'] === undefined) {
        dispath(setSearchFilters({ [event.target.id]: [event.target.value] }))
      }
    }
    else if (event.target.id !== 'amenties') {
      dispath(setSearchFilters({ [event.target.id]: event.target.value }))
    }
  }
  const { filterProducts } = useSelector(state => state.product)
  const { searchFilter } = useSelector(state => state.filter)

  useEffect(() => {
    if (Object.keys(searchFilter).length) {

      const products = filterProducts[0].products?.filter(function (item) {

        for (var key in searchFilter) {
          if (key !== "amenties") {
            if (item[key] === undefined || item[key] != searchFilter[key])
              return false;

          }
        }
        if (key === "amenties") {
          const rell = searchFilter[key].filter(arr1Item => !item[key].includes(arr1Item))
             console.log(rell,"rell");
          return rell;    
        }
        return true;
      });
      dispath(filterdProducts(products))
    }
  }, [dispath,filterProducts,searchFilter])
  // [dispath,searchFilter]

  // item[key].every(amenty=>searchFilter[key].includes('balcony'))

  if (filterProducts[0].products) {
    return (
      <ul className="sasw_list mb0">
        <li className="search_area">
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="keyword"
            />
            <label>
              <span className="flaticon-magnifying-glass"></span>
            </label>
          </div>
        </li>
        {/* End li */}

        {/* country */}
        <li>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 show-tick form-select"
                id="country"
                name="country"
                onChange={hadleFilter}
              >
                <option value="">Country</option>
                {
                  static_data[0].country_list?.map((item, index) => {
                    return (
                      <option value={item} key={"st1"+index}>{item}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </li>

        {/* city */}
        {/* End li */}
        <li>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 show-tick form-select"
                id="city"
                name="city"
                onChange={hadleFilter}
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
        {/* End li */}

        <li>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 show-tick form-select"
                id="parent_category_id"
                name="category"
                onChange={hadleFilter}
              >
                <option value="">Category Type</option>
                {
                  filterProducts[0].products.childcategory?.map(item => {
                    return (
                      <option value={item._id} key={item._id}>{item.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </li>

        {/* End li */}

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
                <PricingRangeSlider />
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

        <li>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                id="bathrooms"
                name="bathrooms"
                onChange={hadleFilter}
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
        {/* End li */}

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
        {/* End li */}


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
        {/* End li */}

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
        {/* End li */}

        <li className="d-none">
          <div id="accordion" className="panel-group">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a
                    href="#panelBodyRating"
                    className="accordion-toggle link"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                  >
                    <i className="flaticon-more"></i> Advanced features
                  </a>
                </h4>
              </div>
              {/* End .panel-heading */}

              <div id="panelBodyRating" className="panel-collapse collapse">
                <div className="panel-body row">
                  <div className="col-lg-12">
                    <ul className="ui_kit_checkbox selectable-list fn-400">
                      {/* {getAdvanced?.map((feature) => (
                        <li key={feature.id}>
                          <div className="form-check custom-checkbox">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={feature.id}
                              value={feature.name}
                              checked={feature.isChecked || false}
                              onChange={(e) =>
                                dispath(addAmenities(e.target.value))
                              }
                              onClick={() => advancedHandler(feature.id)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={feature.id}
                            >
                              {feature.name}
                            </label>
                          </div>
                        </li>
                      ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* End li */}

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
                      <option value={item} key={"n1"+item}>{item}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
        </li>
        {/* End li */}

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
        {/* End li */}
      </ul>
    );
  }
};

export default FilteringItem;
