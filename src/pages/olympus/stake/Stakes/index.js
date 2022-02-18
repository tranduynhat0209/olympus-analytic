import { Box, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import CustomizedTables from "../../../../components/Table"
import { timestampToFullHourDate } from "../../../../utlils/date"
import { round } from "../../../../utlils/math"

export default function Stakes(){
    const fetchingStatus = useSelector(state=>state.stakes.fetchingStatus)
    const stakes = useSelector(state=>state.stakes.stakes)
    const heads = ["Time", "OHM Staked", "From"];
    
    let data;
    if(fetchingStatus==='fulfilled'){
        data = stakes.map(stake =>({
            "Time": timestampToFullHourDate(stake.timestamp),
            "OHM Staked": round(stake.amount),
            "From": stake.transaction.from
        }));
    }
    return fetchingStatus==='fulfilled' && (
        <Box
        sx={{width: '100%'}}
        >
            <Box sx={{
                margin: '20px'
            }}>
            <Typography variant="h6" color="primary">
                Stake History
            </Typography>
            </Box>
            {
            <Box sx={{width: '100%'}}>
                <CustomizedTables heads={heads} rows={data} max={50}/>
            </Box> 
            }
        </Box>
    )
}