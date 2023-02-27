import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import category_data from "../../../../static_data"
import { useState } from "react";
import axios from "axios";

const Index = () => {
    const [subCate, setSubCate] = useState([]);
    const [subTypes, setTypes] = useState([]);
    const [formData, serFormData] = useState();
    const { main_categories, sub_categories, sub_types } = category_data[0]

    const handleChange = async (event) => {
        if (event.target.id === "main_category") {

            // const posts = await axios.post("http://localhost:3000/api/category", {
            //     body:{[event.target.name]:event.target.value}
            // })
            // console.log(posts)
        }
        serFormData(prevState => {
            return { ...prevState, [event.target.id]: event.target.value }
        })
        if (event.target.value === "Property for sale") {
            const { property_for_sale } = sub_categories[0];
            setSubCate(property_for_sale)
        }
        else if (event.target.value === "Property for rent") {
            const { property_for_rent } = sub_categories[0];
            setSubCate(property_for_rent)
        }
    }

    const handleFormSubmission =async (event) => {
        event.preventDefault();
        const res = await fetch('http://localhost:3000/api/category',{
            method:"post",
            formData
        })
        // const posts = await axios.post("http://localhost:3000/api/category", {
        //     body: formData,
        // })
        console.log(formData)
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
            <section className="our-dashbord dashbord bgc-f7 pb50 ">
                <div className="container-fluid ovh">
                    <div className="row">
                        <form onSubmit={handleFormSubmission} className="col-lg-8 maxw100flex-992 mx-auto">
                            {/* main category */}
                            <div className="d-block">
                                <div className="my_profile_setting_input ui_kit_select_search form-group">
                                    <label>Status</label>
                                    <select
                                        className="selectpicker form-select"
                                        data-live-search="true"
                                        data-width="100%"
                                        name="name"
                                        id="main_category"
                                        onChange={handleChange}
                                    >
                                        <option value={"null"}>Select main category</option>
                                        {
                                            main_categories.map(category => {
                                                return (
                                                    <option data-tokens="Status1" id={category.slug} value={category.type} key={category.slug}>{category.type}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            {/* sub category */}
                            <div className="d-block">
                                <div className="my_profile_setting_input ui_kit_select_search form-group">
                                    <label>Sub category</label>
                                    <select
                                        className="selectpicker form-select"
                                        data-live-search="true"
                                        data-width="100%"
                                        name="sub-category"
                                        id="sub_category"
                                        onChange={handleChange}
                                    >
                                        <option value={"null"}>Select sub category</option>
                                        {
                                            subCate?.map(subcategory => {
                                                return (
                                                    <option data-tokens="Status1" id={""} value={subcategory} key={subcategory}>{subcategory}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>


                            {/* types */}
                            <div className="d-block">
                                <div className="my_profile_setting_input ui_kit_select_search form-group">
                                    <label>Sub type</label>
                                    <select
                                        className="selectpicker form-select"
                                        data-live-search="true"
                                        data-width="100%"
                                        name="sub-type"
                                        id="sub_type"
                                        onChange={handleChange}
                                    >
                                        <option value={"null"}>Select product type</option>
                                        {
                                            subCate.length > 0 && sub_types?.map(subtypes => {
                                                return (
                                                    <option data-tokens="Status1" id={""} value={subtypes} key={subtypes}>{subtypes}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="my_profile_setting_input w-100">
                                <button type="submit" className="btn btn2 float-end w-100 text-uppercase">Add</button>
                            </div>
                        </form>
                        {/* End .col */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
