import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchStakes } from "../../../store/olympus/stakes-slice";
import { fetchUnstakes } from "../../../store/olympus/unstakes-slice";
import Stakes from "./Stakes";
import UnStakes from "./Unstakes";
const useStyles = makeStyles(theme =>({
    root:{
        width: '100%'
    },
    head:{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        alignItems: 'center'
    }
}));
export default function Stake(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchStakes());
        dispatch(fetchUnstakes());
    })
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            
            <Box className={classes.head}>
                <Typography variant="h6" color="primary">
                    Staking Analytic
                </Typography>
            </Box>
            <Stakes/>
            <UnStakes/>
        </Box>
    )
}