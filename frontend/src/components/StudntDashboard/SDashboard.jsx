import React from 'react';
import ProjectCard from '../StudntDashboard/ProjectCard';
import { Box, Typography } from '@mui/material';
import styled from '@mui/material/styles/styled';

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

const projects = [
  {
    title: "E-commerce Website",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683798464819-d1376249293e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A full-fledged e-commerce website built with React and Node.js.",
  },
  {
    title: "Social Media App",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWElMjBhcHB8ZW58MHx8MHx8fDA%3D",
    description: "A social media platform where users can share posts and interact with each other.",
  },
  {
    title: "Online Learning Platform",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An online platform for learning various subjects through video lectures and quizzes.",
  },
  {
    title: "Task Management System",
    imageUrl: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A web-based application for managing tasks and projects within a team.",
  },
  {
    title: "Weather Forecasting App",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An app that provides real-time weather updates and forecasts based on user location.",
  },
  {
    title: "Job Search Portal",
    imageUrl: "https://images.unsplash.com/photo-1653566031504-17467a0429b0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A website where users can search for job openings and apply online.",
  },
  {
    title: "Health & Fitness App",
    imageUrl: "https://plus.unsplash.com/premium_photo-1712848346639-b8e9e2b2c8ed?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "An application to track daily exercises, diet, and overall health progress.",
  },
  {
    title: "Recipe Sharing App",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A social platform where users can discover, share, and save their favorite recipes.",
  },
];

function SDashboard() {
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
