import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Seo from "../components/common/seo";
import { setCategories } from "../features/products/categorySlice";
import { setProducts } from "../features/products/productsSlice";
import Home from "./home-5"

const Index = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data.message === "success") {
      setIsLoading(true)
      const { categories, forsale, forrent } = data.data
      dispatch(setCategories(categories))
      dispatch(setProducts({ forsale, forrent }));
    }
  }, [data])

  if (isLoading) {
    return (
      <>
        <Seo pageTitle="Home-1" />
        <Home />
      </>
    );
  }
  return (
    <>Loading...</>
  )
};


// export async function getServerSideProps(context) {
//   const res = await fetch("https://property-testing.staging-bk.site/api", { method: "get" })
//   const data = await res.json()
//   return {
//     props: { data: data }, // will be passed to the page component as props
//   }
// }
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api`, { method: "get" })
  const data = await res.json()
  return {
    props: { data: data }, // will be passed to the page component as props
  }
}

export default dynamic(() => Promise.resolve(Index), { ssr: true });

