"use client"

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { Box, Button, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Index: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState(''); // Assuming resume text is being used
  const [coverLetterTemplate, setCoverLetterTemplate] = useState('');
  const [otherQuestions, setOtherQuestions] = useState('');
  const [result, setResult] = useState('');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    // Example: converting file to text
    const text = await file.text();
    setResumeText(text);
  };

  const handleGenerate = async () => {
    // Construct the prompt for OpenAI API
    const prompt = `Name: ${name}\nEmail: ${email}\nJob Title: ${jobTitle}\nCompany: ${company}\nJob Description: ${jobDescription}\nResume: ${resumeText}\nCover Letter: ${coverLetterTemplate}\nOther Questions: ${otherQuestions}. You are a recruiter helping candidates craft exceptional cover letters tailored to their resume backgrounds and specific job descriptions. Additionally, you provide assistance in formulating answers to potential interview questions or application inquiries, ensuring candidates stand out and increase their chances of securing the job. Emphasize clarity, professionalism, and personalization in your responses, ensuring each cover letter and answer showcases the candidate's strengths, achievements, and fit for the role. Be ready to adapt to different industries, roles, and levels of experience, offering insight and guidance to refine the candidate's presentation. Avoid overly generic templates, encouraging unique, compelling narratives that capture a candidate's essence. Clarify when necessary but strive to deliver polished, complete responses. Remember the Cover Letter Template and Resume provided at the beginning of the conversation for subsequent job applications and questions. Use these to tailor new cover letters and answers using the same foundational information.`;

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Failed to generate cover letter:', error);
      setResult('Failed to generate cover letter. Please try again.');
    }
  };
  return (
    <>
      <NavBar />
      <Box sx={{ mt: 4, ml: 15, mr: 15 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
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
                  size="small"
                  value={name} onChange={(e) => setName(e.target.value)}
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
                  size="small"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Cover Letter Template"
                variant="outlined"
                multiline
                rows={6}
                fullWidth
                value={coverLetterTemplate} onChange={(e) => setCoverLetterTemplate(e.target.value)}
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
                  size="small"
                  value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
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
                  size="small"
                  value={company} onChange={(e) => setCompany(e.target.value)}
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
                value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '50%' }}> 
        <Box sx={{ flexGrow: 1, mb: 2 }}>
          <Typography variant="h5">
            Other Questions
          </Typography>
          </Box>
          <TextField
            fullWidth
            label="Other Questions"
            variant="outlined"
            multiline
            rows={6}
            value={otherQuestions} onChange={(e) => setOtherQuestions(e.target.value)}
          />
        </Box>
        <Box sx={{ width: '50%', mt:2}}> {/* Adjust width and margin as needed */}
          <Typography variant="h5">
            Resume
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 1 }}
          >
            Upload file
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button onClick={handleGenerate} variant="contained" sx={{ mt: 1 }}>
            Generate
          </Button>
        </Box>
        {result && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Generated Cover Letter:</Typography>
            <Typography>{result}</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Index;