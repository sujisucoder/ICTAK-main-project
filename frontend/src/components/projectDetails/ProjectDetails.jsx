import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Card, CardContent, Box, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/student/project-details/${id}`);
        setProject(response.data.project);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">Project Details</Typography>
      </Grid>
      {project && (
        <>
          <Grid item xs={12} md={6}>
            <Card>
              <Box sx={{ p: 2 }}>
                <img src={project.imageUrl} alt="Project" style={{ width: '100%' }} />
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" align="center">Comments</Typography>
                <Box sx={{ display: 'flex' }}>
                  <TextField sx={{ flex: '70%' }} label="Your Comment" variant="outlined" margin="normal" />
                  <Button sx={{ flex: '30%', backgroundColor: '#00bbf0', color: '#fff' }}>Submit</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Project Summary</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.summary}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Project Overview</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.overview}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Technologies Used</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.technologies}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Team Size</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.teamSize}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Duration</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{project.duration}</Typography>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProductDetails;
