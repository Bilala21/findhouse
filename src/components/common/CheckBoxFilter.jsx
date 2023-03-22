const CheckBoxFilter = ({handleFormData}) => {
 
  return (
    <>
      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck1"
                name="amenties"
                value={"Air Conditioning"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                Air Conditioning
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck2"
                name="amenties"
                value={"Lawn"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck2">
                Lawn
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck3"
                name="amenties"
                value={"Swimming Pool"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck3">
                Swimming Pool
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck4"
                name="amenties"
                value={"Barbeque"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck4">
                Barbeque
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck5"
                name="amenties"
                value={"Microwave"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck5">
                Microwave
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck6"
                name="amenties"
                value={"TV Cable"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck6">
                TV Cable
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck7"
                name="amenties"
                value={"Dryer"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck7">
                Dryer
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck8"
                name="amenties"
                value={"Outdoor Shower"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck8">
                Outdoor Shower
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck9"
                name="amenties"
                value={"Washer"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck9">
                Washer
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck10"
                name="amenties"
                value={"Gym"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck10">
                Gym
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck11"
                name="amenties"
                value={"Refrigerator"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck11">
                Refrigerator
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck12"
                name="amenties"
                value={"WiFi"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck12">
                WiFi
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}

      <div className="col-xxs-6 col-sm col-lg col-xl">
        <ul className="ui_kit_checkbox selectable-list">
          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck13"
                name="amenties"
                value={"Laundry"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck13">
                Laundry
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck14"
                name="amenties"
                value={"Sauna"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck14">
                Sauna
              </label>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="form-check custom-checkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheck15"
                name="amenties"
                value={"Window Coverings"}              
                onChange={(event) => handleFormData(event, "amenties")}
              />
              <label className="form-check-label" htmlFor="customCheck15">
                Window Coverings
              </label>
            </div>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .col */}
    </>
  );
};

export default CheckBoxFilter;
