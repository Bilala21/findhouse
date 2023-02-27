import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLength } from "../../../features/properties/propertiesSlice";
import properties from "../../../data/properties";

const FeaturedItem = () => {
  const { filterProducts } = useSelector(state => state.product)

    
  
  

  // const {
  //   keyword,
  //   location,
  //   status,
  //   propertyType,
  //   price,
  //   bathrooms,
  //   bedrooms, 
  //   garages,
  //   yearBuilt,
  //   area,
  //   amenities,
  // } = useSelector((state) => state.properties);
  // const { statusType, featured, isGridOrList } = useSelector(
  //   (state) => state.filter
  // );

  // const dispatch = useDispatch();

  // keyword filter
  // const keywordHandler = (item) =>
  //   item.title.toLowerCase().includes(keyword?.toLowerCase());

  // location handler
  // const locationHandler = (item) => {
  //   return item.location.toLowerCase().includes(location.toLowerCase());
  // };

  // status handler
  // const statusHandler = (item) =>
  //   item.type.toLowerCase().includes(status.toLowerCase());

  // properties handler
  // const propertiesHandler = (item) =>
  //   item.type.toLowerCase().includes(propertyType.toLowerCase());

  // price handler
  // const priceHandler = (item) =>
  //   item.price < price?.max && item.price > price?.min;

  // bathroom handler
  // const bathroomHandler = (item) => {
  //   if (bathrooms !== "") {
  //     return item.itemDetails[1].number == bathrooms;
  //   }
  //   return true;
  // };

  // bedroom handler
  // const bedroomHandler = (item) => {
  //   if (bedrooms !== "") {
  //     return item.itemDetails[0].number == bedrooms;
  //   }
  //   return true;
  // };

  // garages handler
  // const garagesHandler = (item) =>
  //   garages !== ""
  //     ? item.garages?.toLowerCase().includes(garages.toLowerCase())
  //     : true;

  // built years handler
  // const builtYearsHandler = (item) =>
  //   yearBuilt !== "" ? item?.built == yearBuilt : true;

  // area handler
  // const areaHandler = (item) => {
  //   if (area.min !== 0 && area.max !== 0) {
  //     if (area.min !== "" && area.max !== "") {
  //       return (
  //         parseInt(item.itemDetails[2].number) > area.min &&
  //         parseInt(item.itemDetails[2].number) < area.max
  //       );
  //     }
  //   }
  //   return true;
  // };

  // advanced option handler
  // const advanceHandler = (item) => {
  //   if (amenities.length !== 0) {
  //     return amenities.find((item2) =>
  //       item2.toLowerCase().includes(item.amenities.toLowerCase())
  //     );
  //   }
  //   return true;
  // };

  // status filter
  // const statusTypeHandler = (a, b) => {
  //   if (statusType === "recent") {
  //     return a.created_at + b.created_at;
  //   } else if (statusType === "old") {
  //     return a.created_at - b.created_at;
  //   } else if (statusType === "") {
  //     return a.created_at + b.created_at;
  //   }
  // };

  // featured handler
  // const featuredHandler = (item) => {
  //   if (featured !== "") {
  //     return item.featured === featured;
  //   }
  //   return true;
  // };

  // status handler
  // let content = properties
  //   ?.slice(0, 10)
  //   ?.filter(keywordHandler)
  //   ?.filter(locationHandler)
  //   ?.filter(statusHandler)
  //   ?.filter(propertiesHandler)
  //   ?.filter(priceHandler)
  //   ?.filter(bathroomHandler)
  //   ?.filter(bedroomHandler)
  //   ?.filter(garagesHandler)
  //   ?.filter(builtYearsHandler)
  //   ?.filter(areaHandler)
  //   ?.filter(advanceHandler)
  //   ?.sort(statusTypeHandler)
  //   ?.filter(featuredHandler)
  //   .map((item) => (

  //   ));

  // add length of filter items
  // useEffect(() => {
  //   dispatch(addLength(content.length));
  // }, [dispatch, addLength, content]);

  const { filterdProducts } = useSelector(state => state.product)
if(filterProducts[0]){
  const {products} = filterProducts[0]
  const prods = filterdProducts.length > 0 ?filterdProducts :products
  return <>
    {
      prods?.map(item => {
        return (
          <div className="col-12 feature-list col-md-6 col-lg-6" key={item._id}>
            <div className="feat_property home7 style4  align-items-center">
              <div className="thumb">
                <img className="img-whp" src="" alt="fp1.jpg" />
                <div className="thmb_cntnt">
                  <ul className="tag mb0">
                    <li className="list-inline-item">
                      <a href="#">Featured</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-capitalize">
                        For Sale
                      </a>
                    </li>
                  </ul>
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

                  <Link href="#">
                    <a className="fp_price">
                      ${item.pricing}
                      <small>/mo</small>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="details">
                <div className="tc_content">
                  <p className="text-thm">{item.property_type}</p>
                  <h4>
                    <Link href="#">
                      <a>{item.title}</a>
                    </Link>
                  </h4>
                  <p>
                    <span className="flaticon-placeholder"></span>
                    {"item.location"}
                  </p>

                  <ul className="prop_details mb0">
                    <li className="list-inline-item" >
                      <a href="#">
                        Bedrooms:{item.bedrooms} and  Bathrooms:{item.bedrooms}
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
                          <img src="#" alt="pposter1.png" />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/agent-v2">
                        <a>Bilal</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="fp_pdate float-end">{"item.postedYear"}</div>
                </div>
                {/* End .fp_footer */}
              </div>
            </div>
          </div>
        )
      })
    }
  </>;
}
};

export default FeaturedItem;
