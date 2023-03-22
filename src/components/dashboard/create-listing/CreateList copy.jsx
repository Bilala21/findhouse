import CheckBoxFilter from "../../common/CheckBoxFilter";


const CreateList = ({ handleFormData, childcategory, child_category_types, main_category, conditionalFields }) => {
  console.log(conditionalFields, 'conditionalFields');

  if (main_category) {
    return (
      <>

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Select Product Category</label>
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
                main_category?.map(item => {
                  return (
                    <option value={item._id} key={item._id} id={item.slug}>{item.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Select Product Sub Category</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              id="parent_category_id"
              name="child_category"
              onChange={(event) => handleFormData(event, "child_category")}
            >
              <option data-tokens="">Select Product Sub Category</option>
              {
                childcategory?.map(item => <option value={item._id} id={item.slug} key={item._id}>{item.name}</option>)
              }

            </select>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="propertyTitle">Property Title</label>
            <input type="text" className="form-control" id="title" name="title" onChange={(event) => handleFormData(event, "title")} />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12">
          <div className="my_profile_setting_textarea">
            <label htmlFor="propertyDescription">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="7"
              name="description"
              onChange={(event) => handleFormData(event, "description")}
            ></textarea>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Property type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="property_type"
              id="property_type"
              onChange={(event) => handleFormData(event, "sub_category_types")}
            >
              <option data-tokens="">Select Product Category</option>
              {
                child_category_types?.length && child_category_types[0].sub_types?.map(item => {
                  return (
                    <option value={item._id} key={item._id} id={item.slug}>{item.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        {/* End .col */}

        <div className="col-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              onChange={(event) => handleFormData(event, "country")}
            />
          </div>
        </div>

        <div className="col-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              onChange={(event) => handleFormData(event, "city")}
            />
          </div>
        </div>
        {/* Occupancy Status */}
        {
          conditionalFields.child_category !== "land-for-sale" || conditionalFields.child_category !=="residential-for-rent" &&

          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Occupancy Status</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="occupancy_status"
                id="occupancy_status"
                onChange={(event) => handleFormData(event, "occupancy_status")}
              >
                <option value={""}>Occupancy Status</option>
                <option value={"vacant"}>Vacant</option>
                <option value={"occupied"}>Occupied</option>
              </select>
            </div>
          </div>
        }
        {/* End .col */}
        {/* furnished_unfurnished */}
        
        {
          conditionalFields.child_category !== "land-for-sale" || conditionalFields.child_category !=="residential-for-sale" &&

          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Furnished Unfurnished</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="furnished_unfurnished"
                id="furnished_unfurnished"
                onChange={(event) => handleFormData(event, "furnished_unfurnished")}
              >
                <option value={""}>Furnished Unfurnished</option>
                <option value={"furnished"}>Furnished</option>
                <option value={"unfurnished"}>Unfurnished</option>
              </select>
            </div>
          </div>
        }
        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Condition</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="condition"
              id="condition"
              onChange={(event) => handleFormData(event, "condition")}
            >
              <option value={""}>Condition</option>
              <option value={"new"}>New</option>
              <option value={"used"}>Used</option>
            </select>
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Neighourhood</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="neighourhood"
              id="neighourhood"
              onChange={(event) => handleFormData(event, "neighourhood")}
            >
              <option value={""}>Neighourhood</option>
              <option value={"pindi stop"}>Pindi Stop</option>
              <option value={"township"}>Township</option>
            </select>
          </div>
        </div>
        {/* End .col */}

        {/* End .col */}
        {
          conditionalFields.child_category !== "land-for-sale" &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Bedrooms</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bedrooms"
                id="bedrooms"
                onChange={(event) => handleFormData(event, "bedrooms")}
              >
                <option value="">Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        }
        {/* End .col */}
        {/* End .col */}

        {/* End .col */}
        {
          conditionalFields.child_category !== "land-for-sale" &&
          <div className="col-lg-6 col-xl-6">
            <div className="my_profile_setting_input ui_kit_select_search form-group">
              <label>Bathrooms</label>
              <select
                className="selectpicker form-select"
                data-live-search="true"
                data-width="100%"
                name="bathrooms"
                id="bathrooms"
                onChange={(event) => handleFormData(event, "bathrooms")}
              >
                <option value="">Bathrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        }
        {/* End .col */}

        {/* End .col */}
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Freehold</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="freehold"
              id="freehold"
              onChange={(event) => handleFormData(event, "freehold")}
            >
              <option value={""}>Freehold</option>
              <option value={"1"}>Yes</option>
              <option value={"0"}>No</option>
            </select>
          </div>
        </div>
        {/* End .col */}

        {/* End .col */}
        {/* sellet type */}
        {
          conditionalFields.child_category !=="residential-for-rent" &&
        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Seller Type</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="seller_type"
              id="seller_type"
              onChange={(event) => handleFormData(event, "seller_type")}
            >
              <option value={""}>Seller type</option>
              <option value={"owner"}>Owner</option>
              <option value={"agent"}>Agent</option>
            </select>
          </div>
        </div>
        }
        {/* End .col */}

        {/* End .col */}

        <div className="col-lg-6 col-xl-6">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Zoned for</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
              name="zoned_for"
              id="zoned_for"
              onChange={(event) => handleFormData(event, "zoned_for")}
            >
              <option value={""}>Zoned for</option>
              <option value={"zoneda"}>Zoned A</option>
              <option value={"zonedb"}>Zoned B</option>
            </select>
          </div>
        </div>
        {/* End .col */}

        <div className="col-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Pricing</label>
            <input
              type="number"
              className="form-control"
              id="pricing"
              name="pricing"
              onChange={(event) => handleFormData(event, "Pricing")}
            />
          </div>
        </div>
        {/* End .col */}
        {/* {"maintenance"} */}
        {
          conditionalFields.child_category !== "land-for-sale" || conditionalFields.child_category !=="residential-for-rent" &&
          <div className="col-lg-4 col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Maintenance fees</label>
              <input
                type="number"
                className="form-control"
                id="maintenance_fees"
                name="maintenance_fees"
                onChange={(event) => handleFormData(event, "maintenance_fees")}
              />
            </div>
          </div>
        }
        {/* End .col */}

        {/* {"seller fee"} */}
        {
          conditionalFields.child_category !=="residential-for-rent" &&
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Seller transfer fees</label>
            <input
              type="number"
              className="form-control"
              id="seller_transfer_fees"
              name="seller_transfer_fees"
              onChange={(event) => handleFormData(event, "seller_transfer_fees")}
            />
          </div>
        </div>
        }

        {/* End .col */}
        {/* {"buyer fee"} */}
        {
           conditionalFields.child_category !=="residential-for-rent" &&
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExamplePrice">Buyer transfer fees</label>
            <input
              type="number"
              className="form-control"
              id="buyer_transfer_fees"
              name="buyer_transfer_fees"
              onChange={(event) => handleFormData(event, "buyer_transfer_fees")}
            />
          </div>
        </div>
        }
        {/* End .col */}
        {/* "community_fees" */}
        {
          conditionalFields.child_category !== "land-for-sale" || conditionalFields.child_category !=="residential-for-rent" &&
          <div className="col-lg-4 col-xl-4">
            <div className="my_profile_setting_input form-group">
              <label htmlFor="formGroupExamplePrice">Community fees</label>
              <input
                type="number"
                className="form-control"
                id="community_fees"
                name="community_fees"
                onChange={(event) => handleFormData(event, "community_fees")}
              />
            </div>
          </div>
        }
        {/* End .col */}

        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Size Sq Ft</label>
            <input
              type="number"
              className="form-control"
              id="size"
              name="size"
              onChange={(event) => handleFormData(event, "size")}
            />
          </div>
        </div>

        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Developer</label>
            <input
              type="text"
              className="form-control"
              id="developer"
              name="developer"
              onChange={(event) => handleFormData(event, "developer")}
            />
          </div>
        </div>
        {/* str .col */}
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Property Reference</label>
            <input
              type="text"
              className="form-control"
              id="property_reference"
              name="property_reference"
              onChange={(event) => handleFormData(event, "property_reference")}
            />
          </div>
        </div>
        {/* End .col */}

        {/* str .col */}
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Real estate agent</label>
            <input
              type="text"
              className="form-control"
              id="real_estate_agent"
              name="real_estate_agent"
              onChange={(event) => handleFormData(event, "real_estate_agent")}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              onChange={(event) => handleFormData(event, "location")}
            />
          </div>
        </div>
        {/* End .col */}
        {/* str .col */}
        <div className="col-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              onChange={(event) => handleFormData(event, "quantity")}
            />
          </div>
        </div>
        {/* str .col */}
        <div className="col-6">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Video link</label>
            <input
              type="text"
              className="form-control"
              id="video_link"
              name="video_link"
              onChange={(event) => handleFormData(event, "video_link")}
            />
          </div>
        </div>
        {/* End .col */}
        {/* str .col */}
        <div className="col-12">
          <div className="my_profile_setting_input form-group">
            <label htmlFor="formGroupExampleArea">Image link</label>
            <input
              type="text"
              className="form-control"
              id="image_url"
              name="image_url"
              onChange={(event) => handleFormData(event, "image_url")}
            />
          </div>
        </div>
        {/* End .col */}

        {/* <div className="col-lg-4 col-xl-4">
          <div className="my_profile_setting_input ui_kit_select_search form-group">
            <label>Rooms</label>
            <select
              className="selectpicker form-select"
              data-live-search="true"
              data-width="100%"
            >
              <option data-tokens="Status1">1</option>
              <option data-tokens="Status2">2</option>
              <option data-tokens="Status3">3</option>
              <option data-tokens="Status4">4</option>
              <option data-tokens="Status5">5</option>
              <option data-tokens="Status6">Other</option>
            </select>
          </div>
        </div> */}
        {/* End .col */}
        {
          conditionalFields.child_category !== "land-for-sale" &&
          <>
            <div className="col-xl-12">
              <h4 className="mb10">Amenities</h4>
            </div>

            <CheckBoxFilter handleFormData={handleFormData} />
          </>
        }



        <div className="col-xl-12">
          <div className="my_profile_setting_input">
            <button type="button" className="btn btn1 float-start">Cancel</button>
            <button type="submit" className="btn btn2 float-end">Submit</button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>Loading...</>
  )
};

export default CreateList;
