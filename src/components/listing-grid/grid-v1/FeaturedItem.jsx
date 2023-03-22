import Link from "next/link";
import { useSelector } from "react-redux";

const FeaturedItem = ({ vehicles_data, category_name,products}) => {
  function data(){
    if(products !== undefined){
      return products
    }
    return vehicles_data[0]
  }
  if (data().length > 0) {
    return <>
      {
        data().slice(0,4)?.map(item => {
          return (
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 feature-list" key={item._id}>
              <div className="feat_property home7 style4  align-items-center">
                <div className="thumb">
                  <img className="img-whp" src={item.media[0]} alt="fp1.jpg" />
                </div>
                <div className="details">
                  <div className="tc_content pt-0">
                    <h5 className="m-0">
                      <i class="fa fa-tags"></i>
                      <span className="ms-2">{category_name}</span>
                    </h5>
                    <hr></hr>
                    <h4 className="mb-0 mt-2">
                      <Link href="#">
                        <a className="#">Ask for Price...</a>
                      </Link>
                    </h4>
                    <p className="mb-0 mt-2">
                      <span className="flaticon-placeholder"></span>
                      <span className="ms-2">{item.location}</span>
                    </p>
                    <p className="mb-0 mt-2">
                      <span className="fa fa-clock-o"></span>
                      <span className="ms-2">9 hours ago</span>
                    </p>
                    <hr></hr>
                    <p className="d-flex justify-content-between align-items-center mb-0 mt-2">
                      <strong>
                        {
                          item.call_for_price ? ('Call for Price')
                            : (
                              <>
                                <strong className="me-2">ADE</strong>
                                <strong>
                                {item.pricing}
                                </strong>
                              </>
                            )
                        }
                      </strong>
                      <i className="fa fa-heart-o fs-4 cursor-pointer" title="Wishlist" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>;
  }
  return (
    <>
      <h1 className="text-danger text-center">Products not found</h1>
    </>
  )
};

export default FeaturedItem;
