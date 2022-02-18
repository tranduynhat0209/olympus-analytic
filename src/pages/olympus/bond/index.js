import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fetchTokens } from "../../../store/olympus/tokens-slice";
import TokenSelector from "../../../components/TokenSelector";
import { fetchDailyBonds } from "../../../store/olympus/daily-bonds-slice";
import DailyBonds from "./DailyBonds";
import BondDiscounts from "./BondDiscounts";
import { fetchBondDiscounts } from "../../../store/olympus/bond-discounts-slice";
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
export default function Bond(){
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchTokens())
        dispatch(fetchBondDiscounts())
    }, [])
    const classes = useStyles({})
    
    const tokens = useSelector(state=>state.tokens.tokens)
    const [token, setToken] = useState(tokens? tokens.length > 0 ? tokens[0]: '': '');
    
    useEffect(() =>{
        if(token !== '')
        dispatch(fetchDailyBonds(token))
    }, [token])
    
    const handleChange = (event) => {
      setToken(event.target.value);
    };
    return (
        <Box className={classes.root}>
            
            <Box className={classes.head}>
                <Typography variant="h6" color="primary">
                    Bonding Analytic
                </Typography>
                <TokenSelector tokens = {tokens} token={token} handleChange={handleChange}/>
            </Box>
            {
            token !== '' && <DailyBonds token={token}/>
            }
            <BondDiscounts/>
        </Box>
    )
}