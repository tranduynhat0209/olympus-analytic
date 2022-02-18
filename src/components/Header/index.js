import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react"
import ToggleButton from './ToggleButton'
import { Typography } from "@mui/material";
const useStyles = makeStyles(theme =>({
    root:{
        position: 'sticky',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: theme.palette.background.paper
    }
}));
export default function Header(){
    const classes = useStyles({});
    return(
        <Box className={classes.root}>
            <Typography variant="h3" color="primary">
                Olympus Analytic    
            </Typography>   
            <ToggleButton/>
        </Box>
        
    )
}