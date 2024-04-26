import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Container } from "@mui/system";
import CustomButton from "../../components/CustomBtn/CustomButton";
import Welcome from "../../assets/slider-img.png";
import "./heroAnimation.css"

function Hero() {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
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

    const PhoneImg = styled("img")(({ theme }) => ({
        height:'60vh',
        width:'auto',
        animation: 'floating 3s ease-in-out infinite', 
        [theme.breakpoints.down("md")]: {
            height:'30vh',
            width:'auto',
        }
    }));

    return (
        <Box  sx={{ background: 'linear-gradient(90deg, #1c126c,#190e68, #06014b)', minHeight: "80vh" }}>
            <Container>
                <CustomBox>
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: "18px",
                                color: "#687690",
                                fontWeight: "500",
                                mt: 10,
                                mb: 4,
                            }}
                        >
                            Welcome to ICTAK Internship
                        </Typography>
                        <Title variant="h1">
                            Discover your future jobs
                        </Title>
                        <Typography
                            variant="body2"
                            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate corporis exercitationem doloremque dolorum est suscipit, quae facilis sequi, id sed laborum necessitatibus placeat animi libero cum. Pariatur, atque neque!
                        </Typography>
                        <CustomButton
                            backgroundColor="#00bbf0"
                            color="#fff"
                            buttonText="More About Us"
                            welcomeBtn={true}
                        />
                    </Box>
                    <Box  sx={{ flex: "1.25",padding:'40px', pl:'70px' }}>
                        <PhoneImg
                            src={Welcome}
                            alt="Hero img"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
}

export default Hero;
