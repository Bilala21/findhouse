import Link from "next/link";
import { useSelector } from "react-redux";
import find from "../../data/find";

const LookingItem = () => {
  const { categories } = useSelector(state => state.category)

  if (categories) {
    return (
      <>
        {categories.map((category) => (
          <li className="list-inline-item" key={category._id}>
            <div className="icon_home5">
              <div className="icon">
                <Link href={"category/"+category.slug}>
                  <a>
                    {/* <span className={item.icon}></span> */}
                    <p>{category.name}</p>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </>
    );
  }
  else{
    return(
      <>
      loading
      </>
    )
  }
};

export default LookingItem;


