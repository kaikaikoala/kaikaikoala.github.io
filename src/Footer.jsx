import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function MyFooter() {
  return (
      <Box
      sx={{
        py: 4, // Vertical padding (top and bottom)
        px: 2, // Horizontal padding
        mt: 'auto', // Pushes the footer to the bottom of the page
        textAlign: 'center',
      }}
    >
    <Container
      component="footer"
      >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          my: 2, // Vertical margin for the stack
        }}
      >
        {/* LinkedIn Link */}
        <Link
          href="https://www.linkedin.com/in/koalakai/"
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Link>
        
        {/* Email Link */}
        <Link
          href="mailto:kaishinpk@gmail.com"
          target="_blank"
          rel="noopener"
        >
          <IconButton aria-label="Email">
            <EmailIcon />
          </IconButton>
        </Link>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © 2025 Philip Kaishin Kawada. All Rights Reserved.
      </Typography>
    </Container>
    </Box>
  );
}
