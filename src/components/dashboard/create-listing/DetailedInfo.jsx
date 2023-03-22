import CheckBoxFilter from "../../common/CheckBoxFilter";

const DetailedInfo = ({handleFormData}) => {
 
  return (
    <div className="row">
      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyId">Property ID</label>
          <input type="text" className="form-control" id="propertyId" 
          name="propertyId"
           onChange={(event) => handleFormData(event, "propertyId")}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="propertyASize">Area Size</label>
          <input type="text" className="form-control" id="propertyASize" 
          name="propertyASize"
          onChange={(event) => handleFormData(event, "propertyASize")}/>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="sizePrefix">Size Prefix</label>
          <input type="text" className="form-control" id="sizePrefix" 
          name="sizePrefix"
          onChange={(event) => handleFormData(event, "sizePrefix")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="landArea">Land Area</label>
          <input type="text" className="form-control" id="landArea"
          name="landArea"
          onChange={(event) => handleFormData(event, "landArea")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="LASPostfix">Land Area Size Postfix</label>
          <input type="text" className="form-control" id="las_postfix" 
          name="las_postfix"
          onChange={(event) => handleFormData(event, "las_postfix")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bedRooms">Bedrooms</label>
          <input type="text" className="form-control" id="bedrooms" 
          name="bedrooms"
          onChange={(event) => handleFormData(event, "bedrooms")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="bathRooms">Bathrooms</label>
          <input type="text" className="form-control" id="bathrooms" 
          name="bathrooms"
          onChange={(event) => handleFormData(event, "bathrooms")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garages">Garages</label>
          <input type="text" className="form-control" id="garages" 
          name="garages"
          onChange={(event) => handleFormData(event, "garages")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="garagesSize">Garages Size</label>
          <input type="text" className="form-control" id="garagesSize" 
          name="garagesSize"
          onChange={(event) => handleFormData(event, "garagesSize")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="yearBuild">Year Built</label>
          <input type="text" className="form-control" id="yearBuild" 
          name="yearBuild"
          onChange={(event) => handleFormData(event, "yearBuild")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="videoUrl">Video URL</label>
          <input type="text" className="form-control" id="video_link"
          name="video_link" 
          onChange={(event) => handleFormData(event, "video_link")}
          />
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <div className="my_profile_setting_input form-group">
          <label htmlFor="virtualTour">360° Virtual Tour</label>
          <input type="text" className="form-control" id="virtual_tour" 
          name="virtual_tour"
          onChange={(event) => handleFormData(event, "virtual_tour")}
          />
        </div>
      </div>

      <div className="col-xl-12">
        <h4 className="mb10">Amenities</h4>
      </div>

      <CheckBoxFilter handleFormData={handleFormData}/>
      <div className="col-xl-12">
        <div className="my_profile_setting_input overflow-hidden mt20">
          <button className="btn btn1 float-start">Back</button>
          <button className="btn btn2 float-end">Next</button>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default DetailedInfo;
