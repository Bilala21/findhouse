import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Seo from "../../components/common/seo";
import CreateListing from "../../components/dashboard/create-listing";
import { setCategories } from "../../features/products/categorySlice";
import { addProductCategoriesToStroe } from "../../services/productsSlice";

const Index = ({ data }) => {
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setLoading(true)
    dispatch(addProductCategoriesToStroe(data))
  }, [data])
  if (isLoading) {
    return (
      <>
        <Seo pageTitle="Create Listing" />
        <CreateListing />
      </>
    );
  }
  return(
    <>Loading...</>
  )
};
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/category/get-categores", {
    method: "get"
  })
  const data = (await res.json()).data

  return { props: { data } }
}
export default dynamic(() => Promise.resolve(Index), { ssr: false });



