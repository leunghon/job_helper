import React from 'react';
import NavBar from '../components/NavBar';
import { Box, Button, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Page: React.FC = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ mt: 4, ml: 15, mr: 15 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box
            sx={{ width: 466, height: 344 }}
          >
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" >
                Cover Letter Template
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography variant="h6">
                  Name
                </Typography>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">
                  Email
                </Typography>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Resume Template"
                variant="outlined"
                multiline
                rows={6}
                fullWidth
              />
            </Box>
          </Box>
          <Box
            sx={{ width: 466, height: 344 }}
          >
            <Box sx={{ mb: 1 }}>
              <Typography variant="h5" >
                Job Description
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Box sx={{ flexGrow: 1, mr: 2 }}>
                <Typography variant="h6">
                  Job Title
                </Typography>
                <TextField
                  fullWidth
                  label="Job Title"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">
                  Company
                </Typography>
                <TextField
                  fullWidth
                  label="Company"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Job Description"
                variant="outlined"
                multiline
                rows={6}
                fullWidth
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', mt: 2 }}> {/* Adjust width and margin as needed */}
          <Typography variant="h5">
            Resume
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{mt:1}}
          >
            Upload file
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Page;