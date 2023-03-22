import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Seo from "../components/common/seo";
import { setCategories } from "../features/products/categorySlice";
import { setProducts } from "../features/products/productsSlice";
import Index from "./home-5"

const index = ({ data }) => {
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
        <Index />
      </>
    );
  }
  return (
    <>Loading...</>
  )
};


export async function getStaticProps(context) {
  const res = await fetch(`findehouse.staging-bk.site/api`, { method: "get" })
  const data = await res.json()
  return {
    props: { data: data }, // will be passed to the page component as props
  }
}
// export async function getStaticProps(context) {
//   const res = await fetch(`http://localhost:3000/api`, { method: "get" })
//   const data = await res.json()
//   return {
//     props: { data: data }, // will be passed to the page component as props
//   }
// }

export default dynamic(() => Promise.resolve(index), { ssr: true });

