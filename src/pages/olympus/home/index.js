import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box } from "@mui/material";
import { fetchProtocolMetrics } from "../../../store/olympus/protocol-metrics-slice";
import Overview from "./overview";
import { PriceChart } from "./price";


export default function Home(){
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchProtocolMetrics())
    }, [])
    const isDarkMode = useSelector(state=>state.themeSlice.isDarkMode)
    const metrics = useSelector(state=>state.protocolMetrics.protocolMetrics)
    const fetchingStatus = useSelector(state=>state.protocolMetrics.fetchingStatus)
    return fetchingStatus==='fulfilled' && metrics !== [] &&(
        <Box sx={{
            width:'100%'
        }}>
            <Overview isDarkMode={isDarkMode} metric={metrics[0]}/>
            <PriceChart 
            timestamps={metrics.map(metric => metric.timestamp).reverse()}
            prices={metrics.map(metric => metric.ohmPrice).reverse()}
            />
        </Box>
    )
}