import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Seo from "../../components/common/seo";
import GridV1 from "../../components/listing-grid/grid-v1";
import { setFilterProducts } from "../../features/products/productsSlice";
const Index = ({ data }) => {

    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        if (data.message === "success") {
            setIsLoading(true)
            dispatch(setFilterProducts([data.data]))
        }
    }, [data])

    if (isLoading) {
        return (
            <>
                <Seo pageTitle="Simple Listing – Grid V1" />              
                <GridV1 />
            </>
        );
    }
};
export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/product-filter/property-for-sale`, { method: "get" })
    const data = await res.json()
    return {
        props: { data: data }, // will be passed to the page component as props
    }
}
export default dynamic(() => Promise.resolve(Index), { ssr: true });

