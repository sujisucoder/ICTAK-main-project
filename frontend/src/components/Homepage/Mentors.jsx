import React from 'react';
import { styled } from '@mui/system';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const MainContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px', 
    textAlign: 'center', 
    [theme.breakpoints.down("md")]: {
        padding: '10px', 
    },
}));



const ProfileCard = styled(Box)(({ theme }) => ({
    width: '220px', 
    background: '#fff',
    padding: '30px',
    borderRadius: '10px', // Reduce border radius for smaller screens
    boxShadow: '0 0 22px #3336',
    // transition: '.6s',
    marginBottom: '20px', 
    [theme.breakpoints.down("md")]: {
        width: '180px',
    },
}));

const ProfileImage = styled(Box)({
  width: '100%',
  height: 'auto',
  '& img': {
    width: '100%',
    borderRadius: '50%',
    boxShadow: '0 0 22px #3336',
    transition: '.6s',
  },
});

const Caption = styled(Box)({
  textAlign: 'center',
  marginTop: '20px', // Add margin between image and text
  '& h3': {
    fontSize: '18px', // Adjust font size for smaller screens
    fontFamily: 'sans-serif',
    marginBottom: '5px', // Add margin between name and role
  },
  '& p': {
    fontSize: '14px', // Adjust font size for smaller screens
    color: '#0c52a1',
    fontFamily: 'sans-serif',
    margin: '0',
  },
  '& .social-links a': {
    color: '#333',
    marginRight: '15px',
    fontSize: '18px', // Adjust font size for smaller screens
    transition: '.6s',
    '&:hover': {
      color: '#0c52a1',
    },
  },
});


const teamMembers = [
    {
      name: "Vin Diesel",
      role: "Senior App Developer",
      imageUrl: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
    },
    {
      name: "David Corner",
      role: "Front End Developer",
      imageUrl: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
    },
    {
      name: "Tom Cruise",
      role: "Full Stack Developer",
      imageUrl: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"
    },
    {
      name: "John Doe",
      role: "UI/UX Designer",
      imageUrl: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg"
    }
  ];

  const CustomBox = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'center',
    [theme.breakpoints.down("md")]: {
       
    },
}));
  
const SocialLink = styled(Link)({
    color: '#333',
    marginRight: '15px',
    fontSize: '18px',
    transition: '.6s',
    '&:hover': {
      color: '#0c52a1',
    },
  });

const TeamMemberCard = ({ name, role, imageUrl }) => {
  return (
    <CustomBox >
          <ProfileCard >
       <ProfileImage>
        <img src={imageUrl} alt={name} />
      </ProfileImage> 
      <Caption>
         <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary">{role}</Typography>
        <div className="social-links">
            <SocialLink><FacebookIcon /></SocialLink>
            <SocialLink><InstagramIcon /></SocialLink>
            <SocialLink><TwitterIcon /></SocialLink>
        </div> 
      </Caption>
    </ProfileCard>
    </CustomBox>
  
  );
};

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "54px",
    color: "black",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
    }
}));

function Mentors() {
  return (
    <MainContainer>
        <Title variant='h3' sx={{padding: '30px'}} >Our Mentors</Title>
<Grid container spacing={{ xs: 2,sm:1, md: 3 }}>
  {teamMembers.map((member, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
    </Grid>
  ))}
</Grid>
      {/* <CustonGrid  container spacing={2}>
        <Grid   item xs={12} sm={6} md={3}>
          <TeamMemberCard  name="Vin Diesel" role="Senior App Developer" imageUrl="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamMemberCard name="David Corner" role="Front End Developer" imageUrl="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TeamMemberCard name="Tom Cruise" role="Full Stack Developer" imageUrl="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
           <TeamMemberCard name="John Doe" role="UI/UX Designer" imageUrl="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" />
        </Grid>
      </CustonGrid> */}
    </MainContainer>
  );
}

export default Mentors;
