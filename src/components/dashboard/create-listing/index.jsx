
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
import { useEffect } from "react";
import { getSession } from "next-auth/client"


const Index = () => {
  const { categories, sub_categories } = useSelector(state => state.product.product_categories)
  const [subcategories, setChildCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [conditionalFields, setConditionalFields] = useState({});
  const [sub_category_types, setSubCategory] = useState([]);
  const [PostData, setPostData] = useState({})
  const [created, setIsCreated] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])
  useEffect(() => {
    if(created){
      setPostData({})
      window.scrollTo(0, 0)
    }
  }, [])

  const handleFormData = (event, field_name) => {
    if (field_name === "main_category") {
      setChildCategory(
        sub_categories?.filter(item => item.parent_category_id === event.target.value)
      )
      setConditionalFields({
        "main_category": event.target.options[event.target.options.selectedIndex].id
      })
      setPostData(prevState => {
        return {
          ...prevState,
          slug: event.target.options[event.target.options.selectedIndex].id
        }
      })
    }

    if (field_name === "sub_category") {
      setSubCategory(
        sub_categories?.filter(item => item._id === event.target.value)
      )
      setConditionalFields({
        "sub_category": event.target.options[event.target.options.selectedIndex].id
      })
    }
    if (field_name === "sub_category_types") {
      // setSubCategory(
      //   sub_categories?.filter(item => item._id === event.target.value)
      // )
      // dispatch(setSearchFilters({[event.target.id]:event.target.options[1].id}))
    }

    if (field_name === "amenties" && PostData.amenties === undefined) {
      setPostData(prevState => {
        return {
          ...prevState,
          amenties: [event.target.value.toLowerCase()]
        }
      })
    }
    else if (field_name === "amenties" && PostData.amenties !== undefined) {
      setPostData(prevState => {
        return {
          ...prevState,
          amenties: [...PostData.amenties, event.target.value.toLowerCase()]
        }
      })
    }

    if (field_name === "neighbourhood" && PostData.neighbourhood === undefined) {
      setPostData(prevState => {
        return {
          ...prevState,
          neighbourhood: [event.target.value.toLowerCase()]
        }
      })
    }
    else if (field_name === "neighbourhood" && PostData.neighbourhood !== undefined) {
      setPostData(prevState => {
        return {
          ...prevState,
          neighbourhood: [...PostData.neighbourhood, event.target.value.toLowerCase()]
        }
      })
    }

    if (field_name === "image_url" && PostData.media === undefined) {
      setPostData(prevState => {
        return {
          ...prevState,
          media: event.target.files
        }
      })
    }
    else if (field_name !== "main_category" && field_name !== "amenties" && field_name !== "neighbourhood") {

      setPostData(prevState => {
        return {
          ...prevState,
          [event.target.id]: event.target.value
        }
      })
    }


  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { user } = await getSession();
    const body = new FormData();
    Object.keys(PostData).forEach(item => {
      if (item === 'media') {
        for (let i = 0; i < PostData[item].length; i++) {
          body.append(i, PostData[item].item(i));
        }
      }
      else if (PostData[item] !== 'media') {
        body.append(item, PostData[item]);
      }
    })
    body.append("owner_id", user.name.id);

    const response = await fetch("http://localhost:3000/api/category/create-post", {
      method: "POST",
      body
    });

    const data = await response.json()
    if (data.message === "ok") {
      setIsCreated(true)
      event.target.reset()

      console.log(document.querySelector("body"))
    }
  }
  if (isLoading) {
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
                          <CreateList handleFormData={handleFormData} sub_categories={subcategories} sub_category_types={sub_category_types} categories={categories} conditionalFields={conditionalFields} />
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
  }
  return (
    <>Loading...</>
  )
};



export default Index;
