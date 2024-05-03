import React from 'react';
import  { useState, useEffect } from 'react';
import ProjectCard from '../StudntDashboard/ProjectCard';
import { Box, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';
import axios from 'axios';

const Title = styled(Typography)({
  paddingTop:'60px',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center', // Center align the title
});
const CardBox = styled(Box)({
  margin: '40px',
  display: "grid",
  gap: "10px",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Adjust column width
  padding: '30px'
});



function SDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/student/get-projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log("error getting projects", err);
      });
  }, []);

  return (
    <Box>
    <Title variant="h1">Student Dashboard</Title>
    <CardBox>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
        />
      ))}
    </CardBox>
  </Box>
  );
}

export default SDashboard;
