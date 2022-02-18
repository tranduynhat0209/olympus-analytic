import {React, useState} from "react";
import {makeStyles} from "@mui/styles"
import { useSelector } from "react-redux";
import {Box, AppBar} from "@mui/material";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
const menuList = [
    {name: 'Overview', link: '/olympus/overview'},
    {name: 'Bonding', link: '/olympus/bond'},
    {name: 'Staking', link: '/olympus/stake'},
    {name: 'Ohmies', link: '/olympus/ohmies'},
    {name: 'Treasury', link: '/olympus/treasury'}
]
const useStyles = makeStyles(theme =>({
    root:{
        width: "240px",
        top: 0,
        left: 0,
        bottom: 0,
        alignSelf: 'stretch',
        display: 'flex',
        minHeight: '1500px'
    },
    box:{
        background: theme.palette.background.paper
    }
}));
export function Sidebar(){
    
    const navigate = useNavigate();
    const isDarkMode = useSelector(state => state.themeSlice.isDarkMode);
    const classes = useStyles({isDarkMode});
    const [currentMenu, setMenu] = useState(menuList.findIndex(e => e.link === window.location.pathname));
    return(
        <Box
        className={classes.root}
        >
            <AppBar
            position='sticky'
            className={classes.box}
            >
            <Logo isDarkMode={isDarkMode}/>
            {
                menuList.map((menu, index) =>
                <MenuItem 
                key={index}
                isChosen={index === currentMenu} menuName={menu.name} 
                handleClick={() =>{
                    setMenu(index)
                    navigate(menu.link)
                }}
                />    
                )
            }
            </AppBar>
        </Box>
    )
} 