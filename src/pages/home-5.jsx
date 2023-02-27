import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Seo from "../components/common/seo";
import Home5 from "../components/home-5";
import { setCategories } from "../features/products/categorySlice";
import { setProducts } from "../features/products/productsSlice";

const Index = ({products}) => {
    const{categories,forsale,forrent}=products.data
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setCategories(categories))
      dispatch(setProducts({forsale,forrent}));
      return ()=>dispatch
    },[products])
    return (
      <>
        <Seo pageTitle="Home-5" />
        <Home5 />
      </>
    );
  
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });

export async function getStaticProps(context) {
  const product = await fetch('http://localhost:3000/api/products',{
    method:"get"
  })
  const products = await product.json()
  console.log(products,"werwer")

  return {
    props: {products},
  }
}
