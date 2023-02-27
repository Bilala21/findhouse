import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import properties from "../../data/properties";

const FeaturedProperties = () => {
  const { forsale, forrent } = useSelector(state => state.product.products)
  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 1200,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };
  if (forsale) {
    let saleproducts = forsale?.slice(0, 12)?.map((item) => (
      <div className="item" key={item._id}>
        <div className="feat_property">
          <div className="thumb">
            <img className="img-whp" src="" alt="fp1.jpg" />
            <div className="thmb_cntnt">
              <ul className="tag mb0">
                <li className="list-inline-item">
                  <a href="#">{"For Sale"}</a>
                </li>
              </ul>
              {/* End .tag */}

              <ul className="icon mb0">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-transfer-1"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="flaticon-heart"></span>
                  </a>
                </li>
              </ul>
              {/* End .icon */}

              <Link href={`/listing-details-v1/`}>
                <a className="fp_price">
                  ${item.pricing}
                  <small>/mo</small>
                </a>
              </Link>
            </div>
          </div>
          {/* End .thumb */}

          <div className="details">
            <div className="tc_content">
              <p className="text-thm">{item.property_type}</p>
              <h4>
                <Link href={`/listing-details-v1/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h4>
              <p>
                <span className="flaticon-placeholder"></span>
                {"location"}
              </p>

              <ul className="prop_details mb0">
                <li className="list-inline-item">
                  <a href="#">
                    Bedrooms:{item.bedrooms} and Bathrooms:{item.bathrooms}
                  </a>
                </li>
              </ul>
            </div>
            {/* End .tc_content */}

            <div className="fp_footer">
              <ul className="fp_meta float-start mb0">
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>
                      <img src="" alt="pposter1.png" />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/agent-v2">
                    <a>{"posterName"}</a>
                  </Link>
                </li>
              </ul>
              <div className="fp_pdate float-end">{"postedYear"}</div>
            </div>
            {/* End .fp_footer */}
          </div>
          {/* End .details */}
        </div>
      </div>
    ));
    let rentproducts = forrent?.slice(0, 12)?.map((item) => (
      <div className="item" key={item._id}>
      <div className="feat_property">
        <div className="thumb">
          <img className="img-whp" src="" alt="fp1.jpg" />
          <div className="thmb_cntnt">
            <ul className="tag mb0">
              <li className="list-inline-item">
                <a href="#">{"For Rent"}</a>
              </li>
            </ul>
            {/* End .tag */}

            <ul className="icon mb0">
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-transfer-1"></span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <span className="flaticon-heart"></span>
                </a>
              </li>
            </ul>
            {/* End .icon */}

            <Link href={`/listing-details-v1/`}>
              <a className="fp_price">
                ${item.pricing}
                <small>/mo</small>
              </a>
            </Link>
          </div>
        </div>
        {/* End .thumb */}

        <div className="details">
          <div className="tc_content">
            <p className="text-thm">{item.property_type}</p>
            <h4>
              <Link href={`/listing-details-v1/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </h4>
            <p>
              <span className="flaticon-placeholder"></span>
              {"location"}
            </p>

            <ul className="prop_details mb0">
              <li className="list-inline-item">
                <a href="#">
                  Bedrooms:{item.bedrooms} and Bathrooms:{item.bathrooms}
                </a>
              </li>
            </ul>
          </div>
          {/* End .tc_content */}

          <div className="fp_footer">
            <ul className="fp_meta float-start mb0">
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>
                    <img src="" alt="pposter1.png" />
                  </a>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="/agent-v2">
                  <a>{"posterName"}</a>
                </Link>
              </li>
            </ul>
            <div className="fp_pdate float-end">{"postedYear"}</div>
          </div>
          {/* End .fp_footer */}
        </div>
        {/* End .details */}
      </div>
    </div>
    ));

    return (
      <>
        <Slider {...settings} arrows={false}>
          {saleproducts}
        </Slider>
        <Slider {...settings} arrows={false}>
          {rentproducts}
        </Slider>
      </>
    );
  }

};

export default FeaturedProperties;
