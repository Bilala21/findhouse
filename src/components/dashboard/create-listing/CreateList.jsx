import CheckBoxFilter from "../../common/CheckBoxFilter";
import static_data from "../../../../static_data"

const CreateList = ({ handleFormData, sub_categories, sub_category_types, categories, conditionalFields }) => {

  return (
    <>
      {/* category */}
      <div className="col-lg-6 col-xl-6 my_profile_setting_input ui_kit_select_search form-group">
        <select
          className="selectpicker form-select"
          data-live-search="true"
          data-width="100%"
          name="main_category"
          id="main_category"
          onChange={(event) => handleFormData(event, "main_category")}
        >
          <option data-tokens="">Select Product Category</option>
          {
            categories?.map(item => {
              return (
                <option value={item._id} key={item._id} id={item.slug}>{item.name}</option>
              )
            })
          }
        </select>
      </div>
      {/* endcategory */}

      {/* subcategory */}
      <div className="my_profile_setting_input ui_kit_select_search form-group col-lg-6 col-xl-6">
        <select
          className="selectpicker form-select"
          data-live-search="true"
          data-width="100%"
          id="parent_category_id"
          name="parent_category_id"
          onChange={(event) => handleFormData(event, "sub_category")}
        >
          <option data-tokens="">Select Product Sub Category</option>
          {
            sub_categories?.map(item => <option value={item._id} id={item.slug} key={item._id}>{item.name}</option>)
          }

        </select>
      </div>
      {/* endsubcategory */}
      {
        sub_categories.length > 0 &&
        <>

          {/* Property Title */}
          <div className="my_profile_setting_input form-group col-lg-12">
            <input type="text" className="form-control" id="title" name="title" placeholder="Property Title" onChange={(event) => handleFormData(event, "title")} />
          </div>
          {/* endProperty Title */}

          {/* Description */}
          <div className="my_profile_setting_textarea col-lg-12">
            <textarea
              className="form-control"
              id="description"
              rows="7"
              name="description"
              onChange={(event) => handleFormData(event, "description")}
              placeholder="Product description here"
            ></textarea>
          </div>
          {/*end Description */}

          {/*country */}
          <div className="my_profile_setting_input form-group col-4">
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              placeholder="Country"
              onChange={(event) => handleFormData(event, "country")}
            />
          </div>
          {/*end country */}

          {/*end city */}
          <div className="my_profile_setting_input form-group col-4">
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              placeholder="City"
              onChange={(event) => handleFormData(event, "city")}
            />
          </div>
          {/*end city */}

          {/*Property type */}
          {
            conditionalFields.sub_category !== "land-for-sale" &&

            <div className="my_profile_setting_input ui_kit_select_search form-group col-xl-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="property_type"
                id="property_type"
                onChange={(event) => handleFormData(event, "property_type")}
              >
                <option data-tokens="">Select Property Type</option>
                {
                  sub_category_types?.length && sub_category_types[0].sub_types?.map(item => {
                    return (
                      <option value={item._id} key={item._id} id={item.slug}>{item.name}</option>
                    )
                  })
                }
              </select>
            </div>
          }

          {/*endProperty type */}

          {/*Occupancy Status */}
          {
            conditionalFields.sub_category !== "land-for-sale"
            && conditionalFields.sub_category !== "residential-for-rent"
            && conditionalFields.sub_category !== "commerceial-for-rent"
            && conditionalFields.sub_category !== "short-term-rent"
            && conditionalFields.sub_category !== "flatmate"
            && conditionalFields.sub_category !== "used-cars"
            &&

            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="occupancy_status"
                id="occupancy_status"
                onChange={(event) => handleFormData(event, "occupancy_status")}
              >
                <option value={""}>Select Occupancy Status</option>
                <option value={"vacant"}>Vacant</option>
                <option value={"occupied"}>Occupied</option>
              </select>
            </div>
          }
          {/*Occupancy Status */}

          {/*Furnished Unfurnished */}
          {
            conditionalFields.sub_category !== "land-for-sale" &&
            conditionalFields.sub_category !== "commercial-for-sale" &&
            conditionalFields.sub_category !== "residential-for-sale" &&
            conditionalFields.sub_category !== "short-term-rent" &&
            conditionalFields.sub_category !== "flatmate" &&
            conditionalFields.sub_category !== "used-cars"
            &&

            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="furnished_unfurnished"
                id="furnished_unfurnished"
                onChange={(event) => handleFormData(event, "furnished_unfurnished")}
              >
                <option value={""}>Select Furnished Unfurnished</option>
                <option value={"furnished"}>Furnished</option>
                <option value={"unfurnished"}>Unfurnished</option>
              </select>
            </div>
          }
          {/*Furnished Unfurnished */}

          {/*Condition */}
          <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="condition"
              id="condition"
              onChange={(event) => handleFormData(event, "condition")}
            >
              <option value={""}>Select Condition</option>
              <option value={"new"}>New</option>
              <option value={"used"}>Used</option>
            </select>
          </div>
          {/*Condition */}

          {/*Bedrooms */}
          {
            conditionalFields.sub_category !== "commercial-for-sale" &&
            conditionalFields.sub_category !== "land-for-sale" &&
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bedrooms"
                id="bedrooms"
                onChange={(event) => handleFormData(event, "bedrooms")}
              >
                <option value="">Select Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          }
          {/*Bedrooms */}

          {/*Bedrooms */}
          {
            conditionalFields.sub_category !== "commercial-for-sale" &&
            conditionalFields.sub_category !== "commercial-for-rent" &&
            conditionalFields.sub_category !== "land-for-sale" &&
            conditionalFields.sub_category !== "flatmate" &&
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bathrooms"
                id="bathrooms"
                onChange={(event) => handleFormData(event, "bathrooms")}
              >
                <option value="">Select Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          }
          {/*Bedrooms */}

          {/*Freehold */}
          {
            conditionalFields.sub_category !== "commercial-for-rent" &&
            conditionalFields.sub_category !== "residential-for-rent" &&
            conditionalFields.sub_category !== "flatmate" &&
            conditionalFields.sub_category !== "short-term-rent" &&
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="freehold"
                id="freehold"
                onChange={(event) => handleFormData(event, "freehold")}
              >
                <option value={""}>Select Freehold</option>
                <option value={"1"}>Yes</option>
                <option value={"0"}>No</option>
              </select>
            </div>
          }
          {/*Freehold */}

          {/*Seller Type */}
          {
            conditionalFields.sub_category !== "commercial-for-sale" &&
            conditionalFields.sub_category !== "residential-for-rent" &&
            conditionalFields.sub_category !== "land-for-rent" &&
            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="seller_type"
                id="seller_type"
                onChange={(event) => handleFormData(event, "seller_type")}
              >
                <option value={""}>Select Seller type</option>
                <option value={"owner"}>Owner</option>
                <option value={"agent"}>Agent</option>
              </select>
            </div>
          }
          {/*Seller Type */}

          {/*Seller Type */}
          {
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input ui_kit_select_search form-group col-4">
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="zoned_for"
                id="zoned_for"
                onChange={(event) => handleFormData(event, "zoned_for")}
              >
                <option value={""}>Select Zoned for</option>
                <option value={"zoneda"}>Zoned A</option>
                <option value={"zonedb"}>Zoned B</option>
              </select>
            </div>
          }
          {/*Seller Type */}

          {/*Pricing */}
          {
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="number"
                className="form-control"
                id="pricing"
                name="pricing"
                placeholder="Pricing"
                onChange={(event) => handleFormData(event, "Pricing")}
              />
            </div>
          }
          {/*Pricing */}

          {/*Maintenance fees */}
          {

            (
              conditionalFields.sub_category === "commercial-for-sale" ||
              conditionalFields.sub_category === "residential-for-sale" ||
              conditionalFields.sub_category === "land-for-sale"
            ) &&
            <>
              <div className="my_profile_setting_input form-group col-4">
                <input
                  type="number"
                  className="form-control"
                  id="maintenance_fees"
                  name="maintenance_fees"
                  placeholder="Maintenance fees"
                  onChange={(event) => handleFormData(event, "maintenance_fees")}
                />
              </div>
              <div className="my_profile_setting_input form-group col-4">
                <input
                  type="number"
                  className="form-control"
                  id="seller_transfer_fees"
                  name="seller_transfer_fees"
                  placeholder="Seller transfer fees"
                  onChange={(event) => handleFormData(event, "seller_transfer_fees")}
                />
              </div>
              <div className="my_profile_setting_input form-group col-4">
                <input
                  type="number"
                  className="form-control"
                  id="buyer_transfer_fees"
                  name="buyer_transfer_fees"
                  placeholder="Buyer transfer fees"
                  onChange={(event) => handleFormData(event, "buyer_transfer_fees")}
                />
              </div>
            </>
          }
          {/*Maintenance fees */}

          {/*community_fees */}
          {
            (
              conditionalFields.sub_category === "commercial-for-sale" ||
              conditionalFields.sub_category === "residential-for-sale"
            ) &&
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="number"
                className="form-control"
                id="community_fees"
                name="community_fees"
                placeholder="Community fees"
                onChange={(event) => handleFormData(event, "community_fees")}
              />
            </div>
          }
          {/*community_fees */}

          {/*Size Sq Ft */}
          {
            (
              conditionalFields.sub_category !== "flatmate" &&
              conditionalFields.sub_category !== "motorcycles" &&
              conditionalFields.sub_category !== "heavy-vehicles" &&
              conditionalFields.sub_category !== "used-cars"
            )
            &&
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="number"
                className="form-control"
                id="size"
                name="size"
                placeholder="Size Sq Ft"
                onChange={(event) => handleFormData(event, "size")}
              />
            </div>
          }
          {/*Size Sq Ft */}

          {/*Developer */}
          {
            (
              conditionalFields.sub_category === "commercial-for-sale" ||
              conditionalFields.sub_category === "residential-for-sale" ||
              conditionalFields.sub_category === "land-for-sale"
            ) &&
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="text"
                className="form-control"
                id="developer"
                name="developer"
                placeholder="Developer"
                onChange={(event) => handleFormData(event, "developer")}
              />
            </div>
          }
          {/*Developer */}

          {/*Property Reference */}
          {
            conditionalFields.sub_category !== "heavy-vehicles" &&
            conditionalFields.sub_category !== "motorcycles" &&
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="text"
                className="form-control"
                id="property_reference"
                name="property_reference"
                placeholder="Property Reference"
                onChange={(event) => handleFormData(event, "property_reference")}
              />
            </div>
          }
          {/*Property Reference */}

          {/*Real estate agent */}
          {
            conditionalFields.sub_category !== "heavy-vehicles" &&
            conditionalFields.sub_category !== "motorcycles" &&
            conditionalFields.sub_category !== "used-cars" &&
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="text"
                className="form-control"
                id="real_estate_agent"
                name="real_estate_agent"
                placeholder="Real estate agent"
                onChange={(event) => handleFormData(event, "real_estate_agent")}
              />
            </div>
          }
          {/*Real estate agent */}

          {/*Quantity */}
          {
            <div className="my_profile_setting_input form-group col-4">
              <input
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                onChange={(event) => handleFormData(event, "quantity")}
              />
            </div>
          }
          {/*Quantity */}

          {/*location */}
          {
            <div className="my_profile_setting_input form-group">
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                placeholder="Location"
                onChange={(event) => handleFormData(event, "location")}
              />
            </div>
          }
          {/*location */}

          {/*Video link */}
          <div className="my_profile_setting_input form-group">
            <input
              type="text"
              className="form-control"
              id="video_link"
              name="video_link"
              placeholder="Video link"
              onChange={(event) => handleFormData(event, "video_link")}
            />
          </div>
          {/*Video link */}

          {/*Image link */}
          {
            <div className="my_profile_setting_input form-group">
              <input
                type="file"
                className="form-control"
                id="image_url"
                name="image_url"
                placeholder="Image link"
                multiple
                onChange={(event) => handleFormData(event, "image_url")}
              />
            </div>
          }
          {/*Image link */}
          {
            conditionalFields.sub_category !== "heavy-vehicles" &&
            conditionalFields.sub_category !== "motorcycles" &&
            conditionalFields.sub_category !== "used-cars" &&

            <>
              <div className="w-100">
                <h4 className="mb10">Amenities</h4>
              </div>
              <CheckBoxFilter handleFormData={handleFormData} />
            </>
          }
          {
            <div className="w-100 mb-5">
              <h4 className="mb10">Neighourhood</h4>
              <ul className="row m-0">
                {
                  static_data[0].neighbourhood.map(item => {
                    return (
                      <li className="col-3" key={item}>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={item}
                            name="neighbourhood"
                            value={item}
                            onChange={(event) => handleFormData(event, "neighbourhood")}
                          />
                          <label className="form-check-label" htmlFor="customCheck2">
                            {item}
                          </label>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          }

          {/*buttons */}
          <div className="my_profile_setting_input">
            <button type="button" className="btn btn1 float-start">Cancel</button>
            <button type="submit" className="btn btn2 float-end">Submit</button>
          </div>
          {/*buttons */}
        </>
      }

    </>
  )

};

export default CreateList;
