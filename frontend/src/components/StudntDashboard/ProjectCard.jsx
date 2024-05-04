import React from 'react';
import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { blue, orange } from '@mui/material/colors';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RootCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 380,
  position: 'relative',
  zIndex: 1,
});



const CategoryDiv = styled('div')({
  backgroundColor: orange[500],
  width: 100,
  height: 30,
  color: 'white',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 16,
  letterSpacing: 1,
});

const BottomCardContent = styled(CardContent)({
  padding: '16px',
});

const AuthorDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const IntroTypography = styled(Typography)({
  width: '85%',
});

const InfoDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  color: '#999',
  fontSize: 14,
  marginTop: '8px',
});

const CommentIconButton = styled(IconButton)(({ theme }) => ({
  color: blue[500],
}));

const CommentCountTypography = styled(Typography)({
  cursor: 'pointer',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const NameTypography = styled(Typography)({
  cursor: 'pointer',
  fontWeight: 600,
  '& a': {
    fontWeight: 400,
    color: orange[500],
    textDecoration: 'none',
  },
});

function ProjectCard({ title, imageUrl, description, projectId }) {

  const history = useNavigate();

  const handleCardClick = () => {
    history.push(`/project-details/${projectId}`);
  };

    const TopDiv = styled(Box)({
        height: '30vh',
        width: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      });
      
  return ( 
    <RootCard onClick={handleCardClick}>
      <Link href={`/project-details/${projectId}`} color="inherit" underline="none">
      <TopDiv>
        <CategoryDiv>click here</CategoryDiv>
      </TopDiv>
      </Link>
      <BottomCardContent>
        <Typography variant="h5" component="h2">
          <Link href={`/project-details/${projectId}`} color="inherit" underline="none"><NameTypography>{title}</NameTypography></Link>
        </Typography>
        <AuthorDiv></AuthorDiv>
        <IntroTypography variant="body1">{description}</IntroTypography>
        <InfoDiv>
          <FavoriteBorderIcon />
          <Typography variant="body2">Like</Typography>
          <CommentIconButton>
            <CommentIcon />
          </CommentIconButton>
          <CommentCountTypography variant="body2"><Link href="#" color="primary">13 comments</Link></CommentCountTypography>
        </InfoDiv>
      </BottomCardContent>
    </RootCard>
  )
}

export default ProjectCard;
