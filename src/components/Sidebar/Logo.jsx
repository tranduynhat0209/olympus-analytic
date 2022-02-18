import { Typography } from "@mui/material";
import React from "react";

export default function Logo({isDarkMode}){
return(
    <Typography
    sx={{
        margin: '10px',
        marginTop: '30px',
        marginBottom: '100px',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '19px',
        color: 
        isDarkMode ? 'white':
        '#4C4C66'
    }}
    variant="h3"
    >
        0xNhatTranDuy
    </Typography>
)
}