import React from "react"
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { round } from "../../../../utlils/math";
const useStyles = makeStyles(theme =>({
    root:{
        border: props =>
        props.isDarkMode ?
        '0.910004px solid #312F62': 
        '0.909977px solid #E2E2E8',
        borderRadius: '9.09977px',
        
        background: theme.palette.background.paper
    },
    item:{
        

        
        padding: '20px',
        alignItems:'center',
        boxSizing: 'border-box',
        
    }
}));
export default function Overview({isDarkMode, metric}){
    const classes = useStyles({isDarkMode});
    return (
        <Grid container className={classes.root}
        rowSpacing={2} columnSpacing={2}
        sx={{
            margin: '10px', 
        width: '95%',
        }}
        >
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
                <Typography variant="body1" color="secondary">Total Value Locked</Typography>
                <Typography variant="h6" color="primary">{round(metric.totalValueLocked)+'$'}</Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
                <Typography variant="body1" color="secondary">Market Cap</Typography>
                <Typography variant="h6" color="primary">{round(metric.marketCap)+'$'}</Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
                <Typography variant="body1" color="secondary">OHM Price</Typography>
                <Typography variant="h6" color="primary">{round(metric.ohmPrice) + '$'}</Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
            <Typography variant="body1" color="secondary">Current APY</Typography>
                <Typography variant="h6" color="primary">{round(metric.currentAPY)}</Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
            <Typography variant="body1" color="secondary">OHM Circulating/Total Supply</Typography>
                <Typography variant="h6" color="primary">{round(metric.ohmCirculatingSupply)+' / '+ round(metric.totalSupply)}</Typography>
            </Grid>
            <Grid item xs={12} sm ={6} md={4} className={classes.item}>
            <Typography variant="body1" color="secondary">sOHM Circulating Supply</Typography>
                <Typography variant="h6" color="primary">{round(metric.sOhmCirculatingSupply)}</Typography>
            </Grid>
        </Grid>
    )
}