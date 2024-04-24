import React, { useState } from 'react'
import {Box,  styled} from '@mui/material'
import CustomButton from '../CustomBtn/CustomButton'
import ICTlogo from '../../assets/ICT-internship.png';


import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import{
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'


function Navbar() {

    const [mobileMenu, setMobileMenu] = useState({left:false})

    const nav_titles = [
    {
        id:0,
        path:'/',
        display:'Home'
    },
    {
        id:1,
        path:'/',
        display:'Mentors'
    },
    {
        id:2,
        path:'/',
        display:'About'
    },
    {
        id:3,
        path:'/',
        display:'Contact'
    },
]

const toggleDrawer = (anchor,open)=>(event)=>{
    if(event.type === "keydown" && (event.type === "Tab" || event.type === 'shift')){
        return;
    }
    setMobileMenu({...mobileMenu,[anchor]:open})
}

const list = (anchor)=>(
    <Box sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250
    }}
    role="presentation"
    onClick= {toggleDrawer(anchor,false)}
    onKeyDown = {toggleDrawer(anchor,false)}
    >
        <List>
            {
                nav_titles.map((item,index)=>(
                    <ListItem key={item.id} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {
                                index === 0 && <HomeIcon/>
                            }
                            {
                                index === 1 && <FeaturedPlayListIcon/>
                            }
                            {
                                index === 2 && <MiscellaneousServicesIcon/>
                            }
                            {
                                index === 3 && <ContactsIcon/>
                            }
                        </ListItemIcon>
                        <ListItemText primary={item.display} />
                    </ListItemButton>
                </ListItem>
                ))
            }
            
        </List>

    </Box>
)

const NavbarLinkBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
        display:'none'
    }
}))

const NavbarLink = styled(Box)(({theme})=>({
    fontSize:"14px",
    color: 'white',
    fontWeight:'bold',
    cursor: 'pointer',
    '&:hover':{
        color:'#007bff'
    }
}))

const NavbarLogo = styled("img")(({theme})=>({
    cursor:'pointer',
    width: '100px', 
    height: 'auto',
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display:'none'
    }
}))

const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:'none',
    color:'white',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]:{
        display:'block'
    }
}))

  return (
    <Box 
        sx={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: "40px",
            maxWidth: 'auto',
            background: 'linear-gradient(130deg, #231a6f, #0f054c)',
            marginLeft: '0px',
            marginBottom: '-24px'
        }}
    >
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'2.5rem'
    }}
    >
    <Box sx={{
        display:'flex',
        alignItems:'center'
    }}>

        <CustomMenuIcon onClick={toggleDrawer("left",true)} />
        <Drawer
        anchor='left'
        open={mobileMenu["left"]}
        onClose={toggleDrawer("left",false)}
        >
            {list("left")}
        </Drawer>

        <NavbarLogo src={ICTlogo} alt="logo" />
    </Box>    

    </Box>        
       
        <Box  sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'1rem'
    }}
        >
        <NavbarLinkBox>
            {
                nav_titles.map((item,index)=>(
                    <NavbarLink key={item.id} variant="body2">{item.display}</NavbarLink>
                ))
            }
        </NavbarLinkBox>
        <NavbarLink variant="body2"></NavbarLink>
        <CustomButton 
            backgroundColor='#00bbf0'
            color='#fff'
            buttonText="Register"
        />
        </Box>
    </Box>
  )
}

export default Navbar
