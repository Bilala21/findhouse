
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilters } from "../../../features/filters/filterSlice";
import axios from "axios";


const Index = () => {
  useSelector(state => console.log(state.product.product_categories))
  const { categories, sub_categories } = useSelector(state => state.product.product_categories)
  console.log(sub_categories,"sub_categories");
  // const { searchFilter } = useSelector(state => state.filter)
  const [childcategory, setChildCategory] = useState([]);
  const [conditionalFields, setConditionalFields] = useState({});
  const [sub_category_types, setChildCategoryTypes] = useState([]);
  console.log(categories,"bilal");

  const dispatch = useDispatch()
  const handleFormData = (event, field_name) => {

    // if (field_name === "main_category") {
    //   setChildCategory(
    //     sub_categories?.filter(item => item.parent_category_id === event.target.value)
    //   )
    //   setConditionalFields({
    //     "main_category": event.target.options[event.target.options.selectedIndex].id
    //   })
    //   dispatch(setSearchFilters({ category_type: event.target.options[event.target.options.selectedIndex].id }))
    // }

    // if (field_name === "child_category") {
    //   setChildCategoryTypes(
    //     sub_categories?.filter(item => item._id === event.target.value)
    //   )
    //   setConditionalFields({
    //     "sub_category": event.target.options[event.target.options.selectedIndex].id
    //   })
    //   // dispatch(setSearchFilters({[event.target.id]:event.target.value}))
    // }
    // if (field_name === "sub_category_types") {
    //   setChildCategoryTypes(
    //     sub_categories?.filter(item => item._id === event.target.value)
    //   )
    //   dispatch(setSearchFilters({ [event.target.id]: event.target.options[1].id }))
    // }

    // if (field_name === "amenties" && searchFilter?.amenties === undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, amenties: [event.target.value] }))
    // }
    // else if (field_name === "amenties" && searchFilter?.amenties !== undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, amenties: [...searchFilter.amenties, event.target.value] }))
    // }

    // if (field_name === "neighourhood" && searchFilter?.neighbourdhood === undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, neighbourdhood: [event.target.value] }))
    // }
    // else if (field_name === "neighourhood" && searchFilter?.neighbourdhood !== undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, neighbourdhood: [...searchFilter.neighbourdhood, event.target.value] }))
    // }

    // if (field_name === "image_url" && searchFilter?.media === undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, media: [event.target.value] }))
    // }
    // else if (field_name === "image_url" && searchFilter?.media !== undefined) {
    //   dispatch(setSearchFilters({ ...searchFilter, media: [...searchFilter.media, event.target.value] }))
    // }

    // else if (field_name !== "main_category" && field_name !== "child_category" && field_name !== "amenties" && field_name !== "sub_category_types" && field_name !== "neighourhood") {
    //   dispatch(setSearchFilters({ [event.target.id]: event.target.value }))

    // }


  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post("http://localhost:3000/api/create-post", { searchFilter });
  }

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <form onSubmit={handleSubmit}>
          <div className="container-fluid ovh">
            <div className="row">
              <div className="col-lg-12 maxw100flex-992">
                <div className="row">
                  {/* Start Dashboard Navigation */}
                  <div className="col-lg-12">
                    <div className="dashboard_navigationbar dn db-1024">
                      <div className="dropdown">
                        <button
                          className="dropbtn"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#DashboardOffcanvasMenu"
                          aria-controls="DashboardOffcanvasMenu"
                        >
                          <i className="fa fa-bars pr10"></i> Dashboard Navigation
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Dashboard Navigation */}

                  <div className="col-lg-12 mb10">
                    <div className="breadcrumb_content style2">
                      <h2 className="breadcrumb_title">Add New Property</h2>
                      <p>We are glad to see you again!</p>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-lg-12">
                    <div className="my_dashboard_review">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="mb30">Create Listing</h3>
                        </div>
                        <CreateList handleFormData={handleFormData} categories={categories} sub_categories={sub_categories} sub_category_types={sub_category_types}  conditionalFields={conditionalFields} />
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30 d-none">
                      <div className="row">
                        <div className="col-lg-12">
                          <h3 className="mb30">Location</h3>
                        </div>

                        <LocationField handleFormData={handleFormData} />
                      </div>
                    </div>
                    <div className="my_dashboard_review mt30 d-none">
                      <div className="col-lg-12">
                        <h3 className="mb30">Detailed Information</h3>
                      </div>
                      {/* <DetailedInfo handleFormData={handleFormData}/> */}
                    </div>
                    <div className="my_dashboard_review mt30 d-none">
                      <div className="col-lg-12">
                        <h3 className="mb30">Property media</h3>
                      </div>
                      {/* <PropertyMediaUploader handleFormData={handleFormData}/> */}
                    </div>
                    <div className="my_dashboard_review mt30 d-none">
                      <div className="col-lg-12">
                        <h3 className="mb30">Floor Plans</h3>
                        <button className="btn admore_btn mb30">Add More</button>
                      </div>
                      {/* <FloorPlans handleFormData={handleFormData}/> */}
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                <div className="row mt50">
                  <div className="col-lg-12">
                    <div className="copyright-widget text-center">
                      <p>© 2020 Find House. Made with love.</p>
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </form>
      </section>
    </>
  );
};



export default Index;
