import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Seo from "../../../components/common/seo";
import GridV1 from "../../../components/listing-grid/grid-v1";
import { addVehicleCategoriesToStroe, addVehiclesToStroe, vehicleFilterdData, vehicleSearchQuery } from "../../../features/vehicles/vehicleSlice";

const Index = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { vehicle_search_query } = useSelector(state => state.vehicles);
    const dispatch = useDispatch()

    const filterFunction = (ev) => {
        if (ev.min || ev.max) {
            dispatch(vehicleSearchQuery({ pricing: { min: ev.min, max: ev.max } }));
        }
        else if (ev.target.name === 'min') {
            dispatch(vehicleSearchQuery({ kilometer_min: { min: ev.target.value } }));
        }
        else if (ev.target.name === 'max') {
            dispatch(vehicleSearchQuery({ kilometer_max: { max: ev.target.value } }));
        }
        else if (!ev.min || !ev.max || ev.target.name !== 'min' || ev.target.name !== 'max') {

            dispatch(vehicleSearchQuery({ [ev.target.name]: ev.target.value }));
        }
    }

    useEffect(() => {
        if (data.message === "success") {
            const { vehilces, vehicle_categories } = data.data
            setIsLoading(true)
            dispatch(addVehiclesToStroe([vehilces]))
            dispatch(addVehicleCategoriesToStroe([vehicle_categories]))
        }
    }, [data])

    useEffect(() => {
        if (Object.keys(vehicle_search_query).length > 0) {
            fetch("http://localhost:3000/api/category/vehicles/with-filter", {
                method: "post",
                body: JSON.stringify(vehicle_search_query)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    dispatch(vehicleFilterdData(data))
                })
        }

    }, [vehicle_search_query])



    if (isLoading) {
        return (
            <>
                <Seo pageTitle="Simple Listing – Grid V1" />
                <h1>{isLoading}</h1>
                <GridV1 filterFunction={filterFunction} />
            </>
        );
    }
    return (
        <>
            Loading...
        </>
    )

};


export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/category/vehicles", { method: "get" })
    const data = await res.json()
    return {
        props: { data: data }, // will be passed to the page component as props
    }
}

export default dynamic(() => Promise.resolve(Index), { ssr: true });

