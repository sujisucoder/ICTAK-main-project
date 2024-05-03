import React from 'react';
import { Grid, Typography, Card, CardContent, Box, TextField, Button, IconButton, Accordion, AccordionSummary, AccordionDetails, TextareaAutosize } from '@mui/material';
import { blue } from '@mui/material/colors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from '../CustomBtn/CustomButton'

const ProductDetails = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">Project Details</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <Box sx={{ p: 2 }}>
            <img src="https://placehold.it/650x350" alt="Project" style={{ width: '100%' }} />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">Comments</Typography>
            <Box sx={{display:'flex'}}>
              <TextField sx={{flex:'70%'}}  label="Your Comment" variant="outlined" margin="normal" />
              <Button  sx={{flex:'30%',backgroundColor:'#00bbf0',color:'#fff'}}>Submit</Button>
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
                <Typography>
                  Summary details go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Project Overview</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Overview details go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Technologies Used</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Technologies used details go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Team Size</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Team size details go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Duration</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Duration details go here.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
