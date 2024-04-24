import { Typography } from "@mui/material";
import { styled} from '@mui/system';
import { Box, Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import CustomButton from "../CustomBtn/CustomButton";

import React from "react";

function Footer() {

    const CustomContainer = styled(Container)(({theme}) => ({
        display: 'flex',
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: 'center'
        },
    }));

    const FooterLink = styled("span")(({theme}) => ({
        fontSize: "16px",
        color: "white",
        fontWeight: "300",
        cursor: "pointer",
        "&:hover": {
            color: "#6682FF",
        },
    }));

    const SubBox = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: "space-around",
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: 'center'
        },
    }));

  return (
    <Box sx={{py: 10, backgroundColor:"#00204a"}}>
      <CustomContainer>
        <Box>
           <Typography 
           sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "700",
            mb: 2,
           }}
           >
            Featured
            </Typography>
            <FooterLink>Courses</FooterLink> <br />
            <FooterLink>About</FooterLink> <br />
            <FooterLink>Contact</FooterLink> 
        </Box>
        <Box>
        <Typography 
           sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "700",
            mb: 2,
           }}
           >
            Address
            </Typography>
            <FooterLink>Location</FooterLink> <br />
            <FooterLink>Number</FooterLink> <br />
            <FooterLink>demo@gmail.com</FooterLink>
        </Box>
        <Box>
        <Typography 
           sx={{
            fontSize: "20px",
            color: "white",
            fontWeight: "700",
            mb: 2,
           }}
           >
            Contact Us
        </Typography>
        <SubBox >
        <TextField
          id="standard-search"
          label="Email"
          type="search"
          variant="filled"
          sx={{backgroundColor:"white"}}
        />
        <CustomButton 
              backgroundColor="#00bbf0"
              color="#fff"
              buttonText="Subscribe"
              welcomeBtn={true}
        />
        </SubBox>

        </Box>

      </CustomContainer>
    </Box >
  )
}

export default Footer
