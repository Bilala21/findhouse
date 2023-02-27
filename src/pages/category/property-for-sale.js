import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Seo from "../../components/common/seo";
import GridV1 from "../../components/listing-grid/grid-v1";
import { setFilterProducts } from "../../features/products/productsSlice";
const index = ({ data }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setFilterProducts([data]))
    }, [data.products])
    if (data) {
        return (
            <>
                <Seo pageTitle="Simple Listing – Grid V1" />
                <GridV1 />
            </>
        );
    }
};

export default dynamic(() => Promise.resolve(index), { ssr: false });

export async function getStaticProps(context) {
    const product = await fetch(`http://localhost:3000/api/product-filter/property-for-sale`, {
        method: "post"
    })
    const { data } = await product.json()
    return {
        props: { data }
    }
}