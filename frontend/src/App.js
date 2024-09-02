import React from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Add Movie
        </Typography>
        <TextField label="Movie Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Duration" variant="outlined" fullWidth margin="normal" />
        <TextField label="Rating" variant="outlined" fullWidth margin="normal" />
        <TextField label="Release date" variant="outlined" fullWidth margin="normal" />
        <TextField label="Genre" variant="outlined" fullWidth margin="normal" />
        <TextField label="Language" variant="outlined" fullWidth margin="normal" />
        <TextField label="URL of the movie image" variant="outlined" fullWidth margin="normal" />
        <TextField label="Description" variant="outlined" fullWidth margin="normal" />
        <TextField label="Director" variant="outlined" fullWidth margin="normal" />
      </Box>
    </Container>
  );
}

export default App;
