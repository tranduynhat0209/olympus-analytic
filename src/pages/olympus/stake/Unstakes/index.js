import { Box, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import CustomizedTables from "../../../../components/Table"
import { timestampToFullHourDate } from "../../../../utlils/date"
import { round } from "../../../../utlils/math"

export default function UnStakes(){
    const fetchingStatus = useSelector(state=>state.unstakes.fetchingStatus)
    const unstakes = useSelector(state=>state.unstakes.unstakes)
    const heads = ["Time", "OHM Unstaked", "From"];
    
    let data;
    if(fetchingStatus==='fulfilled'){
        data = unstakes.map(unstake =>({
            "Time": timestampToFullHourDate(unstake.timestamp),
            "OHM Unstaked": round(unstake.amount),
            "From": unstake.transaction.from
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
                Unstake History
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