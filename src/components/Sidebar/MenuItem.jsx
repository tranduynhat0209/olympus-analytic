import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material';
import Home from '@mui/icons-material/Home';
import Money from '@mui/icons-material/Money';
import Paid from '@mui/icons-material/Paid';
import Person from '@mui/icons-material/Person';
import AccountBalance from '@mui/icons-material/AccountBalance';
const useStyles = makeStyles(theme =>({
    root:{
        width: '80%',
        display: 'flex',
        marginTop: '30px',
        padding: '10px',
        borderRadius: '10px',
        justifyContent: 'space-around',
        boxSizing: 'borderBox'
    },
    icon:{
        color: props =>
        props.isChosen?
        '#53B9EA':
        theme.palette.secondary.main,
        
    },
    name:{
        color: props =>
        props.isChosen?
        '#53B9EA':
        theme.palette.secondary.main,
        fontSize: '15px',
        fontWeight: 'bold'
    }
}))
export default function MenuItem({isChosen, menuName, handleClick}){
    const classes = useStyles({isChosen});
    const icons = {
        'Overview': <Home className={classes.icon}/>,
        'Bonding': <Money className={classes.icon}/>,
        'Staking': <Paid className={classes.icon}/>,
        'Ohmies': <Person className={classes.icon}/>,
        'Treasury': <AccountBalance className={classes.icon}/>,
    }
    return(
        <Box 
        onClick = {handleClick}
        className={classes.root}
        >
            {icons[menuName]}
            <Typography className={classes.name}
            sx={{fontWeight:'bold'}}
            >{menuName}</Typography>
        </Box>
    )
    
}