import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'


function About({aboutRef}) {

    const CustomBox = styled(Box)(({ theme }) => ({

        display:'flex',
        flexDirection: "column",
        alignItems:'center',
        backgroundColor: '#00204a',
        width:'auto',
        height:'30vh',
        padding:'60px',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            height:'45vh',
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#fff",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        }
    }));

    return (
        <CustomBox ref={aboutRef}>
            <Title sx={{color:'white', fontSize:60}}  variant='h4'>About Us</Title>
            <Typography sx={{ color:'white',textAlign:'center'}} variant='body1'>ICTAK internship, a unit of ICTAK academy, is focussed on empowering people and organisations with tech-led solutions to transform educational and skill development domains for the new world. We use a uniquely built ‘phygital’ platform that connects the digital and physical worlds.</Typography>
        </CustomBox>
    )
}

export default About
