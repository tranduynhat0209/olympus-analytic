import { Box, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { BondDiscountsChart } from "./BondDiscountsChart"

export default function BondDiscounts(){
    const fetchingStatus = useSelector(state=>state.bondDiscounts.fetchingStatus)
    const bondDiscounts = useSelector(state=>state.bondDiscounts.bondDiscounts)
    let chartData;
    if(fetchingStatus === 'fulfilled'){
        chartData = {...bondDiscounts[0]}
        delete chartData.timestamp;
    }
    return fetchingStatus==='fulfilled' && (
        <Box
        sx={{width: '100%'}}
        >
            <Box sx={{
                margin: '20px'
            }}>
            <Typography variant="h4" color="primary">
                Bond Discounts
            </Typography>
            </Box>
            <BondDiscountsChart labels={Object.keys(chartData)} bondsData={Object.values(chartData)}/>
        </Box>
    )
}