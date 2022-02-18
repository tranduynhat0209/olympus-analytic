import { Box, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { timestampToFullDate } from "../../../../utlils/date"
import { round } from "../../../../utlils/math"
import { DailyBondsChart } from "./DailyBondChart"

export default function DailyBonds({token}){
    const fetchingStatus = useSelector(state=>state.dailyBonds.fetchingStatus)
    const dailyBonds = useSelector(state=>state.dailyBonds.dailyBonds)
    let data;
    if(dailyBonds){
        if(dailyBonds[token]){
            data = dailyBonds[token].map(db => ({
                'time': timestampToFullDate(db.timestamp),
                'amount':round(db.amount),
                'value': round(db.value)                
            }))
        }
    }
    return fetchingStatus==='fulfilled' && (
        <Box
        sx={{width: '100%'}}
        >
            <Box sx={{
                margin: '20px'
            }}>
            <Typography variant="h6" color="primary">
                Daily Bonds
            </Typography>
            </Box>
            {
            data &&   
            <Box sx={{width: '100%'}}>
            {/* <CustomizedTables heads={["Time", "Amount", "Value"]} fields={['time', 'amount', 'value']} rows={data}/> */}
            <DailyBondsChart timestamps={dailyBonds[token].map(db => db.timestamp)} bondsData={dailyBonds[token].map(db => db.amount)}
            token={token}
            />
            <DailyBondsChart timestamps={dailyBonds[token].map(db => db.timestamp)} bondsData={dailyBonds[token].map(db => db.value)}
            token="USD"
            />
            </Box> 
            }
        </Box>
    )
}