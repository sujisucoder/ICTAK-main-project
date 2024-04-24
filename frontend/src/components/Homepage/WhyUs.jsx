import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CustomButton from "../CustomBtn/CustomButton";
import whyUs from "../../assets/about-us.jpg";
import { styled } from '@mui/system';

function WhyUs() {

    const UsContainer = styled(Container)(({ theme }) => ({
        background: '#ffffff', 
        minHeight: "60vh", 
        display:'flex', 
        alignItems:'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const WhyImg = styled("img")(({ theme }) => ({
        width:"80vh",
        height:'auto', 
        [theme.breakpoints.down("md")]: {
        width:"50vh",
        height:'auto'
        },
    }));
 

  return (
    <Box sx={{  }}>
        <UsContainer
        sx={{display:'flex'}}
        >
        <Box sx={{mx:'40px',my:'40px',borderRadius: '8px'}}>
        <WhyImg  src={whyUs} alt="whyus"  />
        </Box>
        <Box sx={{padding:"30px"}} >
        <Typography
        variant='h4'
        >
        Why ICTAK ?
        </Typography>
        <Typography
        sx={{
            fontSize: "18px",
            color: "#687690",
            fontWeight: "500",
            mt: 4,
            mb: 2,
        }}
        >
        We empower people and organisations with tech-led education that helps them transform and makes them future-ready. We have designed a phygital platform that layers digital technology over physical assets. Our variety of solutions reimagines and transforms all key processes.
        </Typography>
        <CustomButton
         backgroundColor="#00bbf0"
         color="#fff"
         buttonText="Subscribe"
         welcomeBtn={true}
        />
        </Box>
        </UsContainer>  
    </Box>
  )
}

export default WhyUs
